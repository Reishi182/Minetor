import { Rating } from "@material-tailwind/react";

export default function ReviewCards({ children, desc }) {
  return (
    <div className="card card-compact h-[220px] w-[350px] bg-base-100 px-4 shadow-xl">
      <div className="card-body space-y-3">
        <Rating value={5} readonly />
        <span className="mt-1 font-semibold text-gray-800">{desc}</span>

        <div className="card-actions justify-start">{children}</div>
      </div>
    </div>
  );
}
