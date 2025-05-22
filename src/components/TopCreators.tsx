// src/app/landingPage/components/TopCreators.tsx
import Image from 'next/image';

const TopCreators = () => {
  const creators = [
    {
      id: 1,
      name: "Keepitreal",
      totalSales: "34.53 ETH",
      avatar: "/Avatar Placeholder.png",
    },
    {
      id: 2,
      name: "DigiLab",
      totalSales: "34.53 ETH",
      avatar: "/Avatar Placeholder.png",
    },
    // ... other creators
  ];

  return (
    <section id="topcreator" className="bg-custom-dark py-16">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div>
            <h2 className="text-3xl font-bold text-white mb-4">Top Creators</h2>
            <p className="text-white">
              Checkout Top Rated Creators On The NFT Marketplace
            </p>
          </div>
          <button className="bg-custom-purple hover:bg-custom-purple-700 text-white px-6 py-3 rounded flex items-center mt-4 md:mt-0">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-2">
              <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z" />
            </svg>
            View Rankings
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          {creators.map((creator) => (
            <div
              key={creator.id}
              className="bg-custom-dark rounded-lg overflow-hidden shadow-lg p-4"
            >
              <div className="flex items-center mb-2">
                <span className="bg-custom-purple text-white px-2 py-1 rounded">{creator.id}</span>
                <Image
                  src={creator.avatar}
                  alt={creator.name}
                  width={60}
                  height={60}
                  className="w-12 h-12 rounded-full ml-2"
                />
              </div>
              <h3 className="text-xl font-bold text-white">{creator.name}</h3>
              <p className="text-white">Total Sales: {creator.totalSales}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopCreators;