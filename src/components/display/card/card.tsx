import * as React from "react";

import { cn } from "../../../utils";

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "bg-card text-card-foreground rounded-xl border shadow",
      className
    )}
    {...props}
  />
));
Card.displayName = "Card";

export { Card };
