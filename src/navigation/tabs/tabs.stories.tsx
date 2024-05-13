import type { Meta, StoryFn } from "@storybook/react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "./";

const meta = {
  component: Tabs,
} satisfies Meta<typeof Tabs>;
export default meta;

const Template: StoryFn<typeof Tabs> = args => (
  <Tabs {...args} defaultValue="account" className="w-[400px]">
    <TabsList>
      <TabsTrigger value="account">Account</TabsTrigger>
      <TabsTrigger value="password">Password</TabsTrigger>
    </TabsList>
    <TabsContent value="account">
      Make changes to your account here.
    </TabsContent>
    <TabsContent value="password">Change your password here.</TabsContent>
  </Tabs>
);
export const Default = Template.bind({});
