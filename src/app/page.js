import Link from "next/link";

export default async function Home() {
  return (
    <section className="bg-[url('../images/hero.avif')] col-span-full	bg-cover bg-center bg-no-repeat h-screen flex justify-center items-center">
      <div className="text-center px-10 md:px-1 text-white flex flex-col place-items-center">
        <h1 className="text-[3.6rem] font-bold mb-[50px]">بقخيث BAZAAR</h1>
        <p className="text-center	max-w-[768px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p>
        <div className="flex gap-[20px] mt-[32px]">
          <button className="bg-white text-black py-[12px] px-[24px]">
            <Link href="/produkter">Se Produkter</Link>
          </button>
          <button className="border border-white py-[12px] px-[24px]">
            <Link href="/produkter">Se Produkter</Link>
          </button>
        </div>
      </div>
    </section>
  );
}
