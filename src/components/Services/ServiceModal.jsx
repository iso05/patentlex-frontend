import { FiX } from "react-icons/fi";

export default function ServiceModal({ open, onClose, title, body }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-9999 bg-black/80 backdrop-blur flex items-center justify-center px-4">
      <div className="relative max-w-xl w-full bg-[#1b1a1a] rounded-3xl p-8 border border-white/10">
        <button onClick={onClose} className="absolute top-4 right-4 text-white/70">
          <FiX size={24} />
        </button>

        <h3 className="text-2xl text-[#FCFFD4] font-semibold mb-4">
          {title}
        </h3>

        <p className="text-white/80 leading-relaxed">
          {body}
        </p>
      </div>
    </div>
  );
}
