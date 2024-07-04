import type { Meta, StoryFn } from "@storybook/react";
import React from "react";

import { DatePicker } from "./";

const meta = {
  component: DatePicker,
} satisfies Meta<typeof DatePicker>;
export default meta;

const Template: StoryFn<typeof DatePicker> = args => {
  return <DatePicker {...args} />;
};
export const Default = Template.bind({});
Default.args = {
  onChange: (date: Date) => console.log(date),
};
