import { Input } from "@/components/ui/input";
import { bebasNeue } from "@/lib/fonts";

const Jumbotron = () => {
  return (
    <section className="flex flex-col justify-center items-center h-[30vh] gap-4">
      <h1 className={`text-6xl font-bold ${bebasNeue.className}`}>KOPI TITIK</h1>
      <p className="text-xl">Your Favorite Local Coffee Shop</p>
    </section>
  );
};

export default Jumbotron;
