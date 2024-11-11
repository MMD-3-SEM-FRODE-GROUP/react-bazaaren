import Link from "next/link";
import Image from "next/image";
import AlleProdukter from "@/components/AlleProdukter";

let response = await fetch("https://dummyjson.com/products");
let data = await response.json();

const Produkter = () => {
  return (
    <section>
      <article className="flex justify-between items-center">
        <div>
          <h1 className="text-[3.6rem] font-bold">Produkter</h1>
          <p>lorem ipsum</p>
        </div>
        <button>Se alle</button>
      </article>

      <div className="grid grid-cols-4 gap-x-[2rem] gap-y-[4rem]">
        {data.products.map((product) => (
          <div key={product.id}>
            <Image src={product.thumbnail} width={250} height={250} alt={product.title} />
            <Link href={`/detaljer/${product.id}`}>{product.title}</Link>
            <p>{product.price} kr</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Produkter;
