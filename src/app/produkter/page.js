"use client";
import { useState, useEffect } from "react";
import FilterAccordion from "@/components/FilterAccordion";
import Link from "next/link";
import Image from "next/image";

const Produkter = () => {
  const [data, setData] = useState({ products: [] });
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [cartItems, setCartItems] = useState([]);
  const [showPaymentModal, setShowPaymentModal] = useState(false);

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
    setFilteredProducts(category === "all" ? data.products : data.products.filter((product) => product.category === category));
  };

  const addToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
  };

  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  const categories = ["all", "fragrances", "beauty", "furniture", "groceries"];

  const openPaymentModal = () => {
    setShowPaymentModal(true);
  };

  const closePaymentModal = () => setShowPaymentModal(false);

  return (
    <section className="relative text-black px-4 md:px-0 flex">
      <div className="flex-grow">
        <article className="flex flex-col md:flex-row justify-between mb-8">
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
                <Image src={product.images[0]} width={304} height={364.8} alt={product.title} className="w-[304px] h-[364.8px] border mb-4 object-cover leading-6" />
              </Link>

              <Link href={`/detaljer/${product.id}`} className="font-bold text-sm md:text-[1.125rem] leading-6">
                {product.title}
              </Link>
              <p className="font-bold text-xs md:text-[1.25rem] mt-2">{product.price} $</p>
              <button onClick={() => addToCart(product)} className="bg-black text-white mt-3 py-[12px] px-[24px] border border-transparent hover:bg-white hover:text-black hover:border-black transition-all">
                Add to cart
              </button>
            </div>
          ))}
        </article>
      </div>

      {cartItems.length > 0 && !showPaymentModal && (
        <div className="absolute top-0 right-0 p-4 bg-gray-100 border border-gray-300 w-64 transition-all duration-300">
          <h2 className="text-xl font-bold mb-2 text-center">Cart</h2>
          <div>
            <ul className="mb-4 space-y-2">
              {cartItems.map((item, index) => (
                <li key={index} className="flex items-center">
                  <Image src={item.images[0]} width={40} height={40} alt={item.title} className="w-10 h-10 mr-2 rounded" />
                  <div className="flex flex-col">
                    <span className="text-sm font-semibold">{item.title}</span>
                    <span className="text-sm">{item.price} $</span>
                  </div>
                </li>
              ))}
            </ul>
            <div className="text-center">
              <p className="font-semibold mb-2">Total: {totalPrice} $</p>
              {/* HER HAR JEG TILFØJET NOGET */}
              <Link href={`/payment?items=${encodeURIComponent(cartItems.map((item) => item.id).join(","))}&totalPrice=${totalPrice}`} className="bg-black text-white py-2 px-4 rounded hover:bg-white hover:text-black hover:border-black border border-transparent transition-all">
                Pay Now
              </Link>
              {/* <button onClick={openPaymentModal} className="bg-black text-white py-2 px-4 rounded hover:bg-white hover:text-black hover:border-black border border-transparent transition-all">
                Pay Now
              </button> */}
            </div>
          </div>
        </div>
      )}

      {/* {showPaymentModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg w-11/12 sm:w-96">
            <h2 className="text-xl font-bold mb-4 text-center">Payment Details</h2>
            <ul className="mb-4 space-y-2">
              {cartItems.map((item, index) => (
                <li key={index} className="flex items-center">
                  <Image src={item.images[0]} width={40} height={40} alt={item.title} className="w-10 h-10 mr-2 rounded" />
                  <div className="flex flex-col">
                    <span className="text-sm font-semibold">{item.title}</span>
                    <span className="text-sm">{item.price} kr</span>
                  </div>
                </li>
              ))}
            </ul>
            <div className="text-center">
              <p className="font-semibold mb-2">Total: {totalPrice} kr</p>

              <div className="flex flex-col space-y-2 mb-4">
                <button onClick={() => alert("Login clicked")} className="bg-black text-white py-2 px-4 rounded hover:bg-white hover:text-black hover:border-black border border-transparent transition-all">
                  Login
                </button>
                <button onClick={() => alert("Continue as Guest clicked")} className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-white hover:text-gray-500 hover:border-gray-500 border border-transparent transition-all">
                  Continue as Guest
                </button>
              </div>

              <button onClick={closePaymentModal} className="bg-orange-950 text-white py-1 px-3 rounded hover:bg-white hover:text-gray-500 hover:border-gray-500 border border-transparent transition-all">
                Close
              </button>
            </div>
          </div>
        </div>
      )} */}
    </section>
  );
};

export default Produkter;
