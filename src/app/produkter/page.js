"use client";
import { useState, useEffect } from "react";
import FilterAccordion from "@/components/FilterAccordion";
import Link from "next/link";
import Image from "next/image";

const Produkter = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [cartItems, setCartItems] = useState([]);
  const [showPaymentModal, setShowPaymentModal] = useState(false);


  useEffect(() => {
    const fetchData = async () => {
      let response = await fetch("https://dummyjson.com/products");
      let data = await response.json();
      setProducts(data.products);

      const uniqueCategories = ["all", ...new Set(data.products.map((product) => product.category))];
      setCategories(uniqueCategories);
      setFilteredProducts(data.products);
    };
    fetchData();
  }, []);


  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setFilteredProducts(
      category === "all" ? products : products.filter((product) => product.category === category)
    );
  };


  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (productId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== productId));
  };

  
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);

  return (
    <section className="relative text-black px-4 md:px-0 flex">
      <div className="flex-grow">
        <article className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl md:text-[3.6rem] font-bold">Products</h1>
          </div>
        </article>


        <article>
          <FilterAccordion categories={categories} onFilterChange={handleCategoryChange} />
        </article>

  
        <article className="grid grid-cols-2 md:grid-cols-4 gap-x-2 md:gap-x-[4rem] gap-y-8 md:gap-y-[4rem]">
          {filteredProducts.map((product) => (
            <div key={product.id} className="flex flex-col">
              <Link href={`/detaljer/${product.id}`}>
                <Image
                  src={product.images[0]}
                  width={304}
                  height={364.8}
                  alt={product.title}
                  className="w-[304px] h-[364.8px] border mb-4 object-cover"
                />
              </Link>
              <Link href={`/detaljer/${product.id}`} className="font-semibold text-sm md:text-[1.125rem] leading-6">
                {product.title}
              </Link>
              <p className="font-semibold text-xs md:text-[1.25rem] mt-2 leading-6">${product.price}</p>
              <button
                onClick={() => addToCart(product)}
                className="bg-black text-white mt-3 py-[12px] px-[24px] border border-transparent hover:bg-white hover:text-black hover:border-black transition-all"
              >
                Add to cart
              </button>
            </div>
          ))}
        </article>
      </div>

      {/* Cart Modal */}
      {cartItems.length > 0 && !showPaymentModal && (
        <div className="absolute top-0 right-0 mt-8 md:mt-0 p-4 bg-gray-100 border border-gray-300 rounded-md w-64">
          <h2 className="text-xl font-bold mb-2 text-center">Cart</h2>
          <ul className="space-y-2">
            {cartItems.map((item, index) => (
              <li key={index} className="flex items-center justify-between">
                <div className="flex items-center">
                  <Image
                    src={item.images[0]}
                    width={40}
                    height={40}
                    alt={item.title}
                    className="w-10 h-10 mr-2 rounded"
                  />
                  <div className="flex flex-col">
                    <span className="text-sm font-semibold">{item.title}</span>
                    <span className="text-sm">{item.price} kr</span>
                    <span className="text-sm">Quantity: {item.quantity}</span>
                  </div>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 hover:text-red-700 font-semibold"
                >
                  X
                </button>
              </li>
            ))}
          </ul>
          <div className="text-center mt-4">
            <p className="font-semibold mb-2">Total: {totalPrice} kr</p>
            <Link
              href={{
                pathname: "/payment",
                query: {
                  items: cartItems.map((item) => item.id).join(","),
                  totalPrice: totalPrice.toString(),
                },
              }}
              className="bg-black text-white py-2 px-4 rounded hover:bg-white hover:text-black hover:border-black border border-transparent transition-all"
            >
              Pay Now
            </Link>
          </div>
        </div>
      )}
    </section>
  );
};

export default Produkter;
