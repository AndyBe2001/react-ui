import type { Meta, StoryFn } from "@storybook/react";

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./";

const meta = {
  component: Tooltip,
} satisfies Meta<typeof Tooltip>;
export default meta;

const Template: StoryFn<typeof Tooltip> = args => (
  <TooltipProvider>
    <Tooltip {...args}>
      <TooltipTrigger>Hover</TooltipTrigger>
      <TooltipContent>
        <p>Add to library</p>
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
);
export const Default = Template.bind({});
