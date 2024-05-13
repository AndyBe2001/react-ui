import { ChevronRightIcon, DotsHorizontalIcon } from "@radix-ui/react-icons";
import * as React from "react";

import { cn } from "../../utils";

const BreadcrumbSeparator = ({
  children,
  className,
  ...props
}: React.ComponentProps<"li">) => (
  <li
    role="presentation"
    aria-hidden="true"
    className={cn("[&>svg]:size-3.5", className)}
    {...props}>
    {children ?? <ChevronRightIcon />}
  </li>
);
BreadcrumbSeparator.displayName = "BreadcrumbSeparator";

export { BreadcrumbSeparator };
