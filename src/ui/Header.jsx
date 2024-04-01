import { Link, NavLink } from "react-router-dom";
import { TbUserCheck } from "react-icons/tb";
import { FiCalendar } from "react-icons/fi";
import Logo from "./Logo";

export default function Header() {
  return (
    <header className="border-stone-100 sticky flex items-center justify-between border-b px-4 py-4 sm:px-6">
      <div className="flex items-center space-x-8">
        <Link to="/" className="mr-6 tracking-wider">
          <Logo />
        </Link>
        <nav className="mt-2 flex space-x-6 font-semibold text-gray-500">
          <NavLink
            to="/"
            className="flex items-center space-x-1 aria-[current=page]:text-blue-500"
          >
            <TbUserCheck />
            <span>Home</span>
          </NavLink>
          <NavLink
            to="/mentor"
            className="flex items-center space-x-1 aria-[current=page]:text-blue-500"
          >
            <TbUserCheck />
            <span>Mentor</span>
          </NavLink>
          <NavLink
            to="/events"
            className="flex items-center space-x-1 aria-[current=page]:text-blue-500"
          >
            <FiCalendar />
            <span>Event</span>
          </NavLink>
        </nav>
      </div>
      <div className="mt-2 flex items-center space-x-2">
        <Link
          to="/login"
          className="rounded-md px-4 py-2 font-semibold text-gray-600"
        >
          Masuk
        </Link>
        <Link
          to="/register"
          className="rounded-lg bg-blue-700 px-3 py-2 text-sm font-semibold text-white"
        >
          Daftar
        </Link>
      </div>
    </header>
  );
}
