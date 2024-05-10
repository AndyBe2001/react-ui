import * as React from "react";

export interface BreadcrumbProps extends React.HTMLAttributes<HTMLElement> {
  routes: { path: string; name: string; icon?: React.ReactNode }[];
}
const Breadcrumb = React.forwardRef<HTMLElement, BreadcrumbProps>(
  ({ className, routes, ...props }, ref) => {
    const underlineClassName =
      "after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-black after:transition-all after:opacity-100 after:scale-x-0 after:origin-center after:hover:scale-x-100 after:focus:scale-x-100 dark:after:bg-white";

    return (
      <nav className={["flex gap-1"].join(" ")} ref={ref} {...props}>
        {routes.map((route, index) => {
          return (
            <span key={route.path}>
              <a
                href={route.path}
                className={[
                  "relative pb-0.5 dark:text-white",
                  underlineClassName,
                ].join(" ")}>
                {route.icon && <span className="mr-2">{route.icon}</span>}
                {route.name}
              </a>
              {index < routes.length - 1 && (
                <span className="cursor-default dark:text-white"> {">"} </span>
              )}
            </span>
          );
        })}
      </nav>
    );
  }
);
Breadcrumb.displayName = "Breadcrumb";

export { Breadcrumb };
