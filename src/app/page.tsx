import Image from 'next/image';
import stockAnimals from '@/assets/stock-animals.jpg';
import ProductRow from '@/components/products/product-row';

export default function Home() {
  return (
    <div className="bg-white">
      <div className="bg-purple-500 py-14 px-6 sm:px-12">
        <div className="max-w-screen-xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-12 items-start">
            <div>
              <div className="space-y-4 mb-8">
                <h2 className="text-white text-center drop-shadow-xl lilita xl:text-6xl md:text-5xl text-4xl font-bold ">
                  Everyday Pets.
                </h2>
                <h2 className="text-white text-center drop-shadow-xl lilita xl:text-6xl md:text-5xl text-4xl font-bold ">
                  Everyday Supplies.
                </h2>
              </div>

              <p className="text-white font-bold text-lg text-center  leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque
                faucibus ex sapien vitae pellentesque sem placerat. In id cursus
                mi pretium tellus duis convallis. Tempus leo eu aenean sed diam
                urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum
                egestas. Iaculis massa nisl malesuada lacinia integer nunc
                posuere. Ut hendrerit semper vel class aptent taciti sociosqu.
              </p>

              <div className="mt-12 flex flex-wrap gap-x-8 gap-y-6">
                <img
                  src="https://readymadeui.com/images/brand-logo1.webp"
                  className="w-32 shrink-0"
                  alt="brand-logo1"
                />
                <img
                  src="https://readymadeui.com/images/brand-logo2.webp"
                  className="w-32 shrink-0"
                  alt="brand-logo2"
                />
                <img
                  src="https://readymadeui.com/images/brand-logo3.webp"
                  className="w-32 shrink-0"
                  alt="brand-logo3"
                />
                <img
                  src="https://readymadeui.com/images/brand-logo4.webp"
                  className="w-32 shrink-0"
                  alt="brand-logo4"
                />
              </div>
            </div>
            <div className="aspect-[7/4]">
              <Image
                alt="Dashboard"
                width={500}
                height={500}
                src={stockAnimals}
                className="shrink-0 w-full h-full rounded-md object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <h2 className="text-slate-800 xl:text-4xl md:text-3xl text-2xl font-bold !leading-tight">
          Explore Our Products
        </h2>
        <div className="bg-purple-300 p-2">
          <ProductRow />
        </div>
      </div>
    </div>
  );
}
