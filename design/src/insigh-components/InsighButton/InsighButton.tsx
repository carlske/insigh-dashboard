import { forwardRef } from "react";
import { InsighButtonSize, InsighButtonVariant } from ".";
import { cn } from "@insigh-shared/utils/cn";
import { DynamicIcon, type IconName } from "lucide-react/dynamic";
import InsighSpinner from "../InsighSpinner/InsighSpinner";

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

  /*
   * If true, the button will be of type "submit".
   * @default false
   */
  submit?: boolean;

  /**
   * Whether the button is in loading state.
   * @default false
   */
  isLoading?: boolean;

  /**
   * Ref to the button element.
   * @default undefined
   */
  ref?: React.Ref<HTMLButtonElement>;
}

const InsighButton = ({
  children,
  variant = "primary",
  size = "medium",
  icon,
  submit,
  isLoading = false,
  disabled = false,
  ref,
  ...props
}: InsighButtonProps) => {
  const renderContent = () => {
    if (isLoading) {
      return (
        <div className="flex justify-center items-center gap-2 w-full">
          <div className="animation-insigh-button-spin">
            <InsighSpinner width={16} height={16} />
          </div>
        </div>
      );
    }

    if (icon) {
      return (
        <div className="flex justify-center items-center gap-2 w-full">
          <DynamicIcon name={icon} color="white" />
          {children}
        </div>
      );
    }

    return children;
  };

  return (
    <button
      ref={ref}
      type={submit ? "submit" : "button"}
      disabled={disabled || isLoading}
      className={cn(
        "insigh-button",
        `insigh-button-${variant}`,
        `insigh-button_size--${size}`,
        isLoading && "insigh-button-loading"
      )}
      {...props}
    >
      {renderContent()}
    </button>
  );
};

InsighButton.displayName = "InsighButton";

export default InsighButton;
