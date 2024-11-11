import Link from "next/link";
import Image from "next/image";

let response = await fetch("https://dummyjson.com/products");
let data = await response.json();

const Produkter = () => {
  return (
    <section className="col-start-2 col-end-3">
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
            <Image src={product.thumbnail} width={304} height={364.8} alt={product.title} className="border" />
            <Link href={`/detaljer/${product.id}`} className="font-semibold text-[1.125rem]">
              {product.title}
            </Link>
            <p className="font-semibold text-[1.25rem]">{product.price} kr</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Produkter;
