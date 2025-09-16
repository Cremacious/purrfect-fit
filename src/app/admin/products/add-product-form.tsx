'use client';
import { useState, useEffect } from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import Image from 'next/image';
import { productSchema } from '@/lib/validators/product.validator';
import { createProduct } from '@/lib/actions/product.actions';
import { toast } from 'sonner';

export default function AddProductForm() {
  const [coverFile, setCoverFile] = useState<File | null>(null);
  const [coverPreview, setCoverPreview] = useState<string | null>(null);
  const [hasVariants, setHasVariants] = useState(false);

  const form = useForm<z.infer<typeof productSchema>>({
    resolver: zodResolver(productSchema),
    defaultValues: {
      variants: [],
    },
  });

  const { control, watch, reset } = form;
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'variants',
  });

  useEffect(() => {
    if (hasVariants && fields.length === 0) {
      append({ optionA: '', optionB: '', price: 0, stock: 0 });
    }
    if (!hasVariants && fields.length > 0) {
      fields.forEach((_, idx) => remove(idx));
    }
  }, [hasVariants]);

  function onCoverChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (file) {
      setCoverFile(file);
      const reader = new FileReader();
      reader.onloadend = () => setCoverPreview(reader.result as string);
      reader.readAsDataURL(file);
    } else {
      setCoverPreview(null);
      setCoverFile(null);
    }
  }

  async function resizeAndConvertToBase64(
    file: File,
    maxWidth = 1600,
    maxBytes = 700 * 1024
  ) {
    if (file.size <= maxBytes) {
      return new Promise<string>((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result as string);
        reader.onerror = (err) => reject(err);
        reader.readAsDataURL(file);
      });
    }

    const dataUrl = await new Promise<string>((resolve, reject) => {
      const r = new FileReader();
      r.onload = () => resolve(r.result as string);
      r.onerror = (e) => reject(e);
      r.readAsDataURL(file);
    });

    const img = await new Promise<HTMLImageElement>((resolve, reject) => {
      const image = document.createElement('img') as HTMLImageElement;
      image.onload = () => resolve(image);
      image.onerror = () => reject(new Error('Image failed to load'));
      image.src = dataUrl;
    });

    const ratio = Math.min(1, maxWidth / img.width);
    const canvas = document.createElement('canvas');
    canvas.width = Math.round(img.width * ratio);
    canvas.height = Math.round(img.height * ratio);
    const ctx = canvas.getContext('2d');
    if (!ctx) throw new Error('Failed to get canvas context');
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

    let quality = 0.9;
    let blob: Blob | null = null;
    while (quality >= 0.35) {
      blob = await new Promise<Blob | null>((resolve) =>
        canvas.toBlob((b) => resolve(b), 'image/jpeg', quality)
      );
      if (!blob) break;
      if (blob.size <= maxBytes) break;
      quality -= 0.1;
    }

    if (!blob) throw new Error('Image compression failed');

    return new Promise<string>((resolve, reject) => {
      const r = new FileReader();
      r.onload = () => resolve(r.result as string);
      r.onerror = (e) => reject(e);
      r.readAsDataURL(blob as Blob);
    });
  }

  async function onSubmit(values: z.infer<typeof productSchema>) {
    try {
      console.log('values', values);
      if (coverFile && coverFile.size > 12 * 1024 * 1024) {
        toast.error('Cover image is too large (max 12MB).');
        return;
      }

      let coverImageBase64: string | undefined = undefined;
      if (coverFile) {
        coverImageBase64 = await resizeAndConvertToBase64(
          coverFile,
          1600,
          700 * 1024
        );
      }

      const response = await createProduct({
        ...values,
        coverImageBase64,
      });
      if (response.success) {
        toast.success(response.message);
        reset();
        setCoverFile(null);
        setCoverPreview(null);
      } else {
        toast.error(response.message);
      }
    } catch (error) {
      toast.error('Failed to submit the form. Please try again.');
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 max-w-3xl mx-auto py-10 bg-white rounded-xl shadow-lg p-8"
      >
        <div className="flex flex-col items-center gap-4">
          {coverPreview ? (
            <Image
              src={coverPreview}
              alt="Product cover preview"
              className="object-cover rounded-lg border"
              width={180}
              height={180}
            />
          ) : (
            <span className="text-yellow-800 text-5xl">📦</span>
          )}
          <FormLabel className="font-semibold text-gray-700">
            Upload Cover
          </FormLabel>
          <input
            type="file"
            accept="image/*"
            className="block w-full text-sm text-gray-700 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-yellow-100 file:text-yellow-700 hover:file:bg-yellow-200 transition"
            onChange={onCoverChange}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="Product name" type="text" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="slug"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Slug</FormLabel>
                <FormControl>
                  <Input placeholder="product-slug" type="text" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="animal"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Animal</FormLabel>
                <FormControl>
                  <Input placeholder="e.g. cats" type="text" {...field} />
                </FormControl>
                <FormDescription>
                  Must be plural (i.e Cats not Cat)
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Category</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="accessories">Accessories</SelectItem>
                    <SelectItem value="apparel">Apparel</SelectItem>
                    <SelectItem value="toys">Toys</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="brand"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Brand</FormLabel>
                <FormControl>
                  <Input placeholder="Brand name" type="text" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Product description"
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex items-center gap-4">
          <span className="font-semibold text-gray-700">
            Does this product have variants?
          </span>
          <Button
            type="button"
            variant={hasVariants ? 'outline' : 'purple'}
            onClick={() => setHasVariants(false)}
          >
            No
          </Button>
          <Button
            type="button"
            variant={hasVariants ? 'purple' : 'outline'}
            onClick={() => setHasVariants(true)}
          >
            Yes
          </Button>
        </div>

        {!hasVariants ? (
          <div className="grid grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="price"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Price</FormLabel>
                  <FormControl>
                    <Input
                      value={field.value ?? ''}
                      onChange={(e) => field.onChange(Number(e.target.value))}
                      placeholder="Price"
                      type="number"
                      name={field.name}
                      ref={field.ref}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="stock"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Stock</FormLabel>
                  <FormControl>
                    <Input
                      value={field.value ?? ''}
                      onChange={(e) => field.onChange(Number(e.target.value))}
                      placeholder="Stock"
                      type="number"
                      name={field.name}
                      ref={field.ref}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        ) : (
          <>
            <div className="grid grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="optionALabel"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Option A Label</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g. Size" type="text" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="optionBLabel"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Option B Label</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g. Color" type="text" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="space-y-4">
              {fields.map((field, idx) => (
                <div
                  key={field.id}
                  className="flex gap-2 mb-2 bg-purple-50 p-4 rounded-lg border"
                >
                  <Input
                    {...form.register(`variants.${idx}.optionA`)}
                    placeholder={watch('optionALabel') || 'Option A'}
                  />
                  <Input
                    {...form.register(`variants.${idx}.optionB`)}
                    placeholder={watch('optionBLabel') || 'Option B'}
                  />
                  <Input
                    {...form.register(`variants.${idx}.price`, {
                      valueAsNumber: true,
                    })}
                    className="bg-red-200"
                    placeholder="Price"
                    type="number"
                  />
                  <Input
                    {...form.register(`variants.${idx}.stock`, {
                      valueAsNumber: true,
                    })}
                    placeholder="Stock"
                    type="number"
                  />
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => remove(idx)}
                  >
                    Remove
                  </Button>
                </div>
              ))}
              <Button
                type="button"
                onClick={() =>
                  append({ optionA: '', optionB: '', price: 0, stock: 0 })
                }
                variant="purple"
                className="mb-4"
              >
                Add Variant
              </Button>
            </div>
          </>
        )}
        <Button type="submit" variant="purple" className="w-full mt-6">
          Submit
        </Button>
      </form>
    </Form>
  );
}
