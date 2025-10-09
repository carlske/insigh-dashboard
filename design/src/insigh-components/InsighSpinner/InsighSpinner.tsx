import { LoaderCircle } from "lucide-react";
import React from "react";
import { cn } from "@insigh-shared/utils/cn";

type Props = {
  className?: string;
  width?: number;
  height?: number;
};

export default function InsighSpinner({
  className,
  width = 20,
  height = 20,
}: Props) {
  return (
    <div
      className={cn(
        "dark:text-gray h-fit w-fit animate-spin text-white",
        className
      )}
    >
      <LoaderCircle aria-hidden="true" width={width} height={height} />
    </div>
  );
}
