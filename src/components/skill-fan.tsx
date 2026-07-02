import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type Skill = {
  name: string;
  icons: ReactNode;
  /** Tilt in degrees; falls back to a symmetric fan when omitted. */
  rotate?: number;
  /** Stacking order; higher sits in front. */
  z?: number;
  /** Icon zoom multiplier — bump logos that ship with built-in padding. */
  scale?: number;
};

/**
 * Featured skills as an overlapping, fanned stack of logo cards — mirrors the
 * "Tools I use" cluster on rasmadibnu.com. Each card tilts outward; hovering
 * lifts it, straightens it, and reveals a tooltip. Icons are forced to fill
 * their slot regardless of the size class each entry ships with (`!size-full`).
 */
export function SkillFan({
  items,
  className,
}: {
  items: Skill[];
  className?: string;
}) {
  const count = items.length;
  const spread = 18; // fallback max tilt in degrees at the outer cards

  return (
    <div className={cn("relative flex justify-center py-6", className)}>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-8 bottom-7 h-16 rounded-full bg-foreground/10 blur-3xl"
      />
      <ul
        aria-label="Featured skills"
        className="relative flex items-center justify-center px-0 [&>*+*]:-ml-[1.125rem] lg:px-4 lg:[&>*+*]:-ml-8"
      >
        {items.map((item, i) => {
          const t = count === 1 ? 0 : (i / (count - 1)) * 2 - 1; // -1 .. 1
          const rot = item.rotate ?? +(t * spread).toFixed(2);
          const z = item.z ?? Math.round((1 - Math.abs(t)) * 10) + 1;

          return (
            <li
              key={item.name}
              style={{ "--r": `${rot}deg`, zIndex: z } as React.CSSProperties}
              className={cn(
                "group relative flex h-[clamp(3.375rem,16vw,6rem)] w-[clamp(3.375rem,16vw,6rem)] shrink-0 origin-bottom cursor-default items-center justify-center rounded-2xl border-[3px] border-white bg-white lg:h-32 lg:w-32 lg:rounded-3xl lg:border-4",
                "shadow-[0_18px_36px_rgba(20,22,40,0.14)] transition-[transform,box-shadow] duration-200",
                "[transform:rotate(var(--r))]",
                "hover:!z-50 hover:[transform:translateY(-0.75rem)_rotate(0deg)_scale(1.05)] hover:shadow-[0_28px_54px_rgba(20,22,40,0.2)]"
              )}
            >
              <span
                style={
                  item.scale
                    ? ({ transform: `scale(${item.scale})` } as React.CSSProperties)
                    : undefined
                }
                className="flex h-[clamp(1.875rem,8vw,3rem)] w-[clamp(1.875rem,8vw,3rem)] items-center justify-center lg:h-16 lg:w-16 [&_img]:!size-full [&_img]:object-contain [&_img]:drop-shadow-sm [&_svg]:!size-full"
              >
                {item.icons}
              </span>
              <span className="pointer-events-none absolute -top-14 flex translate-y-1 flex-col items-center rounded-xl bg-foreground px-3.5 py-2 text-[13px] font-medium text-background opacity-0 shadow-xl transition-all duration-200 group-hover:-translate-y-1 group-hover:opacity-100">
                {item.name}
                <span className="absolute -bottom-1 size-2.5 rotate-45 rounded-sm bg-foreground" />
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
