import { Rating } from "@material-tailwind/react";
import { formatCurrency } from "../utils/helpers";
export default function Cards({ user }) {
  return (
    <div className="card card-compact h-[370px] w-[268px] bg-base-100 shadow-xl">
      <figure>
        <img src={user.image} alt="Shoes" className="h-72 w-72" />
      </figure>
      <div className="card-body">
        <div className="flex">
          <Rating value={4} readonly />{" "}
          <span className="mt-1 text-gray-800">{`(${user.stars})`}</span>
        </div>
        <h2 className="card-title text-blue-700">{user.name}</h2>
        <div className="flex flex-1">
          {user.skills.map((skill, index) => (
            <div
              key={index}
              className="badge mr-1 mt-2 whitespace-nowrap rounded-md border-2 border-solid bg-gray-50 text-[10px]"
            >
              {skill}
            </div>
          ))}
        </div>
        <span className="text-xs font-semibold">
          {Array.isArray(user.tipe) ? user.tipe.join(" & ") : user.tipe}
        </span>
        <div className="card-actions justify-start">
          <span className="font-semibold text-gray-600">
            {formatCurrency(user.price)}/Jam
          </span>
        </div>
      </div>
    </div>
  );
}
