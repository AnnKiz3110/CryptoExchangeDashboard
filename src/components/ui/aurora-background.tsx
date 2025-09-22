"use client";

import { cn } from "../../lib/utils";
import React, { type ReactNode } from "react";

interface AuroraBackgroundProps extends React.HTMLProps<HTMLDivElement> {
  children: ReactNode;
  showRadialGradient?: boolean;
}

export const AuroraBackground = ({
  className,
  children,
  showRadialGradient = true,
  ...props
}: AuroraBackgroundProps) => {
  return (
    <main>
      <div
        className={cn(
          "transition-bg relative flex h-[100vh] flex-col items-center justify-center bg-[#040404] text-white",
          className
        )}
        {...props}
      >
        <div
          className="absolute inset-0 overflow-hidden"
          style={
            {
              "--aurora":
                "repeating-linear-gradient(115deg,#A6B8B3_5%,#808D8E_10%,#373B3B_20%,#040404_30%)",
              "--dark-gradient":
                "repeating-linear-gradient(100deg,#000_0%,#000_8%,transparent_12%,transparent_14%,#000_18%)",
              "--white-gradient":
                "repeating-linear-gradient(100deg,#fff_0%,#fff_7%,transparent_10%,transparent_12%,#fff_16%)",

              "--color-1": "#A6B8B3", // Bidwell Blue
              "--color-2": "#808D8E", // Gunmetal Grey
              "--color-3": "#373B3B", // Greenblack
              "--color-4": "#a6b8b3", // Armor Wash
              "--black": "#a6b8b3",
              "--white": "#fff",
              "--transparent": "transparent",
            } as React.CSSProperties
          }
        >
          <div
            className={cn(
              `after:animate-aurora pointer-events-none absolute -inset-[10px]
              [background-image:var(--white-gradient),var(--aurora)]
              [background-size:300%,_200%]
              [background-position:50%_50%,50%_50%]
              opacity-[0.35] blur-[18px] filter will-change-transform
              after:absolute after:inset-0
              after:[background-image:var(--white-gradient),var(--aurora)]
              after:[background-size:200%,_100%]
              after:[background-attachment:fixed]
              after:mix-blend-difference after:content-[""]
              dark:[background-image:var(--dark-gradient),var(--aurora)]
              after:dark:[background-image:var(--dark-gradient),var(--aurora)]`,

              showRadialGradient &&
                `[mask-image:radial-gradient(ellipse_at_50%_30%,black_10%,var(--transparent)_80%)]`
            )}
          ></div>
        </div>
        <div className="relative z-10">{children}</div>
      </div>
    </main>
  );
};
