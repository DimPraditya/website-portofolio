import Team from "@/components/Team";
import { bebasNeue } from "@/lib/fonts";

const AboutUs = () => {
  return (
    <main className="container mx-auto px-4">
      {/* Sejarah Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-12 md:py-20">
        <div className="flex flex-col justify-center items-start text-justify space-y-6">
          <h1
            className={`text-4xl md:text-6xl lg:text-8xl font-bold ${bebasNeue.className}`}
          >
            SEJARAH KAMI
          </h1>
          <p
            className={`text-base md:text-xl font-semibold ${bebasNeue.className}`}
          >
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
        <div className="flex justify-center items-center">
          <img
            src="about1.webp"
            alt="brewed"
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>
      </div>

      {/* Team Section */}
      <div className="mb-20 md:mb-40 px-4">
        <Team />
      </div>

      {/* Workplace Environment Section */}
      <div className="px-4 md:px-12 mb-20 md:mb-32">
        <div className="max-w-4xl mx-auto text-center">
          <h2
            className={`text-4xl md:text-6xl font-semibold mb-4 ${bebasNeue.className}`}
          >
            Workplace Environment
          </h2>
          <div className="w-20 h-1 bg-green-800 mx-auto mb-6 rounded-full" />
        </div>

        <p className="text-base md:text-lg text-justify leading-relaxed text-gray-800 max-w-4xl mx-auto">
          Kopi Titik menciptakan lingkungan kerja yang profesional, inklusif,
          dan mendukung pertumbuhan individu. Setiap anggota tim diberikan akses
          terhadap pelatihan berkala, sistem mentoring yang terstruktur, serta
          jenjang karier yang jelas dan transparan. Dengan menggabungkan standar
          operasional bertaraf internasional dan nilai-nilai lokal, kami
          membangun budaya kerja yang produktif dan harmonis. Keseimbangan
          antara kehidupan kerja dan pribadi menjadi prioritas utama, karena
          kami percaya bahwa karyawan yang bahagia akan memberikan pelayanan
          terbaik kepada pelanggan.
        </p>
      </div>
    </main>
  );
};

export default AboutUs;
