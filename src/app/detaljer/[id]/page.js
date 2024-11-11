import Image from "next/image";
import Link from "next/link";
import { IoIosArrowBack } from "react-icons/io";

import Accordion from "@/components/Accordion";

const Page = async ({ params }) => {
  const id = (await params).id;

  let response = await fetch(`https://dummyjson.com/products/${id}`);

  let product = await response.json();

  return (
    <section className="col-start-2 col-end-3">
      <div className="mb-10 mt-10">
        <Link href="/produkter">Shop all / </Link>
        <Link href="#"> Category / </Link>
        <Link href="#" className="font-bold">
          {" "}
          {product.title}
        </Link>
      </div>

      <article className="grid grid-cols-2 gap-[80px]">
        <div className="flex gap-[16px]">
          <div>
            <Image src={product.thumbnail} width={80} height={100} alt={product.title} className="border" />
            <Image src={product.thumbnail} width={80} height={100} alt={product.title} className="border" />
            <Image src={product.thumbnail} width={80} height={100} alt={product.title} className="border" />
            <Image src={product.thumbnail} width={80} height={100} alt={product.title} className="border" />
          </div>
          <Image src={product.thumbnail} width={520} height={640} alt={product.title} className="border" />
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
          </div>

          <div className="grid gap-[16px]">
            <button className="bg-black text-white p-[12px]">Add To Cart</button>
            <button className="bg-white text-black border p-[12px]">Buy now</button>

            <p className="text-center	text-[0.75rem]">Free shipping over $50</p>
          </div>
          <Accordion />
        </div>
      </article>
    </section>
  );
};

export default Page;
