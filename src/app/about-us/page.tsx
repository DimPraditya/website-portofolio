import Team from "@/components/Team";
import { bebasNeue } from "@/lib/fonts";
const aboutUs = () => {
  return (
    <main className="container mx-auto px-4">
      <div className="grid grid-cols-2 pb-20 ">
        <div className="flex flex-col mx-30 my-20 justify-center text-justify items-center">
          <h1 className={`text-8xl font-bold ${bebasNeue.className} mb-10`}>
            SEJARAH KAMI
          </h1>
          <p className={`text-xl font-semibold${bebasNeue.className}`}>
            Berawal dari komitmen untuk menyajikan kopi berkualitas tinggi, Kopi
            Titik mengandalkan kekayaan biji kopi lokal seperti Arabika,
            Robusta, dan Liberika dari berbagai daerah di Indonesia. Dengan
            dukungan barista-barista berpengalaman dan penggunaan mesin
            berteknologi internasional, Kopi Titik tumbuh menjadi jaringan kedai
            kopi yang luas. Kopi Titik terus memperkuat posisinya sebagai
            pilihan utama pecinta kopi Indonesia, menjangkau pelanggan dari kota
            besar hingga pelosok daerah.
          </p>
        </div>
        <div className="ml-30">
          <img src="about1.webp" alt="brewed" />
        </div>
      </div>
      <div className="mb-40">
        <Team/>
      </div>
      <div className="text-justify ml-30 mb-30">
        <h2 className={`text-6xl mb-4 font-semibold ${bebasNeue.className}`}>
          Workplace Environment
        </h2>
        <p className="text-xl">
          Kopi Titik menghadirkan lingkungan kerja yang hangat, inklusif, dan
          saling menghargai. Karyawan didukung dengan pelatihan, mentoring, dan
          jenjang karier yang jelas. Fokus pada pelayanan ramah, penggunaan
          standar internasional tetap dibalut dengan nilai lokal. Keseimbangan
          kerja dan kehidupan pribadi juga dijaga agar karyawan tetap bahagia
          dan produktif.
        </p>
      </div>
    </main>
  );
};

export default aboutUs;
