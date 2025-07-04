import Team from "@/components/Team";
import { bebasNeue } from "@/lib/fonts";

const teams = () => {
  return (
    <div className="container mx-auto px-4 mt-20">
      <div className="flex flex-col gap-8">
        <img src="team.jpg" alt="teams" />
        <h1 className={`text-6xl text-center font-bold ${bebasNeue.className}`}>
          Tim di Balik Setiap Sajian
        </h1>
        <p className="text-justify text-xl">
          Di balik setiap cangkir kopi yang tersaji di Kopi Titik, terdapat tim
          yang bekerja dengan sepenuh hati. Kami percaya bahwa kualitas tidak
          hanya datang dari bahan terbaik dan mesin berstandar tinggi, tetapi
          juga dari orang-orang yang mengolahnya dengan komitmen dan ketulusan.
          Tim kami terdiri dari barista profesional, staf operasional, pelatih
          internal, hingga manajemen yang saling terhubung dalam semangat
          kolaborasi. Kami tidak hanya menyajikan kopi, tetapi juga pengalaman.
          Setiap anggota tim didorong untuk memahami nilai pelayanan personal,
          menjaga standar rasa, serta membangun hubungan yang hangat dengan
          pelanggan. Melalui pelatihan rutin, mentoring, dan budaya kerja yang
          inklusif, kami terus tumbuh dan belajar bersama agar dapat memberikan
          yang terbaik di setiap titik layanan kami. Komitmen kami sederhana:
          menjadikan setiap interaksi di Kopi Titik sebagai momen yang berkesan.
          Karena kami percaya, tim yang solid dan saling mendukung adalah
          fondasi utama dalam menciptakan pengalaman ngopi yang istimewa bagi
          setiap pelanggan.
        </p>
      </div>
      <div className="my-30">
        <Team />
      </div>
    </div>
  );
};

export default teams;
