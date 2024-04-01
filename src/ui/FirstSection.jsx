import React from "react";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { RiArrowRightSLine } from "react-icons/ri";

export default function FirstSection() {
  return (
    <div className="relative flex items-center justify-center bg-gray-50">
      <div className="absolute left-5 top-20 flex items-start lg:left-44 lg:top-28">
        <div className="flex flex-col">
          <p className="w-full text-xl font-semibold text-blue-600 lg:text-4xl">
            Temukan Mentor yang Tepat dan Raih Potensimu!
          </p>
          <p className="text-stone-500 mt-3 text-sm font-semibold lg:text-xl">
            Bergabunglah dan temukan bimbingan dari para ahli
            <br /> di berbagai bidang.
          </p>
          <div className="mt-5 flex items-center space-x-5">
            <button className="w-36 rounded-lg bg-blue-600 py-2 text-xs  text-white lg:w-48 lg:text-base">
              Cari Mentor Sekarang
            </button>
            <div className="flex items-center">
              <button className="flex w-36 items-center py-2 text-xs font-bold text-blue-500   lg:w-52 lg:text-base">
                Pelajari Lebih Lanjut
                <span className="ml-1 text-base lg:text-2xl ">
                  <RiArrowRightSLine />
                </span>
              </button>
            </div>
          </div>
          <div className="mt-16 flex ">
            <span className="text-[50px] opacity-20 lg:text-[68px]">
              <IoChatbubbleEllipsesOutline />
            </span>
            <p className="ml-5 mt-[-20px] text-sm font-medium lg:text-base">
              “Excellent app. An amazingly simple concept and
              <br /> well designed. Never knew how much this was
              <br /> needed until it was here.”
            </p>
          </div>
          <div className="ml-[70px] mt-3 flex flex-row space-x-1 text-base lg:ml-[90px] lg:mt-0 lg:text-xl">
            <p className="flex items-center justify-center font-semibold">
              Filled a Huge Cap
            </p>
            <span>-</span>
            <p className="flex items-center justify-center  font-medium text-gray-500">
              Jrobyutk
            </p>
          </div>
        </div>
        <img
          src="8.png"
          className="mt-[-30px] w-48 md:w-[40%] lg:mt-[-60px] lg:w-[40%]"
        />
      </div>
    </div>
  );
}
