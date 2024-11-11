import Link from "next/link";
import { IoLogoNpm } from "react-icons/io5";
import { FiShoppingCart } from "react-icons/fi";

const Navigation = () => {
  return (
    <header className="flex justify-between	 items-center p-[20px] bg-slate-300 shadow-md">
      <div>
        <Link href="/">
          <IoLogoNpm size={50} />
        </Link>
      </div>
      <nav className="">
        <ul className="flex items-center gap-[20px]">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/produkter">Produkter</Link>
          </li>
          <li>
            <Link href="/produkter">
              <FiShoppingCart />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
