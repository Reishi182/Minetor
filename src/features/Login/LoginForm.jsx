import { Checkbox } from "@material-tailwind/react";
import FormInput from "../../ui/FormInput";
import { Link } from "react-router-dom";

export default function LoginForm() {
  return (
    <div className="flex w-[75%] flex-col ">
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="space-y-5">
          <FormInput label="Email" type="email" />
          <FormInput label="Kata Sandi" type="password" />
        </div>
        <div className="flex justify-between">
          <Checkbox
            label={<p className="text-[13px] text-gray-600">Ingat Saya</p>}
          />
          <Link className="mt-3 text-sm text-blue-800">Lupa Password?</Link>
        </div>
        <button className="mt-5 w-full rounded-lg bg-blue-700 px-2 py-2 text-[16px] text-white lg:text-[20px]">
          Masuk
        </button>
      </form>
    </div>
  );
}
