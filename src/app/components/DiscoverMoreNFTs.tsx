// src/app/landingPage/components/DiscoverMoreNFTs.tsx
import Image from 'next/image';

const DiscoverMoreNFTs = () => {
  const nfts = [
    {
      id: 1,
      name: "Distant Galaxy",
      artist: "MoonDancer",
      price: "1.63 ETH",
      image: "/nft1.jpg",
    },
    {
      id: 2,
      name: "Life On Edena",
      artist: "NebulaKid",
      price: "0.33 wETH",
      image: "/nft2.jpg",
    },
    // ... other NFTs
  ];

  return (
    <section className="bg-custom-dark py-16">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div>
            <h2 className="text-3xl font-bold text-white mb-4">Discover More NFTs</h2>
            <p className="text-white">Explore New Trending NFTs</p>
          </div>
          <button className="bg-custom-purple hover:bg-custom-purple-700 text-white px-6 py-3 rounded flex items-center mt-4 md:mt-0">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-2">
              <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z" />
            </svg>
            See All
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-8">
          {nfts.map((nft) => (
            <div
              key={nft.id}
              className="bg-custom-dark rounded-lg overflow-hidden shadow-lg"
            >
              <Image
                src={nft.image}
                alt={nft.name}
                width={300}
                height={200}
                className="w-full h-full object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold text-white">{nft.name}</h3>
                <p className="text-white">{nft.artist}</p>
                <p className="text-white">Price: {nft.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DiscoverMoreNFTs;