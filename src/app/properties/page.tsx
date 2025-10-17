import { PropertyCard } from '@/components/PropertyCard';

const properties = [
  {
    id: 1,
    image: "/images/property1.jpg",
    name: "Casagrand Hazen",
    price: "₹52 Lakhs",
    location: "Bannerghatta Road, Bangalore",
    developer: "Casagrand",
    configuration: "1 BHK, 2 BHK, 3 BHK, 4 BHK",
    builtUpArea: "600 sq.ft",
  },
  // Add more properties as needed
];

export default function PropertiesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-light text-gray-900 mb-8">
        Featured Properties
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {properties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </div>
  );
}