import type { Meta, StoryFn } from "@storybook/react";
import React from "react";

import { DatetimePicker } from "./";

const meta = {
  component: DatetimePicker,
} satisfies Meta<typeof DatetimePicker>;
export default meta;

const Template: StoryFn<typeof DatetimePicker> = args => {
  return <DatetimePicker {...args} />;
};
export const Default = Template.bind({});
Default.args = {
  onChange: (date: Date) => console.log(date),
};
