"use client";

import * as AvatarPrimitive from "@radix-ui/react-avatar";
import * as React from "react";

import { cn } from "../../utils";

const AvatarFallback = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Fallback>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Fallback
    ref={ref}
    className={cn(
      "bg-muted flex h-full w-full items-center justify-center rounded-full",
      className
    )}
    {...props}
  />
));
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;

export { AvatarFallback };
