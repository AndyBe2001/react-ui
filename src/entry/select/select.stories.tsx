import type { Meta, StoryFn } from "@storybook/react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./";

const meta = {
  component: Select,
} satisfies Meta<typeof Select>;
export default meta;

const Template: StoryFn<typeof Select> = args => (
  <Select {...args}>
    <SelectTrigger className="w-[180px]">
      <SelectValue placeholder="Theme" />
    </SelectTrigger>
    <SelectContent>
      <SelectItem value="light">Light</SelectItem>
      <SelectItem value="dark">Dark</SelectItem>
      <SelectItem value="system">System</SelectItem>
    </SelectContent>
  </Select>
);
export const Default = Template.bind({});
