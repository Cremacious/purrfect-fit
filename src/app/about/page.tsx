import FAQ from './faq';
import ContactForm from './contact';
import Image from 'next/image';
import serviceImage from '@/assets/services.png';

export default function AboutPage() {
  return (
    <div className="flex flex-col md:p-6 bg-white max-w-7xl mx-auto my-4 rounded-2xl shadow-lg min-h-screen">
      <div className="px-4 py-8 max-w-5xl mx-auto rounded-2xl mb-12 space-y-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:max-w-6xl max-w-2xl mx-auto ">
          <div className="text-left">
            <h2 className="text-purple-900 drop-shadow-2xl text-3xl font-bold mb-6 text-center lilita">
              About Purrfect Fit
            </h2>
            <p className="mb-4 text-[15px] text-slate-800 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque
              faucibus ex sapien vitae pellentesque sem placerat. In id cursus
              mi pretium tellus duis convallis. Tempus leo eu aenean sed diam
              urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum
              egestas. Iaculis massa nisl malesuada lacinia integer nunc
              posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad
              litora torquent per conubia nostra inceptos himenaeos. Lorem ipsum
              dolor sit amet consectetur adipiscing elit. Quisque faucibus ex
              sapien vitae pellentesque sem placerat. In id cursus mi pretium
              tellus duis convallis. Tempus leo eu aenean sed diam urna tempor.
              Pulvinar vivamus fringilla lacus nec metus bibendum egestas.
              Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut
              hendrerit semper vel class aptent taciti sociosqu.
            </p>
            <p className="mb-4 text-[15px] text-slate-800 leading-relaxed">
              Ad litora torquent per conubia nostra inceptos himenaeos. Lorem
              ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus
              ex sapien vitae pellentesque sem placerat. In id cursus mi pretium
              tellus duis convallis. Tempus leo eu aenean sed diam urna tempor.
              Pulvinar vivamus fringilla lacus nec metus bibendum egestas.
              Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut
              hendrerit semper vel class aptent taciti sociosqu. Ad litora
              torquent per conubia nostra inceptos himenaeos.
            </p>
          </div>
          <div>
            <Image
              src={serviceImage}
              alt="hero Image"
              className="rounded-lg object-contain "
              width={400}
              height={400}
              priority
            />
          </div>
        </div>
        <FAQ />
        <ContactForm />
      </div>
    </div>
  );
}
