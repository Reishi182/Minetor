import { events1 } from "../data/data";
import Buttons from "./Buttons";
import EventsCard from "./EventsCard";
const EventSection1 = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto space-y-10 px-4">
        <h1 className="text-center text-3xl font-bold text-blue-700">
          Temukan Event Sesuai Kebutuhanmu!{" "}
        </h1>
        <div className="  flex justify-center space-x-3">
          <Buttons classes="bg-blue-800 text-white"> Semua</Buttons>
          <Buttons>Terbaru</Buttons>
          <Buttons>Softskill</Buttons>
          <Buttons>Hardskill</Buttons>
        </div>
        <div className=" flex justify-center">
          <div className="grid grid-cols-1  gap-8 md:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }, () => [...events1])
              .flat()
              .map((event) => (
                <EventsCard event={event} />
              ))}
          </div>
        </div>
        <div className="flex justify-center">
          <button className="w-36 rounded-lg border-[1px] border-light-blue-400 px-2 py-1.5 text-sm font-semibold text-blue-800 active:bg-blue-600 active:text-white lg:text-base">
            Lebih Banyak
          </button>
        </div>
      </div>
    </section>
  );
};

export default EventSection1;
