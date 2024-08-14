import type { Meta, StoryFn } from "@storybook/react";
import React from "react";

import { Skeleton } from "./";

const meta = {
  component: Skeleton,
} satisfies Meta<typeof Skeleton>;
export default meta;

const Template: StoryFn<typeof Skeleton> = args => (
  <Skeleton className="w-[100px] h-[20px] rounded-full" {...args} />
);
export const Default = Template.bind({});
