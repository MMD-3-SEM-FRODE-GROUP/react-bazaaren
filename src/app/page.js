import Link from "next/link";
import Image from "next/image";

export default async function Home() {
  return (
    <section className="bg-black bg-cover bg-center width-[100vw]">
      <div className="text-center p-[200px] text-white flex flex-col place-items-center">
        <h1 className="text-[3.6rem] font-bold">بقخيث BAZAAR</h1>
        <p className="text-center	max-w-[768px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p>
        <div className="flex gap-[20px] mt-3">
          <button>
            <Link href="/produkter">Se Produkter</Link>
          </button>
          <button>
            <Link href="/produkter">Se Produkter</Link>
          </button>
        </div>
      </div>
    </section>
  );
}
