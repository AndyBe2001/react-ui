import type { Meta, StoryFn } from "@storybook/react";

import { Label } from "../../display/label";
import { RadioGroup, RadioGroupItem } from "./";

const meta = {
  component: RadioGroup,
} satisfies Meta<typeof RadioGroup>;
export default meta;

const Template: StoryFn<typeof RadioGroup> = args => (
  <RadioGroup defaultValue="option-one">
    <div className="flex items-center space-x-2">
      <RadioGroupItem value="option-one" id="option-one" />
      <Label htmlFor="option-one">Option One</Label>
    </div>
    <div className="flex items-center space-x-2">
      <RadioGroupItem value="option-two" id="option-two" />
      <Label htmlFor="option-two">Option Two</Label>
    </div>
  </RadioGroup>
);
export const Default = Template.bind({});
