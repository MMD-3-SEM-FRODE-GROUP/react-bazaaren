import Link from "next/link";
import Footer from "@/components/Footer";

export default async function Home() {
  return (
    <section className="bg-[url('../images/hero.avif')] col-span-full	bg-cover bg-center bg-no-repeat h-screen flex justify-center items-center" alt="hero">
      <div className="text-center px-10 md:px-1 text-white flex flex-col place-items-center">
        <h1 className="text-[3.6rem] font-bold mb-[50px]">بقخيث BAZAAR</h1>
        <p className="text-center	max-w-[768px]">
          Welcome to our bazaar, where you’ll find a unique selection of traditional and luxury products. <br /> We offer the finest local and international goods at competitive prices. Enjoy an unparalleled shopping experience at the heart of Arab culture.
        </p>
        <div className="flex gap-[20px] mt-[32px]">
          <button className="bg-white text-black py-[12px] px-[24px] hover:bg-black hover:text-white transition-all">
            <Link href="/produkter">View products</Link>
          </button>
          <button className="border border-white py-[12px] px-[24px] hover:bg-orange-900 hover:text-white transition-all">
            <Link href="/produkter">Sale</Link>
          </button>
        </div>
      </div>
    </section>
  );
}
