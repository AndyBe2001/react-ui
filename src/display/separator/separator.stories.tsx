import type { Meta, StoryFn } from "@storybook/react";

import { Separator } from ".";

const meta = {
  component: Separator,
} satisfies Meta<typeof Separator>;
export default meta;

const Template: StoryFn<typeof Separator> = args => <Separator {...args} />;
export const Default = Template.bind({});
