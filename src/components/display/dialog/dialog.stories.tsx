import type { Meta, StoryFn } from "@storybook/react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from ".";

const meta = {
  component: Dialog,
} satisfies Meta<typeof Dialog>;
export default meta;

const Template: StoryFn<typeof Dialog> = args => (
  <Dialog {...args}>
    <DialogTrigger>Open</DialogTrigger>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Are you absolutely sure?</DialogTitle>
        <DialogDescription>
          This action cannot be undone. This will permanently delete your
          account and remove your data from our servers.
        </DialogDescription>
      </DialogHeader>
    </DialogContent>
  </Dialog>
);
export const Default = Template.bind({});
