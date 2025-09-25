import Image from 'next/image';
import turtleImage from '@/assets/service-images/turtles.png';
import beaversImage from '@/assets/service-images/beavers.png';
import peacocksImage from '@/assets/service-images/peacocks.png';
import serviceImage from '@/assets/services.png';

export default function ServicesPage() {
  return (
    <div className="flex flex-col bg-purple-100 max-w-7xl mx-auto my-4 rounded-2xl shadow-lg min-h-screen">
      <div className="max-w-4xl mx-auto p-4 ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 items-center">
          <div className="flex items-center justify-center">
            <Image
              src={serviceImage}
              alt="Services"
              height={300}
              width={200}
              className="rounded-2xl w-full h-auto max-h-[350px] object-cover"
            />
          </div>

          <div className="flex flex-col space-y-4">
            <h1 className="text-3xl lilita text-center ">Services</h1>
            <div className="max-w-3xl mx-auto md:mx-0">
              <p className="text-lg font-bold text-slate-800 mb-4 text-center ">
                At Purrfect Fit, we offer more than just products for your
                beloved pets. Our additional services are designed to make your
                life easier and your pet&apos;s life happier.
              </p>
              <p className="text-lg font-bold text-slate-800 mb-4 text-center ">
                Explore our premium offerings below!
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="border-b-2 mb-8"></div>
      <div className="space-y-12">
        {/* First */}
        <div>
          <div className="grid lg:grid-cols-2 items-center lg:gap-y-6 bg-purple-600">
            <div className="max-lg:order-1 max-lg:text-center sm:p-12 p-8 ">
              <div className="">
                <h2 className="text-white lilita drop-shadow-2xl text-center md:text-3xl text-2xl font-bold !leading-tight">
                  Sea Turtle Protection Program
                </h2>
                <p className="text-white mt-6 text-base font-bold leading-relaxed">
                  Introducing our elite Turtle Security Guard Service—where
                  safety meets expertise for your precious hatchlings. As sea
                  turtles begin their life’s journey from nest to ocean, they
                  face countless threats from predators, especially seagulls.
                  Our highly trained bodyguards are dedicated to ensuring every
                  turtle reaches the water unharmed. Equipped with advanced
                  martial arts skills and weapon proficiency, our team stands
                  vigilant against aerial and ground threats, providing a
                  protective shield for your hatchlings. With years of
                  experience in wildlife security and a passion for
                  conservation, our guards combine physical prowess with
                  strategic defense tactics, guaranteeing peace of mind for
                  conservationists and nature lovers alike. Trust us to
                  safeguard your turtles’ first steps—because every life
                  deserves a fighting chance.
                </p>
              </div>
              {/* <div className="text-white space-y-2 font-bold mt-4">
                <p>Phone: (123) 456-7890</p>
                <p>Email: contact@purrfectfit.com</p>
              </div> */}
            </div>
            <div className="lg:h-[600px] h-full flex items-center">
              <Image
                src={turtleImage}
                className="w-full h-full object-cover"
                alt="Dining Experience"
              />
            </div>
          </div>
          {/* <div className="grid grid-cols-2 md:grid-cols-3  gap-6 px-4 my-4">
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
          </div> */}
        </div>
        <div className="border-b-2 "></div>
        {/* Second */}
        <div>
          <div className="grid lg:grid-cols-2 items-center lg:gap-y-6 bg-purple-600">
            <div className="lg:h-[600px] h-full flex items-center">
              <Image
                src={beaversImage}
                className="w-full h-full object-cover"
                alt="Dining Experience"
              />
            </div>
            <div className="max-lg:order-1 max-lg:text-center sm:p-12 p-8 ">
              <div className="">
                <h2 className="text-white lilita drop-shadow-2xl text-center lg:text-3xl text-2xl font-bold !leading-tight">
                  Beaver Architecture Classes
                </h2>
                <p className="text-white mt-6 text-base font-bold leading-relaxed">
                  Unlock your beaver’s full potential with our exclusive Modern
                  Architecture Classes, designed specifically for the
                  industrious and eager beaver! Led by renowned architects and
                  industry leaders, our program covers the latest trends in
                  sustainable design, advanced dam engineering, and innovative
                  construction techniques. Each class blends hands-on workshops
                  with expert lectures, empowering beavers to transform their
                  natural talents into architectural masterpieces. Whether your
                  beaver dreams of building eco-friendly lodges or mastering the
                  art of glass and steel, our curriculum provides the tools and
                  inspiration needed to excel in today’s competitive landscape.
                  Join a community of forward-thinking beavers and give your
                  companion the skills to shape the future of aquatic
                  architecture.
                </p>
              </div>
              <div className="text-white space-y-2 font-bold mt-4">
                <p>
                  Disclaimer: All classes require a beaver high school diploma
                  or GED equivalent. Classes are not accredited.
                </p>
              </div>
            </div>
          </div>
          {/* <div className="grid grid-cols-2 md:grid-cols-3  gap-6 px-4 my-4">
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
          </div> */}
        </div>
        <div className="border-b-2 "></div>
        {/* Third */}
        <div className="mb-12">
          <div className="grid lg:grid-cols-2 items-center lg:gap-y-6 bg-purple-600">
            <div className="max-lg:order-1 max-lg:text-center sm:p-12 p-8 ">
              <div className="">
                <h2 className="text-white lilita drop-shadow-2xl text-center lg:text-3xl text-2xl font-bold !leading-tight">
                  Peacock Dance Lessons
                </h2>
                <p className="text-white mt-6 text-base font-bold leading-relaxed">
                  Step into the spotlight with our exclusive Peacock Dance
                  Lessons, led by the legendary instructor Phil—an animal dance
                  maestro with over 25 years of experience inspiring movement in
                  creatures great and small. Phil’s unwavering compassion and
                  dedication to the art of dance shine through in every lesson,
                  ensuring that each peacock discovers its unique rhythm and
                  grace. Whether your peacock is a beginner or a seasoned
                  performer, Phil’s expert guidance and innovative techniques
                  guarantee dazzling results, no matter the challenge. Join a
                  vibrant community of dancing peacocks and experience the joy,
                  confidence, and elegance that only Phil’s teaching can
                  deliver. Give your peacock the gift of movement and let their
                  true colors shine on the dance floor!
                </p>
              </div>
              {/* <div className="text-white space-y-2 font-bold mt-4">
                <p>Phone: (123) 456-7890</p>
                <p>Email: contact@purrfectfit.com</p>
              </div> */}
            </div>
            <div className="lg:h-[480px] h-full flex items-center">
              <Image
                src={peacocksImage}
                className="w-full h-full object-cover"
                alt="Dining Experience"
              />
            </div>
          </div>
          {/* <div className="grid grid-cols-2 md:grid-cols-3  gap-6 px-4 my-4">
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
          </div> */}
        </div>
      </div>
    </div>
  );
}
<p>Welcome to our online store!</p>;
