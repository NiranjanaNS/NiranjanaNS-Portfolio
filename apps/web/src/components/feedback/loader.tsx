import { LoaderCircle } from "lucide-react";

export function Loader({ label = "Loading engineering journey" }: { label?: string }) {
  return (
    <div
      aria-live="polite"
      className="flex min-h-[50vh] flex-col items-center justify-center gap-4 text-muted"
      role="status"
    >
      <LoaderCircle aria-hidden="true" className="animate-spin text-primary" size={28} />
      <p className="text-sm">{label}</p>
    </div>
  );
}
