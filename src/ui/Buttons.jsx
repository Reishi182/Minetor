export default function Buttons({ children, classes }) {
  return (
    <button
      className={`w-[90px] ${classes} rounded-lg border-[1px] border-light-blue-400 px-2 py-2 font-semibold text-blue-800 active:bg-blue-600 active:text-white`}
    >
      {children}
    </button>
  );
}
