import { FaArrowLeft } from "react-icons/fa";
import Ratings from "../ui/Rating";
import { useNavigate } from "react-router-dom";

export default function Layout({ data = {}, children, size }) {
  const navigate = useNavigate();
  return (
    <div className="flex w-full">
      <div className="hidden bg-blue-700 md:block md:w-1/2">
        <div className="flex flex-col items-center justify-center py-10 lg:py-20">
          <span className="ml-[-42px] text-left text-3xl tracking-wide text-white lg:ml-0 lg:text-5xl">
            {data.h1}
          </span>
          <span className="text-left text-xs text-white lg:text-base">
            {data.h2}
          </span>
          <div className="flex items-center justify-center">
            <img src="4.png" className="w-1/2" />
          </div>
          <div className="w-1/2">
            <Ratings />
          </div>
          <div className="mt-3 text-sm text-white lg:text-base">
            <span>
              “Excellent app. An amazingly simple concept and
              <br /> well designed. Never knew how much this was
              <br /> needed until it was here.”
            </span>
            <div className="mt-2">
              <span className="text-base text-white lg:text-lg">
                Filled a Huge Cap
              </span>
              <span className="text-base text-gray-400 lg:text-lg">
                {" "}
                - Jrobyutk
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full md:w-1/2">
        <div className="w-full space-y-4">
          <div className={`mt-20 flex px-10 lg:mt-${size} lg:px-20`}>
            <button
              className="flex space-x-2 text-blue-600"
              onClick={() => navigate(-1)}
            >
              <span className="mt-1">
                <FaArrowLeft />
              </span>
              <span>Kembali</span>
            </button>
          </div>
          <div className="flex flex-col px-10 lg:px-20">
            <span className="text-center text-2xl font-semibold tracking-wide lg:text-left lg:text-4xl">
              {data.loginHead}
            </span>
            <span className="text-center text-xs lg:text-left lg:text-base">
              {data.loginText}
            </span>
          </div>
          <div className="flex items-center justify-center py-5">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
