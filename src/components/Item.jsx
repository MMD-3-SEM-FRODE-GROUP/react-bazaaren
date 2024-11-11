import { FaPlus, FaMinus } from "react-icons/fa";

const Item = ({ isOpen, setIsOpen, item }) => {
  return (
    <div className="border-b border-slate-200 ">
      <header>
        <button
          onClick={() => {
            // hvis isOpen er lig med item, så skal vi sætte isOpen til 0, ellers skal vi sætte isOpen til item
            isOpen === item ? setIsOpen(0) : setIsOpen(item);
          }}
          className="flex items-center justify-between text-black w-full py-2 font-semibold"
        >
          <span className="">Details</span>

          {/* hvis isOpen er lig med item, så skal vi vise FaMinus, ellers skal vi vise FaPlus */}
          <span>{isOpen === item ? <FaMinus className="text-blue-900 ml-8 self-start" /> : <FaPlus className="text-black ml-8 self-start" />}</span>
        </button>
      </header>

      {/* Her er der en if statement, som kun viser det indhold, som er i denne if statement, hvis isOpen er true */}
      {isOpen === item && (
        <section className="text-sm text-slate-600 bg-slate-100 p-4">
          <p className="text-black">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam saepe expedita tempore dicta aspernatur culpa eveniet animi cumque labore impedit aperiam, iusto consectetur voluptatibus odio quam? Mollitia veritatis ut deleniti.</p>
        </section>
      )}
    </div>
  );
};

export default Item;
