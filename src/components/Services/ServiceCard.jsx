export default function ServiceCard({
  icon: Icon,
  title,
  body,
  onOpen,
  isMobile,
}) {
  return (
    <div
      onClick={isMobile ? onOpen : undefined}
      onDoubleClick={!isMobile ? onOpen : undefined}
      className="group bg-white/10 relative backdrop-blur-lg border border-white/10 rounded-2xl p-6 flex flex-col justify-between gap-4 transition-all duration-300 h-full hover:bg-[#95803D]"
    >
      <div className="absolute left-0 top-0 h-full w-[1.5px] bg-[#FCFFD4] opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>

      <div className="flex items-center gap-4">
        <div className="text-4xl md:text-5xl text-[#FCFFD4] shrink-0">
          <Icon />
        </div>
        <h3 className="text-lg md:text-xl font-semibold text-[#FCFFD4]">
          {title}
        </h3>
      </div>

      <p className="text-white/70 leading-relaxed text-sm mt-4">{body}</p>
    </div>
  );
}
