import type { Meta, StoryFn } from "@storybook/react";

import { Calendar } from "./";

const meta = {
  component: Calendar,
  argTypes: {},
} satisfies Meta<typeof Calendar>;
export default meta;

const Template: StoryFn<typeof Calendar> = args => (
  <Calendar className="rounded-md border w-fit" {...args} />
);
export const Default = Template.bind({});
Default.args = {
  mode: "single",
  selected: new Date(),
};
export const Range = Template.bind({});
Range.args = {
  mode: "range",
  numberOfMonths: 2,
  selected: {
    from: new Date(),
    to: new Date(new Date().getTime() + 1000 * 60 * 60 * 24 * 35),
  },
};
