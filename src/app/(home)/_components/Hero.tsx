"use client";

import { Button } from "@/components/ui/button";
import { bebasNeue } from "@/lib/fonts";
import BlogList from "./BlogList";
import Link from "next/link";
import { InfiniteMovingCardsDemo } from "@/components/Testimonials";
import { FadeInOnScroll } from "@/components/FadeInOnScroll";

const Hero = () => {
  return (
    <main className="w-full h-full">
      {/* Hero Image with Overlay Text */}
      <section className="relative w-full h-screen">
        <img
          src="/home.webp"
          alt="mainpage"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Hero Text Overlay */}
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-center px-4">
          <FadeInOnScroll>
            <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-bold leading-snug">
              Brewed with care, <br /> Crafted for you.
            </h1>
          </FadeInOnScroll>
        </div>
      </section>

      {/* Intro Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6 py-20 items-center ">
        <div className="flex flex-col justify-center items-center text-left space-y-6">
            <p className="text-base md:text-lg text-justify leading-relaxed">
              Kopi Titik adalah brand kopi spesialis dengan konsep Made to Order
              yang menghadirkan kopi berkualitas segar di setiap sajian. Kami
              menggunakan 100% biji kopi asli Indonesia, disiapkan oleh barista
              profesional menggunakan mesin berstandar internasional. Sejak
              berdiri pada tahun 2016, Kopi Titik telah berkembang pesat dan
              kini hadir di lebih dari 1.200 outlet di seluruh Indonesia,
              menjadikan kopi berkualitas semakin mudah dijangkau oleh Point
              People di mana pun berada.
            </p>
            <Link href="/about-us">
              <Button className="bg-green-700 hover:bg-green-600 cursor-pointer text-white font-semibold text-lg px-6 py-2 rounded-md">
                Lihat Selengkapnya
              </Button>
            </Link>
        </div>
        <div className="flex justify-center">
            <img
              src="coffee.webp"
              alt="brewed"
              className="w-full max-w-md h-auto object-cover rounded-lg shadow-lg"
            />
        </div>
      </section>

      {/* Products Section */}
      <section className=" px-6 py-20">
        <h2
          className={`text-4xl md:text-6xl font-bold mb-10 text-center ${bebasNeue.className}`}
        >
          Our Products
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <img
              src="glass.webp"
              alt="product"
              className="w-full h-auto object-cover rounded-lg shadow-md"
            />
          </div>
          <div className="flex flex-col justify-center items-center space-y-6">
            <p className="text-base md:text-lg text-justify leading-relaxed">
              Kopi kami dibuat dari 100% biji kopi Indonesia pilihan, seperti
              Arabika, Robusta, dan Liberika. Diseduh langsung saat dipesan,
              setiap cangkir menghadirkan rasa khas yang kaya dan memuaskan.
              Diracik oleh barista terlatih dengan peralatan berkualitas, kopi
              kami siap menemani hari Anda dengan cita rasa terbaik.
            </p>
            <Link href="/products">
              <Button className="bg-green-700 hover:bg-green-600 text-white cursor-pointer font-semibold text-lg px-6 py-2 rounded-md">
                Cek Produk Kami
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Articles Section */}
      <section className="px-6 py-20 ">
        <h2
          className={`text-4xl md:text-6xl font-bold mb-8 text-center ${bebasNeue.className}`}
        >
          Articles
        </h2>
        <BlogList />
      </section>

      {/* Testimonials Section */}
      <section className="px-6 py-20 ">
        <h2
          className={`text-4xl md:text-6xl font-bold mb-8 text-center ${bebasNeue.className}`}
        >
          What Our Customers Said
        </h2>
        <InfiniteMovingCardsDemo />
      </section>
    </main>
  );
};

export default Hero;
