import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { InsighSpinner } from "@/insigh-components";

const meta = {
  title: "Components/InsighSpinner",
  component: InsighSpinner,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    width: {
      control: "number",
      description: "Width of the spinner",
    },
    height: {
      control: "number",
      description: "Height of the spinner",
    },
    className: {
      control: "text",
      description: "Custom class name for the spinner",
    },
  },
} satisfies Meta<typeof InsighSpinner>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    width: 50,
    height: 50,
    className: "animation-insigh-button-spin",
  },
};
