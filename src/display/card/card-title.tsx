import * as React from "react";

import { cn } from "../../utils";

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, children, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn("font-semibold leading-none tracking-tight", className)}
    {...props}>
    {children}
  </h3>
));
CardTitle.displayName = "CardTitle";

export { CardTitle };
