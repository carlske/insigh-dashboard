import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import InsighInput from "@/insigh-components/InsighInput/InsighInput";

const meta = {
  title: "Components/InsighInput",
  component: InsighInput,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: "select",
      options: ["text", "password", "email"],
      description: "Type of the input field",
    },
    validationState: {
      control: "select",
      options: ["default", "success", "error"],
      description: "Validation state of the input",
    },
    disabled: {
      control: "boolean",
      description: "Whether the input is disabled",
    },
    required: {
      control: "boolean",
      description: "Whether the field is required",
    },
    showPasswordToggle: {
      control: "boolean",
      description: "Show password toggle for password inputs",
    },
  },
} satisfies Meta<typeof InsighInput>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic Stories
export const Default: Story = {
  args: {
    identifier: "default-input",
    label: "Default Input",
    placeholder: "Enter text...",
  },
};

export const WithHelperText: Story = {
  args: {
    identifier: "helper-input",
    label: "Username",
    placeholder: "Enter your username",
    helperText: "Choose a unique username for your account",
  },
};

export const Required: Story = {
  args: {
    identifier: "required-input",
    label: "Email Address",
    placeholder: "your@email.com",
    type: "email",
    required: true,
    helperText: "We'll never share your email with anyone else",
  },
};

// Validation States
export const Success: Story = {
  args: {
    identifier: "success-input",
    label: "Email",
    placeholder: "your@email.com",
    type: "email",
    validationState: "success",
    value: "user@example.com",
  },
};

export const Error: Story = {
  args: {
    identifier: "error-input",
    label: "Email",
    placeholder: "your@email.com",
    type: "email",
    validationState: "error",
    errorMessage: "Please enter a valid email address",
    value: "invalid-email",
  },
};

// Password Input
export const Password: Story = {
  args: {
    identifier: "password-input",
    label: "Password",
    placeholder: "Enter your password",
    type: "password",
    helperText: "Must be at least 8 characters",
  },
};

export const PasswordWithoutToggle: Story = {
  args: {
    identifier: "password-no-toggle",
    label: "Password",
    placeholder: "Enter your password",
    type: "password",
    showPasswordToggle: false,
  },
};

// No Label
export const NoLabel: Story = {
  args: {
    identifier: "no-label-input",
    placeholder: "Input without label",
    helperText: "This input has no label",
  },
};

// Long Content
export const LongContent: Story = {
  args: {
    identifier: "long-content-input",
    label:
      "This is a very long label that might wrap to multiple lines depending on container width",
    placeholder: "Enter text...",
    helperText:
      "This is a very long helper text that provides detailed information about what should be entered in this field. It might also wrap to multiple lines.",
  },
};
