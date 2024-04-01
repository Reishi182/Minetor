import React from "react";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
export default function Footer() {
  return (
    <>
      <footer className="footer bg-light-blue-50 p-10 text-base-content">
        <aside className="flex flex-row space-x-7 md:flex-col md:space-x-0">
          <div className="flex items-center justify-center">
            <img src="minetor.png" className=" h-7 w-8" />
            <span className="mt-2 text-2xl font-bold">
              <span className="text-blue-700">Mine</span>
              <span>tor</span>
            </span>
          </div>
          <div>
            <span>
              Mulai lakukan mentoring dan <br /> bergabunglah untuk menjadi
              <br /> mentor
            </span>
          </div>
          <div>
            <button className="w-32 rounded-lg bg-blue-700 px-2 py-2 text-white">
              Kontak Kami
            </button>
          </div>
        </aside>
        <div className="flex space-x-24">
          <nav className="flex flex-col gap-2">
            <h6 className=" font-semibold text-blue-800 ">Minetor</h6>
            <a className="link-hover link mt-2">Tentang Kami</a>
            <a className="link-hover link">Testimonial</a>
          </nav>
          <nav className="flex flex-col gap-2">
            <h6 className=" font-semibold text-blue-800 ">Layanan</h6>
            <a className="link-hover link">Mentor</a>
            <a className="link-hover link">Event</a>
            <a className="link-hover link">Daftar Mentor</a>
          </nav>
          <nav className="flex flex-col gap-2">
            <h6 className=" font-semibold text-blue-800 ">Bantuan</h6>
            <a className="link-hover link">Kebijakan dan Privasi</a>
            <a className="link-hover link">Syarat & Ketentuan</a>
            <a className="link-hover link">FaQ</a>
          </nav>
        </div>
      </footer>
      <footer className="footer border border-base-300 bg-light-blue-50 px-10 py-4 text-base-content">
        <aside className="grid-flow-col items-center justify-items-center text-center text-sm font-semibold text-blue-800">
          © Minetor 2024, PT Baselang
        </aside>
        <nav className="justify-items-center md:justify-self-end">
          <div className="grid grid-flow-col gap-3 ">
            <span className="text-4xl ">
              <AiFillInstagram color="blue" />
            </span>
            <span className="text-3xl">
              <FaTiktok color="blue" />
            </span>
            <span className="text-3xl">
              <FaFacebook color="blue" />
            </span>
          </div>
        </nav>
      </footer>
    </>
  );
}
