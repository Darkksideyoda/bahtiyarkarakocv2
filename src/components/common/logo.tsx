import Image from "next/image";

interface LogoProps {
  url?: string;
  alt: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}

const sizeClasses = {
  sm: "h-6 w-6",
  md: "h-9 w-9", 
  lg: "h-12 w-12",
};

export function Logo({ url, alt, size = "md", className }: LogoProps) {
  const baseClasses = "flex items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-white/5";
  const sizeClass = sizeClasses[size];

  return (
    <div className={`${baseClasses} ${sizeClass} ${className || ""}`}>
      {url ? (
        <Image
          src={url}
          alt={alt}
          width={size === "sm" ? 24 : size === "md" ? 36 : 48}
          height={size === "sm" ? 24 : size === "md" ? 36 : 48}
          sizes="48px"
          className="h-full w-full object-cover"
        />
      ) : null}
    </div>
  );
}