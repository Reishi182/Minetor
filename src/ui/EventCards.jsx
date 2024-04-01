export default function EventCards({ event }) {
  return (
    <div className="card card-compact h-[370px] w-[268px] bg-base-100 shadow-xl">
      <figure>
        <img src={event.image} alt="Shoes" className="h-72 w-72" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-blue-700">{event.name}</h2>
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

        <div className="card-actions justify-center">
          <button className="w-full rounded-lg bg-blue-700 px-2 py-2 font-semibold text-white">
            Lihat Detail
          </button>
        </div>
      </div>
    </div>
  );
}
