import type { Meta, StoryFn } from "@storybook/react";

import { toast, Toaster } from ".";

const meta = {
  component: Toaster,
} satisfies Meta<typeof Toaster>;
export default meta;

const Template: StoryFn<typeof Toaster> = args => (
  <>
    <span className="cursor-pointer" onClick={() => toast("Toaster text")}>
      Click me to generate toast
    </span>
    <Toaster {...args} />
  </>
);
export const Default = Template.bind({});
