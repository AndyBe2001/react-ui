import type { Meta, StoryFn } from "@storybook/react";

import { Button } from "./";

const meta = {
  component: Button,
} satisfies Meta<typeof Button>;
export default meta;

const Template: StoryFn<typeof Button> = args => (
  <Button {...args}>Click me</Button>
);
export const Default = Template.bind({});
