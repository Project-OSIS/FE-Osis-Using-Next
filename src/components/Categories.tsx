// src/app/landingPage/components/Categories.tsx
import Image from 'next/image';

const Categories = () => {
  const categories = [
    {
      id: 1,
      name: "Art",
      icon: "/art-icon.svg",
    },
    {
      id: 2,
      name: "Collectibles",
      icon: "/collectibles-icon.svg",
    },
    // ... other categories
  ];

  return (
    <section className="bg-custom-dark py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-white mb-8">Browse Categories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((category) => (
            <div
              key={category.id}
              className="bg-custom-dark rounded-lg overflow-hidden shadow-lg p-4 flex flex-col items-center"
            >
              <Image
                src={category.icon}
                alt={category.name}
                width={60}
                height={60}
                className="w-12 h-12 mb-2"
              />
              <p className="text-white">{category.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;