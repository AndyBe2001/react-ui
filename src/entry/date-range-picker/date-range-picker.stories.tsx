import type { Meta, StoryFn } from "@storybook/react";
import React from "react";

import { DateRangePicker } from "./";

const meta = {
  component: DateRangePicker,
} satisfies Meta<typeof DateRangePicker>;
export default meta;

const Template: StoryFn<typeof DateRangePicker> = args => {
  return <DateRangePicker {...args} />;
};
export const Default = Template.bind({});
Default.args = {
  onChange: (date: Date) => console.log(date),
};
