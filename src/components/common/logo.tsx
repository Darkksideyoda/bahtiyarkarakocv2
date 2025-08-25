import Image from "next/image";

interface LogoProps {
  url?: string | null | undefined; // ⬅️ kritik değişiklik
  alt: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}

const sizeClasses = {
  sm: "h-6 w-6",
  md: "h-9 w-9",
  lg: "h-12 w-12",
} as const;

export function Logo({ url, alt, size = "md", className }: LogoProps) {
  const base =
    "flex items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-white/5";
  const wh =
    size === "sm" ? 24 : size === "md" ? 36 : 48;

  return (
    <div className={`${base} ${sizeClasses[size]} ${className ?? ""}`}>
      {url ? (
        <Image
          src={url}
          alt={alt}
          width={wh}
          height={wh}
          sizes={`${wh}px`}
          className="h-full w-full object-cover"
        />
      ) : null}
    </div>
  );
}
