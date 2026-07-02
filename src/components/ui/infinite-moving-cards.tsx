import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import { Button } from "./button";

const DURATION = { fast: "20s", normal: "40s", slow: "80s" } as const;

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    name: string;
    icons: ReactNode;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  return (
    <div
      style={
        {
          "--animation-duration": DURATION[speed],
          "--animation-direction": direction === "left" ? "forwards" : "reverse",
        } as React.CSSProperties
      }
      className={cn(
        "scroller relative z-20 overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      {/* Items are rendered twice; the animation translates by exactly one copy
          (-50%) for a seamless, glitch-free loop. */}
      <div
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-4 animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {[...items, ...items].map((item, id) => (
          <div key={id} className="flex items-center" aria-hidden={id >= items.length}>
            <Button className="flex items-center space-x-2">
              {item.icons}
              <span>{item.name}</span>
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};
