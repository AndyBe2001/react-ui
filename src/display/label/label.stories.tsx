import type { Meta, StoryFn } from "@storybook/react";

import { Label } from ".";

const meta = {
  component: Label,
} satisfies Meta<typeof Label>;
export default meta;

const Template: StoryFn<typeof Label> = args => (
  <Label {...args}>Example of label text</Label>
);
export const Default = Template.bind({});
