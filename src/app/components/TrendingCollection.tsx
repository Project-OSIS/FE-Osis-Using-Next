// src/app/landingPage/components/TrendingCollections.tsx
import Image from 'next/image';

const TrendingCollections = () => {
  const collections = [
    {
      id: 1,
      name: "DSGN Animals",
      artist: "MrFox",
      image: "/collection1.jpg",
      count: 1025,
    },
    {
      id: 2,
      name: "Magic Mushrooms",
      artist: "Shroomie",
      image: "/collection2.jpg",
      count: 1025,
    },
    {
      id: 3,
      name: "Disco Machines",
      artist: "BeKind2Robots",
      image: "/collection3.jpg",
      count: 1025,
    },
  ];

  return (
    <section className="bg-custom-dark py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-white mb-8">Trending Collection</h2>
        <p className="text-white mb-8">
          Checkout Our Weekly Updated Trending Collection.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {collections.map((collection) => (
            <div
              key={collection.id}
              className="bg-custom-dark rounded-lg overflow-hidden shadow-lg"
            >
              <Image
                src={collection.image}
                alt={collection.name}
                width={300}
                height={200}
                className="w-full h-full object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold text-white">{collection.name}</h3>
                <p className="text-white">{collection.artist}</p>
                <span className="bg-custom-purple text-white px-2 py-1 rounded mt-2">
                  {collection.count}+
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingCollections;