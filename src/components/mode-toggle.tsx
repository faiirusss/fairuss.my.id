"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function ModeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const theme = mounted && resolvedTheme === "dark" ? "dark" : "light";

  return (
    <AnimatedThemeToggler
      theme={theme}
      onThemeChange={setTheme}
      // Match the other dock icons exactly: ghost icon button is `rounded-full`,
      // sized up to `size-12`, with a `size-4` glyph.
      className={cn(
        buttonVariants({ variant: "ghost", size: "icon" }),
        "size-12 [&>svg]:size-4",
      )}
    />
  );
}
