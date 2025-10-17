import { Navigation } from '@/components/navigation';
import { PropertyCard } from '@/components/PropertyCard';

const properties = [
  {
    id: 1,
    image: "img1.jpg",
    name: "Casagrand Hazen",
    price: "₹52 Lakhs",
    location: "Bannerghatta Road, Bangalore",
    developer: "Casagrand",
    configuration: "1 BHK, 2 BHK, 3 BHK, 4 BHK",
    builtUpArea: "600 sq.ft",
  },
  {
    id: 2,
    image: "img2.jpg",
    name: "Brigade Eldorado",
    price: "₹85 Lakhs",
    location: "Whitefield, Bangalore",
    developer: "Brigade",
    configuration: "2 BHK, 3 BHK",
    builtUpArea: "1200 sq.ft",
  },
  {
    id: 3,
    image: "img3.jpg",
    name: "Prestige Willow",
    price: "₹1.2 Cr",
    location: "Electronic City, Bangalore",
    developer: "Prestige",
    configuration: "3 BHK, 4 BHK",
    builtUpArea: "1800 sq.ft",
  },
 
];



export default function PropertiesPage() {
  return (
    <div>
        <div>

    <Navigation/>        
        </div>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 mt-10">
      <h1 className="text-3xl font-light text-gray-900 mb-8">
        Featured Properties
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {properties.map((property) => (
            <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </div>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 mt-10">
      <h1 className="text-3xl font-light text-gray-900 mb-8">
        Trending Properties
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {properties.map((property) => (
            <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </div>
        </div>
  );
}