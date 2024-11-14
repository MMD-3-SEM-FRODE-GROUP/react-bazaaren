import Link from "next/link";
import Image from "next/image";

import bazaarlogo from "../images/bazaarlogo.svg";

import { FiShoppingCart } from "react-icons/fi";

const Navigation = () => {
  return (
    <header className="flex justify-between	 items-center p-[20px] bg-white shadow-md text-[1rem]">
      <div>
        <Link href="/">
          <Image src={bazaarlogo} width={50} alt="logo" />
        </Link>
      </div>
      <nav className=" text-black ">
        <ul className="flex items-center gap-[20px] ">
          <li className="hover:underline hover:font-bold">
            <Link href="/">Home</Link>
          </li>
          <li className="hover:underline hover:font-bold">
            <Link href="/produkter">Products</Link>
          </li>
          <li className="hover:underline hover:font-bold">
            <Link href="/pay">
              <FiShoppingCart />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
