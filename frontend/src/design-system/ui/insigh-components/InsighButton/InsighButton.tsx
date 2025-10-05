import { forwardRef } from "react";
import { InsighButtonSize, InsighButtonVariant } from ".";
import { cn } from "@insigh-shared/utils/cn";
import { DynamicIcon, type IconName } from "lucide-react/dynamic";

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

  /**
   * Optional icon to be displayed in the button.
   * Lucide Icons are used. for more info: https://lucide.dev/
   * @default undefined
   */
  icon?: IconName;

  submit?: boolean;
}

const InsighButton = forwardRef<HTMLButtonElement, InsighButtonProps>(
  (
    { children, variant = "primary", size = "medium", icon, submit, ...props },
    ref
  ) => {
    return (
      <button
        ref={ref}
        type={submit ? "submit" : "button"}
        className={cn(
          `insigh-button insigh-button-${variant} insigh-button_size--${size} `
        )}
        {...props}
      >
        {icon ? (
          <div className="flex justify-center items-center gap-2 w-full">
            <DynamicIcon name={icon} color="white" />

            {children}
          </div>
        ) : (
          children
        )}
      </button>
    );
  }
);

InsighButton.displayName = "InsighButton";

export default InsighButton;
