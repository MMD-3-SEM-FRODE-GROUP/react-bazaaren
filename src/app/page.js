import Link from "next/link";
import Image from "next/image";

export default async function Home() {
  return (
    <div>
      <h1>Lorem Ipsum</h1>
      <button>
        <Link href="/produkter">Se Produkter</Link>
      </button>
    </div>
  );
}
