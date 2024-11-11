import Link from "next/link";
import Image from "next/image";

let response = await fetch("https://dummyjson.com/products");
let data = await response.json();

const Produkter = () => {
  return (
    <div>
      {data.products.map((product) => (
        <div key={product.id}>
          <Image src={product.thumbnail} width={250} height={250} alt={product.title} />
          <Link href={`/detaljer/${product.id}`}>{product.title}</Link>
        </div>
      ))}
    </div>
  );
};

export default Produkter;