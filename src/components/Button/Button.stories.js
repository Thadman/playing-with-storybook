import React from "react";
import Button from "./Button";
import { action, actions } from "@storybook/addon-actions";
import { text, boolean } from "@storybook/addon-knobs";

export default {
  title: "Form/Button",
  component: Button,
  argTypes: {
    backgroundColor: { control: "color" },
    onClick: { action: "Clicked me" },
  },
  parameters: {
    actions: {
      handles: ["mouseover"],
    },
  },
};

const Template = (args) => <Button {...args} />;

// export const Success = Template.bind({});
// Success.args = {
//   backgroundColor: "#e00",
//   children: "Success",
// };

export const Primary = () => (
  <Button onClick={action("Click Handler")} variant="primary">
    Primary
  </Button>
);
export const Secondary = () => <Button variant="secondary">Secondary</Button>;
export const Success = () => <Button variant="success">Success</Button>;
export const Danger = () => (
  <Button {...actions("onClick", "onMouseOut")} variant="danger">
    Danger
  </Button>
);

export const Disabled = () => (
  <Button disabled={boolean("Disabled", false)}>
    {text("Label", "Button Label")}
  </Button>
);

export const NotUsed = Template.bind({});
NotUsed.args = {
  backgroundColor: "#f1f1f1",
  children: "Submit",
};
