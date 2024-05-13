import type { Meta, StoryFn } from "@storybook/react";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./";

const meta = {
  component: NavigationMenu,
} satisfies Meta<typeof NavigationMenu>;
export default meta;

const Template: StoryFn<typeof NavigationMenu> = args => (
  <NavigationMenu {...args}>
    <NavigationMenuList>
      <NavigationMenuItem>
        <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
        <NavigationMenuContent>
          <NavigationMenuLink>
            <div className="w-[100px]">Link</div>
          </NavigationMenuLink>
        </NavigationMenuContent>
      </NavigationMenuItem>
    </NavigationMenuList>
  </NavigationMenu>
);
export const Default = Template.bind({});
