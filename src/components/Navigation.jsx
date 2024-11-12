import Link from "next/link";
import Image from "next/image";

import bazaarlogo from "../images/bazaarlogo.svg";

import { FiShoppingCart } from "react-icons/fi";

const Navigation = () => {
  return (
    <header className="flex justify-between	 items-center p-[20px] bg-white shadow-md text-[1rem]">
      <div>
        <Link href="/">
          <Image src={bazaarlogo} alt="navy" className="" width={50} />
        </Link>
      </div>
      <nav className=" text-black ">
        <ul className="flex items-center gap-[20px] ">
          <li className="hover:border-b-2 hover:border-black">
            <Link href="/">Home</Link>
          </li>
          <li className="hover:border-b-2 hover:border-black">
            <Link href="/produkter">Produkter</Link>
          </li>
          <li className="hover:border-b-2 hover:border-black">
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
