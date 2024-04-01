import { accordion } from "../data/data";
import Accordion from "./Accordion";
import Avatar from "./Avatar";

const SeventhSection = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto space-y-5 px-4">
        <h1 className="text-center text-3xl font-bold">
          Frequently Asked Questions
        </h1>
        <h3 className="text-center text-gray-700">
          Berbagai Pertanyaan yang sering di ajukan
        </h3>

        <div className=" flex justify-center">
          <div>
            {accordion.map((acc) => (
              <Accordion question={acc.question} data={acc.data} />
            ))}
          </div>
        </div>
        <div className="mt-3 flex flex-col items-center">
          <div className="flex justify-center">
            <div className="avatar-group -space-x-6 rtl:space-x-reverse">
              <div className="avatar -rotate-12">
                <div className="w-12">
                  <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
              </div>
              <div className="avatar z-10">
                <div className="w-12">
                  <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
              </div>
              <div className="avatar rotate-12">
                <div className="w-12">
                  <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
              </div>
            </div>
          </div>
          <div className="mt-5 flex flex-col text-center ">
            <span className="text-lg font-semibold">
              Masih memiliki berbagai pertanyaan?
            </span>
            <span className="text-base text-gray-700 ">
              Hubungi tim kami untuk mendapatkan jawaban atas berbagai
              pertanyaanmu!
            </span>
          </div>
          <div className="mt-8 flex justify-center">
            <button className="w-52 rounded-lg bg-blue-700 px-2 py-2 text-white">
              Hubungi
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SeventhSection;
