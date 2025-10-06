"use client";
import { cn } from "@insigh-shared/utils/cn";
import {
  ComponentPropsWithoutRef,
  forwardRef,
  JSX,
  MouseEventHandler,
  useState,
} from "react";
import { Eye, EyeOff, Check } from "lucide-react";
import { off } from "process";

type InsighInputAdditionalProps = {
  /**
   * Type of the input
   * @type {'text' | 'password' | 'email'}
   * @defaultValue 'text'
   */
  type?: "text" | "password" | "email";

  /**
   * ID of the input
   * @type {string}
   */
  identifier: string;

  /**
   * Label text (string) or custom JSX element
   * @type {string | JSX.Element}
   */
  label?: string | JSX.Element | JSX.Element[];

  /**
   * Placeholder
   * @type {string}
   */
  placeholder?: string;

  /**
   * Validation state of the input
   * @type {'default' | 'success' | 'error'}
   * @defaultValue 'default'
   */
  validationState?: "default" | "success" | "error";

  /**
   * Called when icon is clicked
   * @type {MouseEventHandler}
   * @defaultValue undefined
   */
  onIconClick?: MouseEventHandler;

  /**
   * Classes to be applied to the label
   * @type {string}
   */
  labelClassName?: string;

  /**
   * Props to be spreaded to the label
   * @type {object}
   */
  labelProps?: ComponentPropsWithoutRef<"label">;

  /**
   * Helper text to display below the input
   * @type {string}
   */
  helperText?: string;

  /**
   * Error message to display when validation fails
   * @type {string}
   */
  errorMessage?: string;

  /**
   * Show password toggle button (only for password inputs)
   * @type {boolean}
   * @defaultValue true
   */
  showPasswordToggle?: boolean;

  /**
   * Icon to display at the start of the input
   * @type {JSX.Element}
   */
  startIcon?: JSX.Element;

  /**
   * Icon to display at the end of the input
   * @type {JSX.Element}
   */
  endIcon?: JSX.Element;

  /**
   * Mark field as required (adds asterisk)
   * @type {boolean}
   * @defaultValue false
   */
  required?: boolean;
};

export type InsighInputProps = Omit<
  React.ComponentPropsWithoutRef<"input">,
  "size"
> &
  InsighInputAdditionalProps;

const InsighInput = forwardRef<HTMLInputElement, InsighInputProps>(
  (
    {
      identifier,
      labelClassName,
      label,
      type = "text",
      validationState = "default",
      disabled = false,
      placeholder,
      helperText,
      errorMessage,
      showPasswordToggle = true,
      startIcon,
      endIcon,
      className,
      required = false,
      ...props
    }: InsighInputProps,
    ref
  ) => {
    const [showPassword, setShowPassword] = useState(false);
    const [isFocused, setIsFocused] = useState(false);

    const labelContent = label;

    const isError = validationState === "error";
    const isSuccess = validationState === "success";

    const inputType =
      type === "password" && showPassword && showPasswordToggle ? "text" : type;

    const handleTogglePassword = () => {
      setShowPassword((prev) => !prev);
    };

    return (
      <div className="insigh-input-wrapper">
        {labelContent && (
          <label
            htmlFor={identifier}
            className={cn(
              "insigh-input-label",
              {
                "insigh-input-label--disabled": disabled,
                "insigh-input-label--error": isError,
              },
              labelClassName
            )}
            {...props.labelProps}
          >
            {typeof labelContent === "string" ? (
              <>
                {labelContent}
                {required && <span className="insigh-input-required">*</span>}
              </>
            ) : (
              labelContent
            )}
          </label>
        )}

        <div
          className={cn("insigh-input-container", {
            "insigh-input-container--focused": isFocused && !disabled,
            "insigh-input-container--disabled": disabled,
            "insigh-input-container--error": isError && !disabled,
            "insigh-input-container--success": isSuccess && !disabled,
          })}
        >
          {startIcon && (
            <div className="insigh-input-icon insigh-input-icon--start">
              {startIcon}
            </div>
          )}

          <input
            ref={ref}
            id={identifier}
            type={inputType}
            autoComplete={type == "password" ? "new-password" : "off"}
            disabled={disabled}
            placeholder={placeholder}
            required={required}
            aria-invalid={isError ? "true" : "false"}
            aria-required={required}
            aria-describedby={
              isError && errorMessage
                ? `${identifier}-error`
                : helperText
                ? `${identifier}-helper`
                : undefined
            }
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            className={cn("insigh-input-field", className)}
            {...props}
          />

          {type === "password" && showPasswordToggle ? (
            <button
              type="button"
              onClick={handleTogglePassword}
              disabled={disabled}
              className="insigh-input-icon insigh-input-icon--end insigh-input-icon--button"
              aria-label={showPassword ? "Hide password" : "Show password"}
              tabIndex={-1}
            >
              {showPassword ? (
                <EyeOffIcon className="insigh-input-icon-svg" />
              ) : (
                <EyeIcon className="insigh-input-icon-svg" />
              )}
            </button>
          ) : endIcon ? (
            <div className="insigh-input-icon insigh-input-icon--end">
              {endIcon}
            </div>
          ) : null}

          {!endIcon && type !== "password" && isSuccess && (
            <div className="insigh-input-icon insigh-input-icon--end">
              <CheckIcon className="insigh-input-icon-svg text-insigh-success" />
            </div>
          )}
        </div>

        {isError && errorMessage ? (
          <p
            id={`${identifier}-error`}
            className="insigh-input-message insigh-input-message--error"
          >
            {errorMessage}
          </p>
        ) : helperText ? (
          <p
            id={`${identifier}-helper`}
            className="insigh-input-message insigh-input-message--helper"
          >
            {helperText}
          </p>
        ) : null}
      </div>
    );
  }
);

const EyeIcon = ({ className }: { className?: string }) => (
  <Eye className={className} width={20} height={20} />
);

const EyeOffIcon = ({ className }: { className?: string }) => (
  <EyeOff className={className} width={20} height={20} />
);

const CheckIcon = ({ className }: { className?: string }) => (
  <Check className={className} width={20} height={20} />
);

InsighInput.displayName = "InsighInput";

export default InsighInput;
