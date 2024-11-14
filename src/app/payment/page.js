"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Payment() {
  const searchParams = useSearchParams();
  const itemsParam = searchParams.get("items");
  const totalPriceParam = searchParams.get("totalPrice");
  const [products, setProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    if (itemsParam) {
      const ids = itemsParam.split(",").map((id) => parseInt(id));

      const fetchProducts = async () => {
        const productData = await Promise.all(ids.map((id) => fetch(`https://dummyjson.com/products/${id}`).then((res) => res.json())));
        setProducts(productData);
      };

      fetchProducts();
    }

    if (totalPriceParam) {
      setTotalPrice(parseFloat(totalPriceParam));
    }
  }, [itemsParam, totalPriceParam]);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Payment Page</h1>
      <ul className="space-y-4">
        {products.map((product) => (
          <li key={product.id} className="flex items-center space-x-4">
            <img src={product.thumbnail} alt={product.title} width={100} className="rounded border" />
            <div>
              <h2 className="text-lg font-semibold">{product.title}</h2>
              <p className="text-gray-600">Price: {product.price} $</p>
            </div>
          </li>
        ))}
      </ul>
      <div className="mt-6 text-lg font-bold">Total Price: {totalPrice.toFixed(2)} $</div>
    </div>
  );
}
