/** Mark: three rising rules inside a warm square. */
export function Logo({ className = "" }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={`inline-flex items-end justify-center gap-[3px] rounded-md bg-red p-[7px] ${className}`}
    >
      <i className="block w-[3.5px] bg-white/50" style={{ height: "38%" }} />
      <i className="block w-[3.5px] bg-white/75" style={{ height: "64%" }} />
      <i className="block w-[3.5px] bg-white" style={{ height: "100%" }} />
    </span>
  );
}
