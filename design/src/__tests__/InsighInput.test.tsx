import InsighInput from "@/insigh-components/InsighInput/InsighInput";
import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";

describe("InsighInput", () => {
  // Basic Rendering Tests
  it("renders an input field", () => {
    render(<InsighInput identifier="test-input" />);
    const input = screen.getByRole("textbox");
    expect(input).toBeInTheDocument();
  });

  it("renders with placeholder", () => {
    render(
      <InsighInput identifier="test-input" placeholder="Enter your name" />
    );
    expect(screen.getByPlaceholderText("Enter your name")).toBeInTheDocument();
  });

  it("renders with label", () => {
    render(<InsighInput identifier="test-input" label="Username" />);
    expect(screen.getByText("Username")).toBeInTheDocument();
    expect(screen.getByLabelText("Username")).toBeInTheDocument();
  });

  it("renders with placeholder", () => {
    render(
      <InsighInput identifier="test-input" placeholder="Enter your name" />
    );
    expect(screen.getByPlaceholderText("Enter your name")).toBeInTheDocument();
  });

  it("renders JSX element as label", () => {
    const CustomLabel = () => (
      <span data-testid="custom-label">Custom Label Component</span>
    );
    render(<InsighInput identifier="test-input" label={<CustomLabel />} />);

    expect(screen.getByTestId("custom-label")).toBeInTheDocument();
  });

  // Edge Cases
  it("renders without label", () => {
    render(<InsighInput identifier="test-input" />);
    const wrapper = screen
      .getByRole("textbox")
      .closest(".insigh-input-wrapper");
    expect(wrapper?.querySelector("label")).not.toBeInTheDocument();
  });

  it("handles multiple props together", () => {
    render(
      <InsighInput
        identifier="test-input"
        label="Email"
        type="email"
        placeholder="user@example.com"
        required
        validationState="error"
        errorMessage="Invalid email"
        disabled={false}
      />
    );

    expect(screen.getByText("Email")).toBeInTheDocument();
    expect(screen.getByText("*")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("user@example.com")).toBeInTheDocument();
    expect(screen.getByText("Invalid email")).toBeInTheDocument();
  });

  it("renders with required asterisk when required is true", () => {
    render(<InsighInput identifier="test-input" label="Email" required />);
    expect(screen.getByText("*")).toBeInTheDocument();
    const input = screen.getByRole("textbox");
    expect(input).toHaveAttribute("aria-required", "true");
    expect(input).toHaveAttribute("required");
  });

  // Type Tests
  it("renders as text input by default", () => {
    render(<InsighInput identifier="test-input" />);
    const input = screen.getByRole("textbox");
    expect(input).toHaveAttribute("type", "text");
  });

  it("renders as email input when type is email", () => {
    render(<InsighInput identifier="test-input" type="email" />);
    const input = screen.getByRole("textbox");
    expect(input).toHaveAttribute("type", "email");
  });

  it("applies correct message classes", () => {
    const { rerender } = render(
      <InsighInput identifier="test-input" helperText="Helper" />
    );

    let message = screen.getByText("Helper");
    expect(message).toHaveClass("insigh-input-message");
    expect(message).toHaveClass("insigh-input-message--helper");

    rerender(
      <InsighInput
        identifier="test-input"
        validationState="error"
        errorMessage="Error"
      />
    );

    message = screen.getByText("Error");
    expect(message).toHaveClass("insigh-input-message");
    expect(message).toHaveClass("insigh-input-message--error");
  });

  it("applies correct field class to input", () => {
    render(<InsighInput identifier="test-input" />);
    const input = screen.getByRole("textbox");
    expect(input).toHaveClass("insigh-input-field");
  });
});
