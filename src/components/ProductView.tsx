import Link from "next/link";
import React from "react";

interface ProductViewProps {
  productTitle: string;
  productText: string;
  price: string;
  image: string;
}

const createSlug = (title: string) => {
  return title.toLowerCase().replace(/\s+/g, "-");
};

const ProductView: React.FC<ProductViewProps> = ({
  productTitle,
  productText,
  price,
  image,
}) => {
  const slug = createSlug(productTitle);

  return (
    <Link
      className="border-2 px-4 py-6 w-full rounded-xl flex items-center levitate"
      href={`/products/${slug}`}
    >
      <div className="gap-1 flex flex-col w-4/5 h-3/4">
        <h2 className="text-gray-800 text-sm">R{price}</h2>
        <h1 className="font-bold text-xl">{productTitle}</h1>
        <p className="text-gray-600">{productText}</p>
      </div>
      <div className="w-4/5 aspect-square ml-auto flex justify-center items-center">
        <img src={image} alt={productTitle} className="w-full" />
      </div>
    </Link>
  );
};

export default ProductView;
