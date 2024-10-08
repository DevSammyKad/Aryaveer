import { notFound } from 'next/navigation';
import { Button } from '@/components/ui/button';
import wood from '@/images/wood.jpg';
import dry from '@/images/dry.webp';
import machine from '@/images/machine.jpeg';
import deck from '@/images/deck.jpeg';
import concrete from '@/images/concrete.jpeg';
import sheet from '@/images/sheet.jpeg';

const products = [
  {
    id: 1,
    name: 'Ms Washer',
    category: 'Metal',
    size: '2 mm',
    material: 'M.s Plain',
    description: 'M.s Plain Washer, 2 mm',
    price: 'N/A', // Assuming price is not available in the provided data
    stock: 'N/A', // Assuming stock is not available in the provided data
    image:
      'https://5.imimg.com/data5/SELLER/Default/2024/9/453271665/XV/WD/ZW/144733353/m-s-plain-washer-2-mm-250x250.jpg',
  },
  {
    id: 2,
    name: 'Coil Nails',
    category: 'Nails',
    size: '2 mm',
    material: 'Screw Nail',
    description: 'Screw Nail Coil, Diameter: 2 mm',
    price: 'N/A',
    stock: 'N/A',
    image:
      'https://5.imimg.com/data5/SELLER/Default/2024/9/453269351/NW/ZU/ZF/144733353/fastener-types-250x250.png',
  },
  {
    id: 3,
    name: 'Mild Steel Hex Bolt',
    category: 'Metal',
    size: 'N/A', // No size available in the provided data
    material: 'Mild Steel',
    description: 'Mild Steel Hex Bolt',
    price: 'N/A',
    stock: 'N/A',
    image:
      'https://5.imimg.com/data5/SELLER/Default/2024/9/453273161/ZT/XQ/TR/144733353/mild-steel-hex-bolt-250x250.jpg',
  },
  {
    id: 4,
    name: 'Mild Steel Hex Nut',
    category: 'Metal',
    size: 'N/A',
    material: 'Mild Steel',
    description: 'Mild Steel Hex Nuts',
    price: 'N/A',
    stock: 'N/A',
    image:
      'https://5.imimg.com/data5/SELLER/Default/2024/9/453272777/RZ/LK/EI/144733353/mild-steel-hex-nuts-250x250.jpg',
  },
  {
    id: 5,
    name: 'Other Products',
    category: 'Wire Nails',
    size: '3 Inch',
    material: 'Wire',
    description: '3 Inch Wire Nail',
    price: 'N/A',
    stock: 'N/A',
    image:
      'https://5.imimg.com/data5/ANDROID/Default/2021/12/HF/JE/QG/144733353/prod-20211231-1412022239895940373745466-jpg-250x250.jpg',
  },
  {
    id: 6,
    name: 'Wood Screws',
    category: 'Wood',
    size: '1 inch',
    material: 'Stainless Steel',
    description: 'Ideal for general woodworking projects.',
    price: 9.99,
    stock: 1000,
    image: wood,
  },
  {
    id: 7,
    name: 'Drywall Screws',
    category: 'Drywall',
    size: '1.25 inch',
    material: 'Black Phosphate',
    description: 'Perfect for securing drywall to wood studs.',
    price: 7.99,
    stock: 1500,
    image: dry,
  },
  {
    id: 8,
    name: 'Machine Screws',
    category: 'Metal',
    size: '0.5 inch',
    material: 'Brass',
    description: 'Suitable for various metal fastening applications.',
    price: 12.99,
    stock: 800,
    image: machine,
  },
  {
    id: 9,
    name: 'Deck Screws',
    category: 'Outdoor',
    size: '2.5 inch',
    material: 'Coated Steel',
    description: 'Designed for outdoor deck construction and repair.',
    price: 14.99,
    stock: 1200,
    image: deck,
  },
  {
    id: 10,
    name: 'Sheet Metal Screws',
    category: 'Metal',
    size: '0.75 inch',
    material: 'Zinc Plated',
    description: 'Ideal for fastening sheet metal and other thin materials.',
    price: 8.99,
    stock: 2000,
    image: sheet,
  },
  {
    id: 11,
    name: 'Concrete Screws',
    category: 'Masonry',
    size: '3 inch',
    material: 'Hardened Steel',
    description: 'Specially designed for securing materials to concrete.',
    price: 16.99,
    stock: 600,
    image: concrete,
  },
];

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = products.find((p) => p.id === parseInt(params.id));

  if (!product) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <img
            src={
              typeof product.image === 'string'
                ? product.image
                : 'https://via.placeholder.com/400x400.png?text=Product+Image'
            }
            alt={product.name}
            className="w-full rounded-lg shadow-md"
          />
        </div>
        <div>
          <p className="text-xl mb-2">
            <strong>Category:</strong> {product.category}
          </p>
          <p className="text-xl mb-2">
            <strong>Size:</strong> {product.size}
          </p>
          <p className="text-xl mb-2">
            <strong>Material:</strong> {product.material}
          </p>
          <p className="text-xl mb-4">
            <strong>Price:</strong> $
            {typeof product.price === 'number'
              ? product.price.toFixed(2)
              : product.price}{' '}
            per 100 units
          </p>
          <p className="text-lg mb-4">{product.description}</p>
          <p className="text-lg mb-6">
            <strong>In Stock:</strong> {product.stock} units
          </p>
          <Button size="lg">Add to Cart</Button>
        </div>
      </div>
    </div>
  );
}
