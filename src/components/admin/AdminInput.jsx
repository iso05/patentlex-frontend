export default function AdminInput({ label, ...props }) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm text-gray-400">{label}</label>
      <input
        {...props}
        className="
          bg-transparent
          border-b border-white/30
          py-2 px-1
          text-white
          outline-none
          focus:border-[#FCFFD4]
          transition
        "
      />
    </div>
  );
}
