import { Link } from "react-router-dom";
import FormInput from "../../ui/FormInput";
import { FaGoogle } from "react-icons/fa";

export default function RegisterForm() {
  return (
    <div className="flex w-[75%] flex-col ">
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="space-y-3">
          <FormInput label="Nama Lengkap" />
          <FormInput label="Email " type="email'\" />
          <FormInput label="Nama Pengguna" />
          <FormInput label="No Telp" type="number" />
          <FormInput label="Kertertarikan Skill" />
          <FormInput label="Kata Sandi" type="password">
            <span className="label-text-alt">* kata sandi min 8 karakter</span>
          </FormInput>
        </div>

        <button className="mt-7 w-full rounded-lg bg-blue-700 px-2 py-2 text-[16px] text-white lg:mt-10 lg:text-[20px]">
          Daftar
        </button>
      </form>
      <div className="mt-3 flex justify-center">
        <span className="text-center text-sm lg:text-base">
          Sudah Punya Akun?{" "}
          <Link className="font-semibold text-blue-600">Masuk Disini</Link>
        </span>
      </div>
      <button className="mt-7 flex w-full justify-center space-x-2 rounded-lg border border-gray-200 bg-gray-50 px-2 py-2 font-bold shadow-md  lg:mt-10 lg:text-[15px]">
        <FaGoogle className="mt-0.5" />
        <span>Masuk/Daftar dengan Google</span>
      </button>
    </div>
  );
}
