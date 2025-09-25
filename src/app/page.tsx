import Image from 'next/image';
import stockAnimals from '@/assets/hero3.png';
import ProductRow from '@/components/products/product-row';
import tacticalKingdom from '@/assets/brand-logos/tactical-kingdom-high-resolution-logo-transparent.png';
import pawgenics from '@/assets/brand-logos/pawgenics-high-resolution-logo-transparent.png';
import wildWears from '@/assets/brand-logos/wild-wears-high-resolution-logo-transparent.png';
import fetchfind from '@/assets/brand-logos/fetch-high-resolution-logo-transparent.png';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';

export default function Home() {
  return (
    <div className="bg-purple-300">
      <div className="bg-purple-500 py-10 px-6 sm:px-12">
        <div className="max-w-screen-xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-12 items-start">
            <div className="order-1 lg:order-1">
              <div className="space-y-4 ">
                <h2 className="text-white text-center drop-shadow-xl lilita xl:text-6xl md:text-5xl text-4xl font-bold ">
                  Everyday Pets.
                </h2>
                <h2 className="text-white text-center drop-shadow-xl lilita xl:text-6xl md:text-5xl text-4xl font-bold ">
                  Everyday Supplies.
                </h2>
              </div>

              <div className="aspect-[7/4] order-2 lg:order-2 my-4 md:hidden">
                <Image
                  alt="Dashboard"
                  width={500}
                  height={600}
                  src={stockAnimals}
                  className="w-full h-full rounded-full object-contain"
                />
              </div>

              <p className="text-white font-bold text-lg text-center mt-4 leading-relaxed">
                Purrfect Fit is your one-stop destination for premium pet
                supplies, offering a carefully curated selection for all major
                pets—from playful pups and curious cats to feathered friends and
                small animals. We proudly feature products from the most trusted
                and popular brands, ensuring your companions receive the very
                best in nutrition, comfort, and care. Whether you’re shopping
                for everyday essentials or something special, you’ll find
                everything you need to keep your pets happy, healthy, and
                thriving at Purrfect Fit.
              </p>

              {/* <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-6 justify-center items-center">
                <Image
                  src={tacticalKingdom}
                  className=" shrink-0"
                  alt="brand-logo1"
                  width={150}
                  height={100}
                />
                <Image
                  src={pawgenics}
                  className=" shrink-0"
                  alt="brand-logo1"
                  width={150}
                  height={200}
                />
                <Image
                  src={wildWears}
                  className=" shrink-0"
                  alt="brand-logo1"
                  width={120}
                  height={200}
                />
                <Image
                  src={fetchfind}
                  className=" shrink-0"
                  alt="brand-logo1"
                  width={150}
                  height={200}
                />
              </div> */}
            </div>
            <div className="aspect-[7/4] order-2 lg:order-2 hidden md:block">
              <Image
                alt="Dashboard"
                width={500}
                height={600}
                src={stockAnimals}
                className="w-full h-full rounded-full object-contain"
              />
            </div>
          </div>
        </div>
        {/* <div className="flex justify-center max-w-7xl mx-auto ">
          <div className="mt-6 w-full grid grid-cols-2 md:grid-cols-4  gap-y-6 justify-center items-center ">
            <Image
              src={tacticalKingdom}
              className=" shrink-0"
              alt="brand-logo1"
              width={150}
              height={100}
            />
            <Image
              src={pawgenics}
              className=" shrink-0"
              alt="brand-logo1"
              width={150}
              height={200}
            />
            <Image
              src={wildWears}
              className=" shrink-0"
              alt="brand-logo1"
              width={120}
              height={200}
            />
            <Image
              src={fetchfind}
              className=" shrink-0"
              alt="brand-logo1"
              width={150}
              height={200}
            />
          </div>
        </div> */}
      </div>
      <div className="mt-8 flex flex-col justify-center items-center">
        <Badge className="bg-purple-500">
          <div className="text-white drop-shadow-2xl lilita xl:text-4xl md:text-3xl text-2xl font-bold !leading-tight text-center">
            Search Brand
          </div>
        </Badge>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 max-w-7xl mx-auto ">
          <Link
            href={'/products?brand=Tactical+Kingdom'}
            className="bg-white p-4 rounded-2xl flex items-center justify-center h-40 md:h-48"
          >
            <Image
              src={tacticalKingdom}
              alt="brand-logo1"
              width={250}
              height={150}
              className="object-contain max-w-full max-h-full"
            />
          </Link>
          <Link
            href={'/products?brand=Pawgenic'}
            className="bg-white p-4 rounded-2xl flex items-center justify-center h-40 md:h-48"
          >
            <Image
              src={pawgenics}
              alt="brand-logo1"
              width={250}
              height={150}
              className="object-contain max-w-full max-h-full"
            />
          </Link>
          <Link
            href={'/products?brand=Wild+Wears'}
            className="bg-white p-4 rounded-2xl flex items-center justify-center h-40 md:h-48"
          >
            <Image
              src={wildWears}
              alt="brand-logo1"
              width={250}
              height={150}
              className="object-contain max-w-full max-h-full"
            />
          </Link>
          <Link
            href={'/products?brand=Fetch%26Find'}
            className="bg-white p-4 rounded-2xl flex items-center justify-center h-40 md:h-48"
          >
            <Image
              src={fetchfind}
              alt="brand-logo1"
              width={250}
              height={150}
              className="object-contain max-w-full max-h-full"
            />
          </Link>
        </div>
      </div>
      <div className="bg-purple-600 my-8 py-4 flex flex-col justify-center items-center">
        <Badge className="bg-purple-500 px-2 mt-4 ">
          <h2 className="text-white drop-shadow-2xl lilita xl:text-4xl md:text-3xl text-2xl font-bold !leading-tight text-center">
            Latest Products
          </h2>
        </Badge>
        <div className="">
          <div className="max-w-7xl mx-auto p-2">
            <ProductRow />
          </div>
        </div>
      </div>
    </div>
  );
}
