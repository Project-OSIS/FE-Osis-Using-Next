// src/app/landingPage/components/HowItWorks.tsx
import Image from 'next/image';

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      title: "Setup Your Wallet",
      description: "Set up your wallet of choice. Connect it to the Animarket by clicking the wallet icon in the top right corner.",
      icon: "/wallet-icon.svg",
    },
    {
      id: 2,
      title: "Create Collection",
      description: "Upload your work and set up your collection. Add a description, social links and floor price.",
      icon: "/collection-icon.svg",
    },
    {
      id: 3,
      title: "Start Earning",
      description: "Choose between auctions and fixed-price listings. Start earning by selling your NFTs or trading others.",
      icon: "/earn-icon.svg",
    },
  ];

  return (
    <section className="bg-custom-dark py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-white mb-8">How It Works</h2>
        <p className="text-white mb-8">Find Out How To Get Started</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {steps.map((step) => (
            <div
              key={step.id}
              className="bg-custom-dark rounded-lg overflow-hidden shadow-lg p-4 flex flex-col items-center"
            >
              <Image
                src={step.icon}
                alt={step.title}
                width={60}
                height={60}
                className="w-12 h-12 mb-2"
              />
              <h3 className="text-xl font-bold text-white">{step.title}</h3>
              <p className="text-white">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;