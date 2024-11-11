import Link from "next/link";
import Image from "next/image";

let response = await fetch("https://dummyjson.com/products");
let data = await response.json();

const Produkter = () => {
  return (
    <section>
      <div className="grid grid-cols-3 gap-10">
        {data.products.map((product) => (
          <div key={product.id}>
            <Image src={product.thumbnail} width={250} height={250} alt={product.title} />
            <Link href={`/detaljer/${product.id}`}>{product.title}</Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Produkter;
