import Image from 'next/image';

interface ProductDetailsProps {
  product: {
    id: string;
    name: string;
    description: string;
    price: number;
    image: string;
  };
}

const ProductDetails = ({ product }: ProductDetailsProps) => {
  return (
    <div className="bg-white shadow-md rounded-md p-6 max-w-3xl w-full">
      <div className="relative h-64 w-full">
        <Image
          src={product.image}
          alt={product.name}
          layout="fill"
          objectFit="cover"
          className="rounded-md"
        />
      </div>
      <h1 className="text-2xl font-bold mt-4">{product.name}</h1>
      <p className="text-gray-600 mt-2">{product.description}</p>
      <div className="text-lg font-semibold mt-4">${product.price}</div>
    </div>
  );
};

export default ProductDetails;
