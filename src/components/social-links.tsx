"use client";

import { Github, Linkedin } from "lucide-react";

export default function HeroSocials() {
  const links = [
    { href: "https://github.com/Darkksideyoda", label: "GitHub", Icon: Github },
    { href: "https://www.linkedin.com/in/bahtiyar-karakoc-4763b31a1/", label: "LinkedIn", Icon: Linkedin },
  ];

  return (
    <nav
      aria-label="Social links"
      className="
        absolute top-3 right-3 sm:top-5 sm:right-5 z-50
        flex items-center gap-2
        supports-[padding:max(0px,env(safe-area-inset-top))]:top-[max(0.75rem,env(safe-area-inset-top))]
        supports-[padding:max(0px,env(safe-area-inset-right))]:right-[max(0.75rem,env(safe-area-inset-right))]
      "
    >
      {links.map(({ href, label, Icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          title={label}
          className="
            group relative grid h-9 w-9 sm:h-10 sm:w-10 place-items-center rounded-full
            outline-none
            transition-transform duration-150
            hover:scale-105 focus-visible:ring-2 focus-visible:ring-blue-500/60
          "
        >
          {/* hover glow (bg YOK) */}
          <span className="
            pointer-events-none absolute inset-0 rounded-full opacity-0
            bg-[radial-gradient(40%_40%_at_50%_50%,rgba(99,102,241,.35),transparent)]
            group-hover:opacity-100 transition-opacity
          " />
          <Icon className="h-[18px] w-[18px] text-white/80 group-hover:text-white" />
        </a>
      ))}
    </nav>
  );
}
