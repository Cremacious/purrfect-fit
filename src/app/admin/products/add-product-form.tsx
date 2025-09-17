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
  const [imageFiles, setImageFiles] = useState<File[]>([]);
  const [imagePreviews, setImagePreviews] = useState<string[]>([]);
  const [defaultImageIndex, setDefaultImageIndex] = useState(0);
  const [defaultImageCrop, setDefaultImageCrop] = useState<{
    x: number;
    y: number;
    width: number;
    height: number;
  } | undefined>(undefined);
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

  const defaultPrice = watch('price') ?? 0;

  useEffect(() => {
    if (hasVariants && fields.length === 0) {
      append({ optionA: '', optionB: '', price: defaultPrice, stock: 0 });
    }
    if (!hasVariants && fields.length > 0) {
      fields.forEach((_, idx) => remove(idx));
    }
  }, [hasVariants, defaultPrice, append, fields, remove]);

  function onImagesChange(e: React.ChangeEvent<HTMLInputElement>) {
    const files = Array.from(e.target.files ?? []);
    setImageFiles(files);
    Promise.all(
      files.map(
        (file) =>
          new Promise<string>((resolve, reject) => {
            const reader = new FileReader();
            reader.onloadend = () => resolve(reader.result as string);
            reader.onerror = reject;
            reader.readAsDataURL(file);
          })
      )
    ).then(setImagePreviews);
  }

  // async function resizeAndConvertToBase64(
  //   file: File,
  //   maxWidth = 1600,
  //   maxBytes = 700 * 1024
  // ) {
  //   if (file.size <= maxBytes) {
  //     return new Promise<string>((resolve, reject) => {
  //       const reader = new FileReader();
  //       reader.onload = () => resolve(reader.result as string);
  //       reader.onerror = (err) => reject(err);
  //       reader.readAsDataURL(file);
  //     });
  //   }

  //   const dataUrl = await new Promise<string>((resolve, reject) => {
  //     const r = new FileReader();
  //     r.onload = () => resolve(r.result as string);
  //     r.onerror = (e) => reject(e);
  //     r.readAsDataURL(file);
  //   });

  //   const img = await new Promise<HTMLImageElement>((resolve, reject) => {
  //     const image = document.createElement('img') as HTMLImageElement;
  //     image.onload = () => resolve(image);
  //     image.onerror = () => reject(new Error('Image failed to load'));
  //     image.src = dataUrl;
  //   });

  //   const ratio = Math.min(1, maxWidth / img.width);
  //   const canvas = document.createElement('canvas');
  //   canvas.width = Math.round(img.width * ratio);
  //   canvas.height = Math.round(img.height * ratio);
  //   const ctx = canvas.getContext('2d');
  //   if (!ctx) throw new Error('Failed to get canvas context');
  //   ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

  //   let quality = 0.9;
  //   let blob: Blob | null = null;
  //   while (quality >= 0.35) {
  //     blob = await new Promise<Blob | null>((resolve) =>
  //       canvas.toBlob((b) => resolve(b), 'image/jpeg', quality)
  //     );
  //     if (!blob) break;
  //     if (blob.size <= maxBytes) break;
  //     quality -= 0.1;
  //   }

  //   if (!blob) throw new Error('Image compression failed');

  //   return new Promise<string>((resolve, reject) => {
  //     const r = new FileReader();
  //     r.onload = () => resolve(r.result as string);
  //     r.onerror = (e) => reject(e);
  //     r.readAsDataURL(blob as Blob);
  //   });
  // }

  async function onSubmit(values: z.infer<typeof productSchema>) {
    try {
      if (imageFiles.some((file) => file.size > 12 * 1024 * 1024)) {
        toast.error('One or more images are too large (max 12MB each).');
        return;
      }

      // Optionally resize/crop images here if needed
      // For now, use previews as data URLs
      const images = imagePreviews;

      const response = await createProduct({
        ...values,
        images,
        defaultImageIndex,
        defaultImageCrop,
      });
      if (response.success) {
        toast.success(response.message);
        reset();
        setImageFiles([]);
        setImagePreviews([]);
        setDefaultImageIndex(0);
        setDefaultImageCrop(undefined);
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
          <div className="flex gap-2 flex-wrap">
            {imagePreviews.length > 0 ? (
              imagePreviews.map((src, idx) => (
                <div key={idx} className="relative">
                  <Image
                    src={src}
                    alt={`Product image ${idx + 1}`}
                    className={`object-cover rounded-lg border ${
                      defaultImageIndex === idx ? 'ring-4 ring-purple-500' : ''
                    }`}
                    width={120}
                    height={120}
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
                </div>
              ))
            ) : (
              <span className="text-yellow-800 text-5xl">📦</span>
            )}
          </div>
          <FormLabel className="font-semibold text-gray-700">
            Upload Images
          </FormLabel>
          <input
            type="file"
            accept="image/*"
            multiple
            className="block w-full text-sm text-gray-700 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-yellow-100 file:text-yellow-700 hover:file:bg-yellow-200 transition"
            onChange={onImagesChange}
          />
          {/* Cropping UI for default image (pseudo-code, replace with react-easy-crop or similar) */}
          {imagePreviews[defaultImageIndex] && (
            <div className="mt-4">
              <span className="block text-xs text-gray-500 mb-2">
                Crop Default Image
              </span>
              {/* TODO: Integrate cropping library here. Save crop data to setDefaultImageCrop */}
              {/* Example: <Cropper src={imagePreviews[defaultImageIndex]} onCropChange={setDefaultImageCrop} /> */}
              <span className="block text-xs text-gray-400">
                (Cropping UI goes here)
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
            {/* <FormField
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
            /> */}
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
