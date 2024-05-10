import type { Meta, StoryFn } from "@storybook/react";

import { Input } from "./input";

const meta = {
  component: Input,
} satisfies Meta<typeof Input>;

export default meta;

const Template: StoryFn<typeof Input> = args => <Input {...args} />;
export const Default = Template.bind({});
