"use client";

import { useTheme } from "next-themes";
import { cloneElement, useEffect, useState } from "react";
import { GitHubCalendar } from "react-github-calendar";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

export function GithubContributions({ username }: { username: string }) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // The library fetches and renders on the client; gate on mount so the
  // theme-derived colorScheme is correct and we avoid a hydration mismatch.
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Reserve roughly the calendar's height to avoid layout shift on hydrate.
    return <div className="min-h-[160px] w-full" aria-hidden />;
  }

  return (
    <>
      <GitHubCalendar
        username={username}
        colorScheme={resolvedTheme === "dark" ? "dark" : "light"}
        // GitLab-style violet accent instead of the library's default GitHub green.
        theme={{
          light: ["#ebedf0", "#e0d4f7", "#c4b5fd", "#8b5cf6", "#6d28d9"],
          dark: ["#161b22", "#311b6b", "#6d28d9", "#8b5cf6", "#c4b5fd"],
        }}
        blockSize={12}
        blockMargin={4}
        fontSize={14}
        renderBlock={(block, activity) =>
          cloneElement(block, {
            "data-tooltip-id": "github-contribution-tooltip",
            "data-tooltip-content": `${activity.count} contribution${activity.count === 1 ? "" : "s"} on ${activity.date}`,
          })
        }
      />
      <Tooltip id="github-contribution-tooltip" />
    </>
  );
}
