'use client';
import { useState, useEffect, useRef } from 'react';
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
  const [imageFiles, setImageFiles] = useState<File[]>([]);
  const [imagePreviews, setImagePreviews] = useState<string[]>([]);
  const [defaultImageIndex, setDefaultImageIndex] = useState(0);

  const [hasVariants, setHasVariants] = useState(false);

  const form = useForm<z.infer<typeof productSchema>>({
    resolver: zodResolver(productSchema),
    defaultValues: {
      variants: [],
      name: '',
      slug: '',
      animal: '',
      category: '',
      brand: '',
      description: '',
    },
  });

  const { control, watch, reset } = form;
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'variants',
  });

  const defaultPrice = watch('price') ?? 0;
  const nameValue = watch('name');
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (hasVariants && fields.length === 0) {
      append({ optionA: '', optionB: '', price: defaultPrice, stock: 0 });
    }
    if (!hasVariants && fields.length > 0) {
      fields.forEach((_, idx) => remove(idx));
    }
  }, [hasVariants, defaultPrice, append, fields, remove]);

  useEffect(() => {
    if (nameValue !== undefined) {
      const slug = nameValue
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
        .trim();
      form.setValue('slug', slug);
    }
  }, [nameValue, form]);

  async function compressAndResizeImage(
    file: File,
    maxWidth = 800,
    maxHeight = 800,
    quality = 0.7
  ): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (event) => {
        const img = new window.Image();
        img.onload = () => {
          const canvas = document.createElement('canvas');
          let width = img.width;
          let height = img.height;
          if (width > maxWidth) {
            height = Math.round((maxWidth / width) * height);
            width = maxWidth;
          }
          if (height > maxHeight) {
            width = Math.round((maxHeight / height) * width);
            height = maxHeight;
          }
          canvas.width = width;
          canvas.height = height;
          const ctx = canvas.getContext('2d');
          if (!ctx) return reject('No canvas context');
          ctx.drawImage(img, 0, 0, width, height);
          canvas.toBlob(
            (blob) => {
              if (!blob) return reject('Compression failed');
              const r = new FileReader();
              r.onloadend = () => resolve(r.result as string);
              r.onerror = reject;
              r.readAsDataURL(blob);
            },
            'image/jpeg',
            quality
          );
        };
        img.onerror = reject;
        img.src = event.target?.result as string;
      };
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  }

  async function onImagesChange(e: React.ChangeEvent<HTMLInputElement>) {
    const files = Array.from(e.target.files ?? []);
    if (files.length === 0) return;
    const compressedPreviews = await Promise.all(
      files.map((file) => compressAndResizeImage(file, 800, 800, 0.7))
    );
    setImageFiles((prev) => [...prev, ...files]);
    setImagePreviews((prev) => {
      const updated = [...prev, ...compressedPreviews];
      form.setValue('images', updated); 
      return updated;
    });
    if (fileInputRef.current) fileInputRef.current.value = '';
  }

  function handleDeleteImage(idx: number) {
    setImageFiles((prev) => prev.filter((_, i) => i !== idx));
    setImagePreviews((prev) => {
      const updated = prev.filter((_, i) => i !== idx);
      form.setValue('images', updated); 
      return updated;
    });
    if (defaultImageIndex === idx) setDefaultImageIndex(0);
    else if (defaultImageIndex > idx) setDefaultImageIndex((d) => d - 1);
  }

  async function onSubmit(values: z.infer<typeof productSchema>) {
    try {
      console.log(values);
      if (imageFiles.some((file) => file.size > 12 * 1024 * 1024)) {
        toast.error('One or more images are too large (max 12MB each).');
        return;
      }

      const images = [...imagePreviews];
      if (
        typeof defaultImageIndex === 'number' &&
        images.length > 1 &&
        defaultImageIndex > 0 &&
        defaultImageIndex < images.length
      ) {
        const [defaultImg] = images.splice(defaultImageIndex, 1);
        images.unshift(defaultImg);
      }

      const response = await createProduct({
        ...values,
        images,
        defaultImageIndex: 0,
      });

      if (response.success) {
        toast.success(response.message);
        reset();
        setImageFiles([]);
        setImagePreviews([]);
        setDefaultImageIndex(0);
        form.reset();
      } else {
        toast.error(response.message);
      }
    } catch (error) {
      console.log(error);
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
          <div className="flex gap-4 flex-wrap">
            {imagePreviews.length > 0 ? (
              imagePreviews.map((src, idx) => (
                <div
                  key={idx}
                  className="relative w-44 h-44 flex items-center justify-center bg-gray-50 rounded-lg border"
                >
                  <Image
                    src={src}
                    alt={`Product image ${idx + 1}`}
                    width={180}
                    height={180}
                    style={{ objectFit: 'contain' }}
                    className={`w-full h-full rounded-lg border ${
                      defaultImageIndex === idx ? 'ring-4 ring-purple-500' : ''
                    }`}
                  />
                  <Button
                    type="button"
                    size="sm"
                    variant={defaultImageIndex === idx ? 'purple' : 'outline'}
                    className="absolute bottom-2 left-2"
                    onClick={() => setDefaultImageIndex(idx)}
                  >
                    {defaultImageIndex === idx ? 'Default' : 'Set Default'}
                  </Button>
                  <Button
                    type="button"
                    size="sm"
                    variant="destructive"
                    className="absolute top-2 right-2"
                    onClick={() => handleDeleteImage(idx)}
                  >
                    Delete
                  </Button>
                </div>
              ))
            ) : (
              <span className="text-yellow-800 text-5xl">📦</span>
            )}
          </div>
          <Button
            type="button"
            variant="outline"
            className="mt-2"
            onClick={() => fileInputRef.current?.click()}
          >
            Add Another Image
          </Button>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={onImagesChange}
          />

          {imagePreviews[defaultImageIndex] && (
            <div className="mt-4">
              <span className="block text-xs text-gray-500 mb-2">
                Crop Default Image
              </span>
            </div>
          )}
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
        <div>
          {' '}
          <FormField
            control={form.control}
            name="price"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Default Price</FormLabel>
                <FormControl>
                  <Input
                    value={field.value ?? ''}
                    onChange={(e) => field.onChange(Number(e.target.value))}
                    placeholder="Default Price"
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
                    <FormLabel>Option B Label (optional)</FormLabel>
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
                    placeholder={watch('optionBLabel') || 'Option B (optional)'}
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
                  append({
                    optionA: '',
                    optionB: '',
                    price: defaultPrice,
                    stock: 0,
                  })
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
