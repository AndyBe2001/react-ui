import * as React from "react";

import { cn } from "../../utils";
import { useFormField } from "./form-field";

const FormMessage = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, children, ...props }, ref) => {
  const { error, formMessageId } = useFormField();
  const body = error ? String(error?.message) : children;

  if (!body) {
    return null;
  }

  return (
    <p
      ref={ref}
      id={formMessageId}
      className={cn("text-destructive text-[0.8rem] font-medium", className)}
      {...props}>
      {body}
    </p>
  );
});
FormMessage.displayName = "FormMessage";

export { FormMessage };
