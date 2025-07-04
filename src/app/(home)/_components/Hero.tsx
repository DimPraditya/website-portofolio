import { Button } from "@/components/ui/button";
import { bebasNeue } from "@/lib/fonts";
import BlogList from "./BlogList";
import Link from "next/link";

const Hero = () => {
  return (
    <main className="w-full h-full">
      <img src="home.webp" alt="mainpage" />
      <div className="grid grid-cols-2  pb-20">
        <div className="flex flex-col justify-center items-center">
          <h1
            className={`text-8xl mr-9.5 font-bold ${bebasNeue.className} mb-10`}
          >
            Brewed with care, <br /> Crafted for you.
          </h1>
          <p className={`text-xl mr-20 text-justify`}>
            Kopi Titik adalah brand kopi spesialis dengan konsep Made to Order
            yang menghadirkan kopi berkualitas segar di setiap sajian. Kami
            menggunakan 100% biji kopi asli Indonesia, disiapkan oleh barista
            profesional menggunakan mesin berstandar internasional. Sejak
            berdiri pada tahun 2016, Kopi Titik telah berkembang pesat dan kini
            hadir di lebih dari 1.200 outlet di seluruh Indonesia, menjadikan
            kopi berkualitas semakin mudah dijangkau oleh Point People di mana
            pun berada.
          </p>
          <Link href="/about-us">
            <Button className="font-semibold mt-12 cursor-pointer text-xl w-fit h-fit bg-green-700">
              Lihat Selengkapnya
            </Button>
          </Link>
        </div>
        <div>
          <img src="coffee.webp" alt="brewed" />
        </div>
      </div>
      <div>
        <h2 className={`text-6xl mb-4 font-bold ${bebasNeue.className}`}>
          Products
        </h2>
        <div className="container mx-auto grid grid-cols-2 pb-20">
          <div>
            <img src="glass.webp" alt="brewed" />
          </div>
          <div className="flex flex-col justify-center items-center gap-10 mx-20">
            <p className={`text-xl  text-justify`}>
              Kopi kami dibuat dari 100% biji kopi Indonesia pilihan, seperti
              Arabika, Robusta, dan Liberika. Diseduh langsung saat dipesan,
              setiap cangkir menghadirkan rasa khas yang kaya dan memuaskan.
              Diracik oleh barista terlatih dengan peralatan berkualitas, kopi
              kami siap menemani hari Anda dengan cita rasa terbaik.
            </p>
            <Link href="/products">
              <Button className="font-semibold mt-8 cursor-pointer text-xl w-fit h-fit bg-green-700">
                Cek Produk Kami
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <div className="pb-40 space-y-4">
        <h2 className={`text-6xl font-bold ${bebasNeue.className}`}>
          Articles
        </h2>
        <BlogList />
      </div>
    </main>
  );
};

export default Hero;
