import * as React from "react";

import { cn } from "../../utils";
import { useFormField } from "./form-field";

const FormDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => {
  const { formDescriptionId } = useFormField();

  return (
    <p
      ref={ref}
      id={formDescriptionId}
      className={cn("text-muted-foreground text-[0.8rem]", className)}
      {...props}
    />
  );
});
FormDescription.displayName = "FormDescription";

export { FormDescription };
