"use client";
import { useState, useEffect } from "react";
import FilterAccordion from "@/components/FilterAccordion";
import Link from "next/link";
import Image from "next/image";

const Produkter = () => {
  const [data, setData] = useState({ products: [] });
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [cartItems, setCartItems] = useState([]); // Cart items state
  const [cartExpanded, setCartExpanded] = useState(false); // Cart visibility state

  useEffect(() => {
    const fetchData = async () => {
      let response = await fetch("https://dummyjson.com/products");
      let data = await response.json();
      setData(data);
      setFilteredProducts(data.products);
    };
    fetchData();
  }, []);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setFilteredProducts(
      category === "all" ? data.products : data.products.filter((product) => product.category === category)
    );
  };

  const addToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
    setCartExpanded(true);
  };

  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  const categories = ["all", "fragrances", "beauty", "furniture", "groceries"];

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
            <div key={product.id} className="flex flex-col items-center">
              <Image
                src={product.images[0]}
                width={304}
                height={364.8}
                alt={product.title}
                className="w-[304px] h-[364.8px] border mb-4"
              />
              <Link href={`/detaljer/${product.id}`} className="font-semibold text-sm md:text-[1.125rem] text-center">
                {product.title}
              </Link>
              <p className="font-light text-xs md:text-[1.25rem] mt-2">{product.price} kr</p>
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


      <div
        className={`absolute top-0 right-0 p-4 transition-all duration-300 ${
          cartExpanded ? "w-64 bg-gray-100 border border-gray-300" : "w-12"
        }`}
      >
        <h2 className="text-xl font-bold mb-2 text-center">Cart</h2>
        
        {cartItems.length === 0 ? (
          <p className="text-sm text-center">🛒</p>
        ) : (
          <div>
            <ul className="mb-4 space-y-2">
              {cartItems.map((item, index) => (
                <li key={index} className="flex items-center">
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
                  </div>
                </li>
              ))}
            </ul>
            <div className="text-center">
              <p className="font-semibold mb-2">Total: {totalPrice} kr</p>
              <button className="bg-black text-white py-2 px-4 rounded hover:bg-white hover:text-black hover:border-black border border-transparent transition-all">
                Pay Now
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Produkter;
