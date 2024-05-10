import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { Meta, StoryFn } from "@storybook/react";

import { Breadcrumb } from ".";

const meta = {
  component: Breadcrumb,
} satisfies Meta<typeof Breadcrumb>;
export default meta;

const Template: StoryFn<typeof Breadcrumb> = args => <Breadcrumb {...args} />;
export const Default = Template.bind({});
Default.args = {
  routes: [
    { path: "/path1", name: "Home", icon: <FontAwesomeIcon icon={faHouse} /> },
    { path: "/path2", name: "Item 1" },
  ],
};
