import Badge from "./Badge";
import { FaLaptop } from "react-icons/fa";
import { IoPlayCircleOutline } from "react-icons/io5";
import { LuChevronsLeftRight } from "react-icons/lu";

// Import gambar yang ingin ditampilkan di sebelah kanan

export default function FifthSection() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto mt-[-100px] flex items-center justify-between px-0 lg:px-20">
        <div className="space-y-2">
          <h1 className="mb-3 text-left text-lg font-bold text-black lg:text-2xl">
            Berbagai Keahlian Mentor Kami!
          </h1>
          <div className="flex flex-1 gap-2">
            <Badge>
              <FaLaptop /> Web Programming
            </Badge>
            <Badge>
              <IoPlayCircleOutline />
              Video Editing
            </Badge>
            <Badge>
              <LuChevronsLeftRight />
              Basic Programming
            </Badge>
          </div>
          <div className="flex flex-1 gap-2">
            <Badge>
              <FaLaptop /> Public Speaking
            </Badge>
            <Badge>
              <IoPlayCircleOutline />
              Project Management{" "}
            </Badge>
            <Badge>
              <LuChevronsLeftRight />
              Data Analyst{" "}
            </Badge>
          </div>
          <div className="mb-6 flex">
            <button className="mt-10 w-44 rounded-lg bg-blue-700 px-2 py-2 font-[400px] tracking-wide text-white">
              Mulai Belajar
            </button>
          </div>
        </div>
        <img src="9.png" alt="Deskripsi Gambar" className="w-[30%]" />
      </div>
    </section>
  );
}
