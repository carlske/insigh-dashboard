import { InsighModal } from "@/insigh-components";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";

const meta = {
  title: "Components/InsighModal",
  component: InsighModal,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    title: {
      control: "text",
      description: "Title of the modal",
    },
    content: {
      control: "text",
      description: "Content of the modal",
    },
    open: {
      control: "boolean",
      description: "Whether the modal is open",
    },
    onClose: {
      action: "closed",
      description: "Function to call when the modal is closed",
    },
  },
} satisfies Meta<typeof InsighModal>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic Stories
export const Default: Story = {
  args: {
    title: "Default Modal",
    content: "This is the default modal content.",
  },
};
