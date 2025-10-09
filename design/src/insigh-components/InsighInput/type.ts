import { JSX } from "react";

export type InsighInputType = "text" | "password" | "email";

export type InsighInputValidationState = "default" | "success" | "error";

export interface InsighInputBaseProps {
  /**
   * Type of the input
   */
  type?: InsighInputType;

  /**
   * Unique identifier for the input
   */
  identifier: string;

  /**
   * Label text or JSX element
   */
  label?: string | JSX.Element | JSX.Element[];

  /**
   * Validation state
   */
  validationState?: InsighInputValidationState;

  /**
   * Helper text to display below input
   */
  helperText?: string;

  /**
   * Error message for validation failures
   */
  errorMessage?: string;

  /**
   * Show password toggle (password inputs only)
   */
  showPasswordToggle?: boolean;

  /**
   * Icon at start of input
   */
  startIcon?: JSX.Element;

  /**
   * Icon at end of input
   */
  endIcon?: JSX.Element;

  /**
   * Mark as required
   */
  required?: boolean;
}

/*
 * Usage Guidelines:
 *
 * ✅ Controlled component (with state):
 * <InsighInput value={state} onChange={setState} />
 *
 * ✅ Uncontrolled component (for demos):
 * <InsighInput defaultValue="demo value" />
 *
 * ✅ Read-only field:
 * <InsighInput value="static" readOnly />
 *
 * ❌ Invalid (causes React warning):
 * <InsighInput value="static" />
 */
