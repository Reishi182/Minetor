import { FaCalendarCheck } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa6";

export default function EventsCard({ event }) {
  return (
    <div className="card card-compact h-[370px] w-[268px] bg-base-100 shadow-xl">
      <figure>
        <img src={event.image} alt="Shoes" className="h-72 w-72" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-blue-700">{event.name}</h2>
        <div className="flex justify-between text-xs text-gray-500">
          <span className="flex space-x-1">
            <FaCalendarCheck size={15} />
            <span>{event.tanggal}</span>
          </span>
          <span className="flex space-x-1">
            <FaRegClock size={15} />
            <span>{event.jam}</span>
          </span>
        </div>
        <span className="mt-1 text-gray-800">{event.desc}</span>
        <div className="flex flex-1">
          {event.skills.map((skill, index) => (
            <div
              key={index}
              className="badge mr-1 mt-2 whitespace-nowrap rounded-md border-2 border-solid border-gray-300 bg-gray-50 text-[10px]"
            >
              {skill}
            </div>
          ))}
        </div>

        <div className="card-actions mt-3 justify-center">
          <button className="w-full rounded-lg bg-blue-700 px-2 py-2 font-[550] text-white">
            Lihat Detail
          </button>
        </div>
      </div>
    </div>
  );
}
