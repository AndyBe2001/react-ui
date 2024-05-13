import type { Meta, StoryFn } from "@storybook/react";

import { Popover, PopoverContent, PopoverTrigger } from ".";

const meta = {
  component: Popover,
} satisfies Meta<typeof Popover>;
export default meta;

const Template: StoryFn<typeof Popover> = args => (
  <Popover {...args}>
    <PopoverTrigger>Open</PopoverTrigger>
    <PopoverContent>Place content for the popover here.</PopoverContent>
  </Popover>
);
export const Default = Template.bind({});
