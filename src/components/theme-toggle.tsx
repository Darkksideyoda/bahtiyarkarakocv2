"use client";

import * as React from "react";
import { Moon, Sun, Monitor } from "lucide-react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const themes = [
    { name: "light", icon: Sun, label: "Light" },
    { name: "dark", icon: Moon, label: "Dark" },
    { name: "system", icon: Monitor, label: "System" },
  ];

  return (
    <div className="fixed top-6 right-6 z-50">
      <div className="flex items-center gap-1 rounded-full border border-white/10 bg-black/20 px-2 py-2 backdrop-blur-md">
        {themes.map((themeOption) => {
          const isActive = theme === themeOption.name;
          const Icon = themeOption.icon;
          
          return (
            <button
              key={themeOption.name}
              onClick={() => setTheme(themeOption.name)}
              className={`group relative flex h-8 w-8 items-center justify-center rounded-full transition-all duration-300 ${
                isActive
                  ? "text-white"
                  : "text-white/70 hover:text-white"
              }`}
              title={themeOption.label}
            >
              {isActive && (
                <motion.div
                  layoutId="activeTheme"
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 to-purple-600"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <Icon className="relative z-10 h-4 w-4" />
            </button>
          );
        })}
      </div>
    </div>
  );
}