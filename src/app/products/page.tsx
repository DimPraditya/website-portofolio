import { bebasNeue } from "@/lib/fonts";
import Testimonials from "./_components/page";

const products = () => {
  return (
    <main className="container mx-auto mt-16 text-center">
      <h1 className={`text-6xl mb-16 font-bold ${bebasNeue.className}`}>
        PRODUK KAMI
      </h1>
      <div className="flex justify-between text-left font-semibold items-center">
        <div className="">
          <img
            src="capuccino.webp"
            className="h-[350px] w-[270] rounded-2xl"
            alt="product"
          />
          <p className="mt-4">
            Capuccino <br /> Espresso with steamed milk and thick foam. <br />{" "}
            Rp. 20000
          </p>
        </div>
        <div>
          <img
            src="affogato.webp"
            className="h-[350px] w-[270] rounded-2xl"
            alt="product"
          />
          <p className="mt-4">
            Affogato <br /> Vanilla ice cream topped with hot espresso. <br />{" "}
            Rp. 20000
          </p>
        </div>
        <div>
          <img
            src="coldbrew.webp"
            className="h-[350px] w-[270] rounded-2xl"
            alt="product"
          />
          <p className="mt-4">
            Cold Brew <br /> Coffee steeped cold for a smooth taste.. <br /> Rp.
            20000
          </p>
        </div>
      </div>
      <div className="flex justify-between items-center text-left mt-20 mb-30 font-semibold">
        <div>
          <img
            src="espresso.webp"
            className="h-[350px] w-[270] rounded-2xl"
            alt="product"
          />
          <p className="mt-4">
            Espresso <br /> Strong, concentrated black coffee shot. <br /> Rp.
            20000
          </p>
        </div>
        <div>
          <img
            src="frappe.webp"
            className="h-[350px] w-[270] rounded-2xl"
            alt="product"
          />
          <p className="mt-4">
            Frappe <br /> Blended iced coffee, sweet and frothy. <br /> Rp.
            20000
          </p>
        </div>
        <div>
          <img
            src="matcha.webp"
            className="h-[350px] w-[270] rounded-2xl"
            alt="product"
          />
          <p className="mt-4">
            Matcha Latte <br /> Green tea powder with milk.
            <br /> Rp. 20000
          </p>
        </div>
      </div>
      <Testimonials />
    </main>
  );
};

export default products;
