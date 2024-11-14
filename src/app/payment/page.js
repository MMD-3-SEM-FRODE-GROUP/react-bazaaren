"use client";

import Image from "next/image";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Payment() {
  const searchParams = useSearchParams();
  const itemsParam = searchParams.get("items");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (itemsParam) {
      const ids = itemsParam.split(",").map((id) => parseInt(id));

      const fetchProducts = async () => {
        const productData = await Promise.all(ids.map((id) => fetch(`https://dummyjson.com/products/${id}`).then((res) => res.json())));
        setProducts(productData);
      };

      fetchProducts();
    }
  }, [itemsParam]);

  // Calculate the total price for all products
  const totalPrice = products.reduce((total, product) => total + product.price, 0);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Payment Page</h1>
      <ul className="space-y-4">
        {products.map((product) => (
          <li key={product.id} className="flex items-center space-x-4">
            <Image src={product.thumbnail} alt={product.title} width={100} height={100} className="rounded border" />
            <div>
              <h2 className="text-lg font-semibold">{product.title}</h2>
              <p className="text-gray-600">Price: {product.price} $</p>
            </div>
          </li>
        ))}
      </ul>
      <div className="mt-6 text-lg font-bold">Total Price: {totalPrice} $</div>
    </div>
  );
}
