import { bebasNeue } from "@/lib/fonts";
import Testimonials from "./_components/page";

const products = () => {
  const items = [
    {
      img: "capuccino.webp",
      title: "Capuccino",
      desc: "Espresso with steamed milk and thick foam.",
    },
    {
      img: "affogato.webp",
      title: "Affogato",
      desc: "Vanilla ice cream topped with hot espresso.",
    },
    {
      img: "coldbrew.webp",
      title: "Cold Brew",
      desc: "Coffee steeped cold for a smooth taste.",
    },
    {
      img: "espresso.webp",
      title: "Espresso",
      desc: "Strong, concentrated black coffee shot.",
    },
    {
      img: "frappe.webp",
      title: "Frappe",
      desc: "Blended iced coffee, sweet and frothy.",
    },
    {
      img: "matcha.webp",
      title: "Matcha Latte",
      desc: "Green tea powder with milk.",
    },
  ];

  return (
    <main className="container mx-auto mt-28 px-4 text-center">
      <h1
        className={`text-4xl md:text-6xl mb-12 font-bold ${bebasNeue.className}`}
      >
        PRODUK KAMI
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 text-left font-semibold place-items-center">
        {items.map((item, index) => (
          <div key={index} className="w-full max-w-[270px]">
            <img
              src={item.img}
              alt={item.title}
              className="h-[350px] w-full rounded-2xl object-cover"
            />
            <div className="mt-4 space-y-1">
              <h3 className="text-xl font-bold text-green-800">{item.title}</h3>
              <p className="text-base text-gray-700">{item.desc}</p>
              <p className="text-green-700 font-semibold mt-1">Rp. 20.000</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-20 mb-32">
        <Testimonials />
      </div>
    </main>
  );
};

export default products;
