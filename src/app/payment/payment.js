"use client";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Payment() {
  const searchParams = useSearchParams();
  const itemsParam = searchParams.get("items"); 
  const totalPriceParam = searchParams.get("totalPrice"); 
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    if (itemsParam) {
      
      const ids = itemsParam.split(",").map((id) => parseInt(id));


      const fetchProducts = async () => {
        const productData = await Promise.all(ids.map((id) => 
          fetch(`https://dummyjson.com/products/${id}`).then((res) => res.json())
        ));
        setProducts(productData);
      };

      fetchProducts();
    }


    if (totalPriceParam) {
      setTotalPrice(parseFloat(totalPriceParam));
    }
  }, [itemsParam, totalPriceParam]);  

  return (
    <div>
      <h1>Payment Page</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <img src={product.thumbnail} alt={product.title} width={100} />
            <h2>{product.title}</h2>
            <p>Price: {product.price} kr.</p>
          </li>
        ))}
      </ul>
      <div className="mt-6 font-bold text-lg">
        Total Price: {totalPrice.toFixed(2)} kr.
      </div>
    </div>
  );
}
