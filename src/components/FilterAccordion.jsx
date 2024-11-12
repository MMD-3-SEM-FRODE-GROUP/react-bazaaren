"use client";
import { useState } from "react";
import { IoFilter } from "react-icons/io5";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

const FilterAccordion = ({ categories, onFilterChange }) => {
  const [isOpen, setIsOpen] = useState(false); // Styrer, om accordion er åbent
  const [selectedCategory, setSelectedCategory] = useState("all"); // Styrer det aktive filter

  const handleCategoryClick = (category) => {
    setSelectedCategory(category); // Opdater den aktive kategori
    onFilterChange(category); // Filtrer produkterne baseret på kategorien
  };

  return (
    <div>
      {/* Hovedknappen til at åbne/lukke accordion */}
      <button onClick={() => setIsOpen(!isOpen)} className="flex items-center gap-10 text-black w-full py-4 font-semibold">
        <span className="flex items-center gap-2">
          {/* <IoFilter /> */}
          FILTER AND SORT
        </span>
        {isOpen ? <IoIosArrowUp className="text-black" /> : <IoIosArrowDown className="text-black" />}
      </button>

      {/* Filtermuligheder */}
      {isOpen && (
        <div className="flex gap-5">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryClick(category)}
              className={`py-2 capitalize ${
                selectedCategory === category
                  ? "text-black font-bold underline" // Aktiv styling
                  : "text-black"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
export default FilterAccordion;
