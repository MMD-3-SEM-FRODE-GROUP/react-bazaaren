"use client";
import { useState, useEffect } from "react";

import FilterAccordion from "@/components/FilterAccordion";

import Link from "next/link";
import Image from "next/image";

// let response = await fetch("https://dummyjson.com/products");
// let data = await response.json();

const Produkter = () => {
  const [data, setData] = useState({ products: [] });
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Hent data fra API'en
  useEffect(() => {
    const fetchData = async () => {
      let response = await fetch("https://dummyjson.com/products");
      let data = await response.json();
      setData(data);
      setFilteredProducts(data.products); // Sæt alle produkter som standard
    };
    fetchData();
  }, []);

  // Håndter ændring i valgt kategori
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    if (category === "all") {
      setFilteredProducts(data.products); // Hvis "all" vælges, vis alle produkter
    } else {
      const filtered = data.products.filter((product) => product.category === category);
      setFilteredProducts(filtered);
    }
  };

  const categories = ["all", "fragrances", "beauty", "furniture", "groceries"];

  return (
    <section className="text-black px-4 md:px-0">
      <article className="flex flex-col md:flex-row justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl md:text-[3.6rem] font-bold">Products</h1>
          {/* <p className="text-sm md:text-base ml-1">lorem ipsum</p> */}
        </div>
      </article>

      {/* FilterAccordion */}
      <article>
        <FilterAccordion categories={categories} onFilterChange={handleCategoryChange} />
      </article>

      {/* Produktliste */}
      <article className="mx-auto grid grid-cols-2 md:grid-cols-4 gap-x-4 md:gap-x-[4rem] gap-y-8 md:gap-y-[4rem]">
        {filteredProducts.map((product) => (
          <div key={product.id} className="flex flex-col items-center">
            <Image src={product.images[0]} width={304} height={364.8} alt={product.title} className="w-[304px] h-[364.8px] border mb-4" />
            <Link href={`/detaljer/${product.id}`} className="font-semibold text-sm md:text-[1.125rem] text-center">
              {product.title}
            </Link>
            <p className="font-light text-xs md:text-[1.25rem] mt-2">{product.price} kr</p>
          </div>
        ))}
      </article>
    </section>
  );
};

export default Produkter;
