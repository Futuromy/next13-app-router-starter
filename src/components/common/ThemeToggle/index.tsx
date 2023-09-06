"use client";

import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";

const ThemeToggle = () => {
  const { setTheme, theme } = useTheme();

  return (
    <button
      aria-label="Toggle Dark Mode"
      type="button"
      className="h-10 w-10 rounded-full border-[0.5px] border-border bg-accent p-2 transition duration-150 ease-in-out hover:bg-accent/60 focus:outline-none"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? (
        <MoonIcon className="h-6 w-6 text-gray-500" />
      ) : (
        <SunIcon className="h-6 w-6 text-yellow-500" />
      )}
    </button>
  );
};

export default ThemeToggle;
