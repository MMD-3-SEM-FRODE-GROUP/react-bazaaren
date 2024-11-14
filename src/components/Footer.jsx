"use client";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-white text-black p-[20px] mt-[10rem] flex justify-between items-center">
      <div className="mb-6 md:mb-0 md:w-1/2">
        <div className="flex items-center mb-4">
          <img src="/bazaar-logo.png" alt="Logo" className="h-8 mr-3" />
          <span className="text-xl font-semibold">بقخيث BAZAAR</span>
        </div>

        <ul className="flex flex-wrap gap-4">
          <li>
            <Link href={"/about"} className="text-gray-400 hover:font-bold">
              About Us
            </Link>
          </li>
          <li>
            <Link href={"/services"} className="text-gray-400 hover:font-bold">
              Services
            </Link>
          </li>
          <li>
            <Link href={"/contact"} className="text-gray-400 hover:font-bold">
              Contact
            </Link>
          </li>
          <li>
            <Link href={"/privacy"} className="text-gray-400 hover:font-bold">
              Privacy Policy
            </Link>
          </li>
        </ul>
      </div>

      <div id="Footer" className="md:w-1/2 ">
        <h4 className="text-lg font-semibold mb-4">Sign up to our newsletter</h4>
        <form className="flex">
          <input type="email" placeholder="Enter your email" className="w-full px-4 py-2 rounded-l-md border border-gray-300 text-gray-900 focus:outline-none" />
          <button type="submit" className="px-6 py-2 bg-black text-white font-semibold rounded-r-md hover:bg-blue-700 transition-colors duration-200">
            Subscribe
          </button>
        </form>
      </div>
    </footer>
  );
};

export default Footer;
