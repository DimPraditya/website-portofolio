import { Loader } from "lucide-react";

const Loading = () => {
  return (
    <section className="min-h-[50vh] flex justify-center items-center">
      <Loader className="w-10 h-10 text-green-700 animate-spin" />
    </section>
  );
};

export default Loading;
