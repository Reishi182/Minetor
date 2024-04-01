import { RiArrowRightSLine } from "react-icons/ri";

export default function ButtonText({ firstText, secText }) {
  return (
    <button className="border-white-50 relative inline-flex w-64 items-center justify-between rounded-full border-2 border-solid bg-white  lg:w-96 lg:px-2 lg:py-2">
      <div className="flex flex-row items-center">
        <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-full   bg-blue-400 px-1 py-2 lg:top-0 lg:h-16 lg:w-16 lg:px-5 lg:py-5">
          <img src="search.png" className="h-4 invert lg:h-6" />
        </div>
        <div className="ml-16 text-left">
          <span className="text-sm font-semibold lg:text-base">
            {firstText}
          </span>
          <br />
          <span className=" text-xs font-normal text-gray-500  lg:text-sm">
            {secText}
          </span>
        </div>
      </div>
      <div className="absolute right-3 flex h-5 w-5 items-center justify-center rounded-full  bg-blue-600 text-center lg:h-6 lg:w-6">
        <RiArrowRightSLine className="text-xl font-thin text-white lg:text-2xl" />
      </div>
    </button>
  );
}
