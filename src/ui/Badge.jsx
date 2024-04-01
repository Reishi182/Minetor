export default function Badge({ children }) {
  return (
    <div className="badge gap-1 rounded-md border-[0.5px] border-solid border-blue-500 px-2 py-3.5 text-[10px] font-[550] text-blue-800 md:text-sm">
      {children}
    </div>
  );
}
