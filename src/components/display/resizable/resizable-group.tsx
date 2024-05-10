"use client";

import { PanelGroup } from "react-resizable-panels";

import { cn } from "../../../utils";

const ResizableGroup = ({
  className,
  ...props
}: React.ComponentProps<typeof PanelGroup>) => (
  <PanelGroup
    className={cn(
      "flex h-full w-full data-[panel-group-direction=vertical]:flex-col",
      className
    )}
    {...props}
  />
);

export { ResizableGroup };
