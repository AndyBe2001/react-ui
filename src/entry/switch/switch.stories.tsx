import type { Meta, StoryFn } from "@storybook/react";

import { Switch } from "./";

const meta = {
  component: Switch,
} satisfies Meta<typeof Switch>;
export default meta;

const Template: StoryFn<typeof Switch> = args => <Switch {...args} />;
export const Default = Template.bind({});
