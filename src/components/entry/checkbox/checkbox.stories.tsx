import type { Meta, StoryFn } from "@storybook/react";

import { Checkbox } from "./";

const meta = {
  component: Checkbox,
} satisfies Meta<typeof Checkbox>;
export default meta;

const Template: StoryFn<typeof Checkbox> = args => <Checkbox {...args} />;
export const Default = Template.bind({});
