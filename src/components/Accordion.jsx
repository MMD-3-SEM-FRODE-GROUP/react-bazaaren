"use client";
import { useState } from "react";

import Item from "./Item";

const Accordion = () => {
  const [isOpen, setIsOpen] = useState(0);

  return (
    <article className="relative overflow-hidden">
      <section className="max-w-xl ">
        {/* Vi siger, at hvis isOpen er true, så skal vi vise Item komponenten, og så skal vi give den 3 props, som er isOpen, setIsOpen og item. */}
        {/* vi giver item en number, så vi kan se hvilken item vi er på */}
        <Item isOpen={isOpen} setIsOpen={setIsOpen} item={1} />
      </section>
    </article>
  );
};

export default Accordion;
