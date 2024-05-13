import type { Meta, StoryFn } from "@storybook/react";

import { Button } from "./";

const meta = {
  component: Button,
  argTypes: {
    variant: {
      options: ["default", "destructive", "outline", "ghost", "link"],
      control: { type: "radio" },
    },
    size: {
      options: ["default", "sm", "lg", "icon"],
      control: { type: "radio" },
    },
    loading: { control: { type: "boolean" } },
    asChild: { table: { disable: true } },
  },
} satisfies Meta<typeof Button>;
export default meta;

const Template: StoryFn<typeof Button> = args => (
  <Button {...args}>Click me</Button>
);
export const Default = Template.bind({});
