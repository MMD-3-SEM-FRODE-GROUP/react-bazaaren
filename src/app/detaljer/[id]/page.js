import Image from "next/image";
import Link from "next/link";

import { IoIosArrowForward } from "react-icons/io";

import Accordion from "@/components/Accordion";

const Page = async ({ params }) => {
  const id = (await params).id;

  let response = await fetch(`https://dummyjson.com/products/${id}`);

  let product = await response.json();

  return (
    <section className="lg:p-[64px] sm:p-[20px] text-black">
      <div className="flex items-center gap-[8px] mb-[24px] text-[0.875rem]">
        <Link href="/produkter">Shop all</Link>
        <IoIosArrowForward />
        <Link href="#">{product.category}</Link>
        <IoIosArrowForward />
        <p className="font-bold">{product.title}</p>
      </div>

      <article className="grid lg:grid-cols-2 md:grid-cols-1 lg:gap-[80px] md:gap-[32px] items-start ">
        <div className="flex gap-[16px]">
          <div className="flex flex-col gap-[16px] max-md:hidden">
            <Image src={product.thumbnail} width={80} height={100} alt={product.title} className="border w-[80px] h-[100px]" />
            <Image src={product.thumbnail} width={80} height={100} alt={product.title} className="border w-[80px] h-[100px]" />
            <Image src={product.thumbnail} width={80} height={100} alt={product.title} className="border w-[80px] h-[100px]" />
            <Image src={product.thumbnail} width={80} height={100} alt={product.title} className="border w-[80px] h-[100px]" />
          </div>
          <Image src={product.images[0]} width={520} height={640} alt={product.title} className="border w-[520px] h-[640px]" />
        </div>
        <div className="flex flex-col gap-[24px]">
          <div>
            <h1 className="text-[2.5rem] font-bold">{product.title}</h1>
            <p className="text-[1.5rem] font-bold">{product.price} kr</p>
          </div>

          <div>
            <p className="text-[1rem]"> {product.description}</p>
          </div>

          <div>
            <p>Quantity</p>
            <input type="number" defaultValue="1" className="border border-black w-[64px] p-[12px] text-black" />
          </div>

          <div className="grid gap-[16px] mt-[8px] mb-[8px]">
            <button className="bg-black text-white p-[12px]">Add To Cart</button>
            <button className="bg-white text-black border border-black p-[12px]">Buy now</button>

            <p className="text-center	text-[0.75rem]">Free shipping over $50</p>
          </div>
          <Accordion product={product} />
        </div>
      </article>
    </section>
  );
};

export default Page;
