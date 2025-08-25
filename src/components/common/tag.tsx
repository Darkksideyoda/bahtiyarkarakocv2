import { cn } from "@/lib/utils";

interface TagProps {
  label: string;
  variant?: "default" | "category" | "status";
  className?: string;
}

export function Tag({ label, variant = "default", className }: TagProps) {
  const baseClasses = "inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium";
  
  const variantClasses = {
    default: "border border-white/10 bg-white/5 text-white/80",
    category: "border border-white/20 bg-black/40 text-white backdrop-blur-sm",
    status: "border text-xs font-medium",
  };

  return (
    <span className={cn(baseClasses, variantClasses[variant], className)}>
      {label}
    </span>
  );
}