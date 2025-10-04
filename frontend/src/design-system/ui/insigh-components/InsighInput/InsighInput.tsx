import { cn } from "@insigh-shared/utils/cn";
import React, { forwardRef, JSX } from "react";

type InsighInputAdditionalProps = {
  /**
   * Type of the input
   * @type {'text' | 'password' | 'email' | 'number' | 'tel' | 'url' | 'search' | 'date' | 'datetime-local' | 'month' | 'time' | 'week' | 'color'}
   * @defaultValue 'text'
   */
  type?: "text" | "password" | "email";

  /**
   * ID of the input
   * @type {string}
   */
  identifier: string;

  /**
   * Label element for the input
   * @type {JSX.Element}
   */
  labelComponent?: JSX.Element | JSX.Element[];

  /**
   * Placeholder
   * @type {string}
   */
  placeholder?: string;

  /**
   *  input is valid or not
   * @type {boolean}
   * @defaultValue false
   */
  valid?: boolean;

  /**
   * Whether input is in error or not
   * @type {boolean}
   * @defaultValue false
   */
  error?: boolean;

  /**
   * Called when icon is clicked
   * @type {React.MouseEventHandler}
   * @defaultValue undefined
   */
  onIconClick?: React.MouseEventHandler;

  /**
   * Classes to be applied to the label
   * @type {string}
   */
  labelClassName?: string;

  /**
   * Props to be spreaded to the label
   * @type {object}
   */
  labelProps?: React.ComponentPropsWithoutRef<"label">;
};

export type InsighInputProps = React.ComponentPropsWithoutRef<"input"> &
  InsighInputAdditionalProps;
const InsighInput = forwardRef<
  HTMLTextAreaElement & HTMLInputElement,
  InsighInputProps
>(
  (
    {
      identifier,
      labelClassName,
      labelComponent,
      type = "text",
      error,
      disabled,
      valid,
      placeholder,
      ...props
    }: InsighInputProps,
    ref
  ) => {
    return (
      <>
        <label
          htmlFor={identifier}
          className={labelClassName}
          {...props.labelProps}
        >
          {labelComponent}
        </label>
        <div className="insigh-input">
          <input
            id={identifier}
            aria-invalid={error ? "true" : "false"}
            {...props}
            ref={ref}
            type={type}
            className={cn("insigh-input-field", {
              "border-insigh-error": error && !disabled,
              "border-insigh-success": valid && !disabled,
            })}
            placeholder={placeholder}
          />
        </div>
      </>
    );
  }
);

InsighInput.displayName = "InsighInput";

export default InsighInput;
