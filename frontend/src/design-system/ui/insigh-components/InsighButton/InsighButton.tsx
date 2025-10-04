import { forwardRef } from "react";
import { InsighButtonSize, InsighButtonVariant } from ".";
// If you have a local utility function for classnames, update the import path accordingly:
import { cn } from "@insigh-shared/utils/cn";
// Or, if you don't have a cn utility, you can use a simple implementation:

interface InsighButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  /**
   * The variant of the button.
   * @default "primary"
   */
  variant?: InsighButtonVariant;

  /**
   * The size of the button.
   * @default "medium"
   */
  size?: InsighButtonSize;

  /**
   * Whether the button is disabled.
   * @default false
   */
  disabled?: boolean;

  /**
   * The content of the button.
   * @default undefained
   */
  children: React.ReactNode;
}

const InsighButton = forwardRef<HTMLButtonElement, InsighButtonProps>(
  ({ children, variant = "primary", size = "medium", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(`insigh-button-${variant} insigh-button-${size}`)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

InsighButton.displayName = "InsighButton";
export default InsighButton;
