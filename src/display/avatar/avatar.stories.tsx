import type { Meta, StoryFn } from "@storybook/react";

import { Avatar, AvatarFallback, AvatarImage } from ".";

const meta = {
  component: Avatar,
} satisfies Meta<typeof Avatar>;
export default meta;

const Template: StoryFn<typeof Avatar> = args => (
  <Avatar {...args}>
    <AvatarImage src="https://github.com/shadcn.png" />
    <AvatarFallback>CN</AvatarFallback>
  </Avatar>
);
export const Default = Template.bind({});
