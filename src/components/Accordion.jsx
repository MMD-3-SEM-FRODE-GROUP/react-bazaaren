"use client";
import { useState } from "react";

import Item from "./Item";

const Accordion = ({ product }) => {
  const [isOpen, setIsOpen] = useState(0);

  const items = [
    {
      id: 1,
      title: "Dimensions",
      content: `Width: ${product.dimensions.width}, Height: ${product.dimensions.height}, Depth: ${product.dimensions.depth}`,
    },
    {
      id: 2,
      title: "Description",
      content: product.description,
    },
    {
      id: 3,
      title: "Category",
      content: `This product belongs to the category: ${product.category}`,
    },
    {
      id: 4,
      title: "Shipping Information",
      content: product.shippingInformation,
    },
  ];
  return (
    <article className="relative w-full overflow-hidden">
      <section className="">
        {/* <h1 className="text-2xl font-bold text-slate-900 mb-4">About the product</h1> */}

        {items.map(({ id, title, content }) => (
          <Item key={id} isOpen={isOpen} setIsOpen={setIsOpen} item={id} title={title} content={content} />
        ))}
      </section>
    </article>
  );
};

export default Accordion;
