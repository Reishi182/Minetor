import ReviewCards from "./ReviewCards";
import Avatar from "./Avatar";
import { FaArrowRight } from "react-icons/fa";

export default function SixthSection() {
  return (
    <section className="bg-blue-600 py-16">
      <div className="container mx-auto gap-5 space-y-10 px-16">
        <div className="space-y-1">
          <h1 className="text-left text-2xl font-semibold text-white">
            Ulasan Para Siswa dan Mentor Kami!
          </h1>
          <h4 className="text-left  text-lg text-blue-200">
            Temukan berbagai review dari para mentee dan juga mentor kami
          </h4>
        </div>
        <div className=" flex justify-center">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 ">
            <ReviewCards
              desc={`" Berkat bimbingan Pak Budi, saya berhasil mendapatkan pekerjaan impian di perusahaan desain ternama. Terima kasih Pak! "`}
            >
              <div className="flex gap-2">
                <Avatar image="https://xsgames.co/randomusers/avatar.php?g=female" />
                <div className="mt-2 flex flex-col">
                  <span className=" font-semibold">Ana Sari</span>
                  <span className=" text-[10px]">Mantee di Minetor</span>
                </div>
              </div>
            </ReviewCards>
            <ReviewCards
              desc={`" Menjadi mentor bagaikan menanam benih. Memberikan bimbingan dan melihat mentee berkembang adalah kebahagiaan tersendiri "`}
            >
              <div className="flex gap-2">
                <Avatar image="https://xsgames.co/randomusers/avatar.php?g=male" />
                <div className="mt-2 flex flex-col">
                  <span className=" font-semibold">Budi Santosa</span>
                  <span className=" text-[10px]">Mentor di Minetor</span>
                </div>
              </div>
            </ReviewCards>
          </div>
        </div>
      </div>
      <div className="flex justify-end px-10 py-12">
        <button className="flex gap-2 tracking-wider text-white">
          Gabung bersama Kami{" "}
          <span className="mt-[3px]">
            <FaArrowRight />
          </span>
        </button>
      </div>
    </section>
  );
}
