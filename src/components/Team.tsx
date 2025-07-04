import { Avatar, AvatarImage } from "./ui/avatar";
import { bebasNeue } from "@/lib/fonts";

const Team = async () => {
  const response = await fetch("https://randomuser.me/api/?results=3");
  const randomUser = await response.json();
  const jobs = ["Tim Pengantar", "Admin & Finance", "Branch Manager"];
  return (
    <section className="container mx-auto px-4 mt-10 text-black">
      <h2 className={`text-5xl font-bold text-center ${bebasNeue.className}`}>Our Team</h2>
      <p className="text-center text-xl px-8 md:px-32 mb-5">
        Tim Kopi Titik adalah individu-individu berdedikasi yang berkomitmen
        memberikan pelayanan dan kualitas terbaik bagi konsumen. Dengan semangat
        kolaborasi dan profesionalisme, kami selalu berupaya menghadirkan
        pengalaman ngopi yang memuaskan di setiap sajian.
      </p>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        {randomUser.results.map((user: any, index: number) => (
          <div key={index}>
            <Avatar className="container mx-auto w-[200px] h-[200px] mt-4 ">
              <AvatarImage src={user.picture.medium} />
            </Avatar>
            <h2 className="text-center mt-3">{user.name.first}</h2>
            <p className="mt-3">{jobs[index]}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
