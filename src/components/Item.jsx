import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

const Item = ({ isOpen, setIsOpen, item, title, content, product }) => {
  return (
    <section className="border-t border-black ">
      <div>
        <button
          onClick={() => {
            // hvis isOpen er lig med item, så skal vi sætte isOpen til 0, ellers skal vi sætte isOpen til item
            isOpen === item ? setIsOpen(0) : setIsOpen(item);
          }}
          className="flex items-center justify-between text-black w-full py-[16px] font-semibold"
        >
          <span className="font-semibold text-[1.1rem]">{title}</span>

          {/* hvis isOpen er lig med item, så skal vi vise FaMinus, ellers skal vi vise FaPlus */}
          <span>{isOpen === item ? <IoIosArrowUp className="text-blue-900 ml-8 self-start" /> : <IoIosArrowDown className="text-black ml-8 self-start" />}</span>
        </button>
      </div>

      {/* Her er der en if statement, som kun viser det indhold, som er i denne if statement, hvis isOpen er true */}
      {isOpen === item && (
        <article className="text-[1rem] mb-[24px]">
          <p className="text-black">{content}</p>
          {/* <p>{`Width: ${product.dimensions.width}, Height: ${product.dimensions.height}, Depth: ${product.dimensions.depth}`}</p> */}
        </article>
      )}
    </section>
  );
};

export default Item;
