export default function ServicesPage() {
  return (
    <div className="flex flex-col bg-white max-w-7xl mx-auto my-4 rounded-2xl shadow-lg min-h-screen">
      <div className="flex flex-col space-y-4 md:mt-8">
        <h1 className="text-center text-3xl lilita">Services</h1>
        <div className="max-w-3xl mx-auto">
          <p className="text-lg font-bold text-slate-800 mb-8 text-center">
            At Purrfect Fit, we offer more than just products for your beloved
            pets. Our additional services are designed to make your life easier
            and your pet&apos;s life happier. Explore our premium offerings
            below!
          </p>
        </div>
      </div>
      <div className="space-y-12">
        {/* First */}
        <div>
          <div className="grid lg:grid-cols-2 items-center lg:gap-y-6 bg-purple-600">
            <div className="max-lg:order-1 max-lg:text-center sm:p-12 p-8 ">
              <div className="">
                <h2 className="text-white lilita drop-shadow-2xl text-center lg:text-5xl text-3xl font-bold !leading-tight">
                  Animal Protection Service
                </h2>
                <p className="text-white mt-6 text-base font-bold leading-relaxed">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit.
                  Quisque faucibus ex sapien vitae pellentesque sem placerat. In
                  id cursus mi pretium tellus duis convallis. Tempus leo eu
                  aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus
                  nec metus bibendum egestas. Iaculis massa nisl malesuada
                  lacinia integer nunc posuere. Ut hendrerit semper vel class
                  aptent taciti sociosqu. Ad litora torquent per conubia nostra
                  inceptos himenaeos.
                </p>
              </div>
              <div className="text-white space-y-2 font-bold mt-4">
                <p>Phone: (123) 456-7890</p>
                <p>Email: contact@purrfectfit.com</p>
              </div>
            </div>
            <div className="lg:h-[480px] h-full flex items-center">
              <img
                src="https://readymadeui.com/team-image.webp"
                className="w-full h-full object-cover"
                alt="Dining Experience"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3  gap-6 px-4 my-4">
            <div className="bg-purple-200 p-6 rounded-md flex flex-col justify-evenly">
              <h3 className="text-2xl text-center font-bold mb-2 text-slate-800">
                Fact One
              </h3>
              <p className="text-base font-bold text-center text-slate-800">
                Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque
                faucibus ex sapien vitae pellentesque sem placerat.
              </p>
            </div>
            <div className="bg-purple-200 p-6 rounded-md flex flex-col justify-evenly">
              <h3 className="text-2xl text-center font-bold mb-2 text-slate-800">
                Fact One
              </h3>
              <p className="text-base font-bold text-center text-slate-800">
                Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque
                faucibus ex sapien vitae pellentesque sem placerat.
              </p>
            </div>
            <div className="bg-purple-200 p-6 rounded-md flex flex-col justify-evenly">
              <h3 className="text-2xl text-center font-bold mb-2 text-slate-800">
                Fact One
              </h3>
              <p className="text-base font-bold text-center text-slate-800">
                Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque
                faucibus ex sapien vitae pellentesque sem placerat.
              </p>
            </div>
          </div>
        </div>
        <div className="border-b-2 "></div>
        {/* Second */}
        <div>
          <div className="grid lg:grid-cols-2 items-center lg:gap-y-6 bg-purple-600">
            <div className="lg:h-[480px] h-full flex items-center">
              <img
                src="https://readymadeui.com/team-image.webp"
                className="w-full h-full object-cover"
                alt="Dining Experience"
              />
            </div>
            <div className="max-lg:order-1 max-lg:text-center sm:p-12 p-8 ">
              <div className="">
                <h2 className="text-white lilita drop-shadow-2xl text-center lg:text-5xl text-3xl font-bold !leading-tight">
                  Animal Protection Service
                </h2>
                <p className="text-white mt-6 text-base font-bold leading-relaxed">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit.
                  Quisque faucibus ex sapien vitae pellentesque sem placerat. In
                  id cursus mi pretium tellus duis convallis. Tempus leo eu
                  aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus
                  nec metus bibendum egestas. Iaculis massa nisl malesuada
                  lacinia integer nunc posuere. Ut hendrerit semper vel class
                  aptent taciti sociosqu. Ad litora torquent per conubia nostra
                  inceptos himenaeos.
                </p>
              </div>
              <div className="text-white space-y-2 font-bold mt-4">
                <p>Phone: (123) 456-7890</p>
                <p>Email: contact@purrfectfit.com</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3  gap-6 px-4 my-4">
            <div className="bg-purple-200 p-6 rounded-md flex flex-col justify-evenly">
              <h3 className="text-2xl text-center font-bold mb-2 text-slate-800">
                Fact One
              </h3>
              <p className="text-base font-bold text-center text-slate-800">
                Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque
                faucibus ex sapien vitae pellentesque sem placerat.
              </p>
            </div>
            <div className="bg-purple-200 p-6 rounded-md flex flex-col justify-evenly">
              <h3 className="text-2xl text-center font-bold mb-2 text-slate-800">
                Fact One
              </h3>
              <p className="text-base font-bold text-center text-slate-800">
                Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque
                faucibus ex sapien vitae pellentesque sem placerat.
              </p>
            </div>
            <div className="bg-purple-200 p-6 rounded-md flex flex-col justify-evenly">
              <h3 className="text-2xl text-center font-bold mb-2 text-slate-800">
                Fact One
              </h3>
              <p className="text-base font-bold text-center text-slate-800">
                Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque
                faucibus ex sapien vitae pellentesque sem placerat.
              </p>
            </div>
          </div>
        </div>
        <div className="border-b-2 "></div>
        {/* Third */}
        <div className="mb-12">
          <div className="grid lg:grid-cols-2 items-center lg:gap-y-6 bg-purple-600">
            <div className="max-lg:order-1 max-lg:text-center sm:p-12 p-8 ">
              <div className="">
                <h2 className="text-white lilita drop-shadow-2xl text-center lg:text-5xl text-3xl font-bold !leading-tight">
                  Animal Protection Service
                </h2>
                <p className="text-white mt-6 text-base font-bold leading-relaxed">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit.
                  Quisque faucibus ex sapien vitae pellentesque sem placerat. In
                  id cursus mi pretium tellus duis convallis. Tempus leo eu
                  aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus
                  nec metus bibendum egestas. Iaculis massa nisl malesuada
                  lacinia integer nunc posuere. Ut hendrerit semper vel class
                  aptent taciti sociosqu. Ad litora torquent per conubia nostra
                  inceptos himenaeos.
                </p>
              </div>
              <div className="text-white space-y-2 font-bold mt-4">
                <p>Phone: (123) 456-7890</p>
                <p>Email: contact@purrfectfit.com</p>
              </div>
            </div>
            <div className="lg:h-[480px] h-full flex items-center">
              <img
                src="https://readymadeui.com/team-image.webp"
                className="w-full h-full object-cover"
                alt="Dining Experience"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3  gap-6 px-4 my-4">
            <div className="bg-purple-200 p-6 rounded-md flex flex-col justify-evenly">
              <h3 className="text-2xl text-center font-bold mb-2 text-slate-800">
                Fact One
              </h3>
              <p className="text-base font-bold text-center text-slate-800">
                Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque
                faucibus ex sapien vitae pellentesque sem placerat.
              </p>
            </div>
            <div className="bg-purple-200 p-6 rounded-md flex flex-col justify-evenly">
              <h3 className="text-2xl text-center font-bold mb-2 text-slate-800">
                Fact One
              </h3>
              <p className="text-base font-bold text-center text-slate-800">
                Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque
                faucibus ex sapien vitae pellentesque sem placerat.
              </p>
            </div>
            <div className="bg-purple-200 p-6 rounded-md flex flex-col justify-evenly">
              <h3 className="text-2xl text-center font-bold mb-2 text-slate-800">
                Fact One
              </h3>
              <p className="text-base font-bold text-center text-slate-800">
                Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque
                faucibus ex sapien vitae pellentesque sem placerat.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
<p>Welcome to our online store!</p>;
