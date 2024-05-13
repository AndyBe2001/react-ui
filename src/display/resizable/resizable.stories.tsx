import type { Meta, StoryFn } from "@storybook/react";

import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from ".";

const meta = {
  component: ResizableHandle,
} satisfies Meta<typeof ResizableHandle>;
export default meta;

const Template: StoryFn<typeof ResizableHandle> = args => (
  <ResizablePanelGroup direction="horizontal">
    <ResizablePanel>One</ResizablePanel>
    <ResizableHandle withHandle />
    <ResizablePanel>Two</ResizablePanel>
  </ResizablePanelGroup>
);
export const Default = Template.bind({});
