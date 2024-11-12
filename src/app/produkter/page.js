import Link from "next/link";
import Image from "next/image";

let response = await fetch("https://dummyjson.com/products");
let data = await response.json();

const Produkter = () => {
  return (
    <section className="text-black px-4 md:px-0">

      <article className="flex flex-col md:flex-row justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl md:text-[3.6rem] font-bold">Produkter</h1>
          <p className="text-sm md:text-base">lorem ipsum</p>
        </div>
        <button className="mt-4 md:mt-0 text-sm md:text-base px-4 py-2 bg-blue-500 text-white rounded">
          Se alle
        </button>
      </article>


      <div className="max-w-screen-xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-x-4 md:gap-x-[2rem] gap-y-8 md:gap-y-[4rem]">
        {data.products.map((product) => (
          <div key={product.id} className="flex flex-col items-center">
            <Image
              src={product.thumbnail}
              width={304}
              height={364.8}
              alt={product.title}
              className="border mb-4"
            />
            <Link
              href={`/detaljer/${product.id}`}
              className="font-semibold text-sm md:text-[1.125rem] text-center"
            >
              {product.title}
            </Link>
            <p className="font-light text-xs md:text-[1.25rem] mt-2">{product.price} kr</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Produkter;
