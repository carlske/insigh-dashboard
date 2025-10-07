import InsighButton from "@/design-system/ui/insigh-components/InsighButton/InsighButton";
import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";

describe("InsighButton", () => {
  it("renders a button", () => {
    render(<InsighButton>Test Button</InsighButton>);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });

  it("renders with children text", () => {
    render(<InsighButton>Click me</InsighButton>);
    expect(screen.getByText("Click me")).toBeInTheDocument();
  });

  it("applies variant classes correctly", () => {
    const { rerender } = render(
      <InsighButton variant="primary">Primary</InsighButton>
    );
    let button = screen.getByRole("button");
    expect(button).toHaveClass("insigh-button-primary");

    rerender(<InsighButton variant="secondary">Secondary</InsighButton>);
    button = screen.getByRole("button");
    expect(button).toHaveClass("insigh-button-secondary");

    rerender(<InsighButton variant="danger">Danger</InsighButton>);
    button = screen.getByRole("button");
    expect(button).toHaveClass("insigh-button-danger");
  });

  it("applies size classes correctly", () => {
    const { rerender } = render(
      <InsighButton size="small">Small</InsighButton>
    );
    let button = screen.getByRole("button");
    expect(button).toHaveClass("insigh-button_size--small");

    rerender(<InsighButton size="medium">Medium</InsighButton>);
    button = screen.getByRole("button");
    expect(button).toHaveClass("insigh-button_size--medium");

    rerender(<InsighButton size="large">Large</InsighButton>);
    button = screen.getByRole("button");
    expect(button).toHaveClass("insigh-button_size--large");
  });

  it("handles onClick events", () => {
    const handleClick = jest.fn();
    render(<InsighButton onClick={handleClick}>Click me</InsighButton>);

    const button = screen.getByRole("button");
    fireEvent.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("applies disabled state correctly", () => {
    const handleClick = jest.fn();
    render(
      <InsighButton disabled onClick={handleClick}>
        Disabled Button
      </InsighButton>
    );

    const button = screen.getByRole("button");
    expect(button).toBeDisabled();

    fireEvent.click(button);
    expect(handleClick).not.toHaveBeenCalled();
  });

  it("applies custom className", () => {
    render(<InsighButton className="custom-class">Custom</InsighButton>);
    const button = screen.getByRole("button");
    expect(button).toHaveClass("custom-class");
  });

  it("forwards ref correctly", () => {
    const ref = React.createRef<HTMLButtonElement>();
    render(<InsighButton ref={ref}>Ref Button</InsighButton>);

    expect(ref.current).toBeInstanceOf(HTMLButtonElement);
  });

  it("supports button type attribute", () => {
    const { rerender } = render(
      <InsighButton type="submit">Submit</InsighButton>
    );
    let button = screen.getByRole("button");
    expect(button).toHaveAttribute("type", "submit");

    rerender(<InsighButton type="reset">Reset</InsighButton>);
    button = screen.getByRole("button");
    expect(button).toHaveAttribute("type", "reset");
  });

  it("applies aria-label when provided", () => {
    render(<InsighButton aria-label="Close button">X</InsighButton>);
    const button = screen.getByRole("button");
    expect(button).toHaveAttribute("aria-label", "Close button");
  });

  it("handles multiple clicks correctly", () => {
    const handleClick = jest.fn();
    render(<InsighButton onClick={handleClick}>Multi Click</InsighButton>);

    const button = screen.getByRole("button");
    fireEvent.click(button);
    fireEvent.click(button);
    fireEvent.click(button);

    expect(handleClick).toHaveBeenCalledTimes(3);
  });
});
