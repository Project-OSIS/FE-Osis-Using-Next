// src/app/landingPage/components/HeroSection.tsx
import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className="bg-custom-dark py-16">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Hello World!!<br />Welcome To<br />Osis BobotSari
          </h1>
          <p className="text-white mb-8">
            Osis SMA Bobosari is Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi libero et tempora possimus! Facere cumque sunt sit, suscipit quasi quo saepe soluta ad incidunt beatae hic, totam iste, qui magnam?
          </p>
          {/* <button className="bg-custom-purple hover:bg-custom-purple-700 text-white px-6 py-3 rounded flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-2">
              <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z" />
            </svg>
            LetsGoo
          </button> */}
        </div>
        <div className="w-full md:w-1/2">
          <Image
            src="/hero-image.jpg"
            alt="Hero Image"
            width={600}
            height={400}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;