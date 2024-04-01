export default function FormInput({ label, onChange, value, children, type }) {
  return (
    <div className="flex w-full flex-col gap-2">
      <label className="text-sm font-bold text-gray-600">{label}</label>
      <input
        className="rounded-lg border border-gray-400 px-2 py-2"
        type={type}
        onChange={onChange}
        value={value}
      />
      {children}
    </div>
  );
}
