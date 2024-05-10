import * as React from "react";

import { cn } from "../../../utils";

const Table = React.forwardRef<
  HTMLTableElement,
  React.HTMLAttributes<HTMLTableElement>
>(({ className, ...props }, ref) => (
  <div className="relative w-full overflow-auto">
    <table
      ref={ref}
      className={cn("caption-bottom w-full text-sm", className)}
      {...props}
    />
  </div>
));
Table.displayName = "Table";

export { Table };
