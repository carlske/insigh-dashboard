import { EMAIL_REGEX } from "@/lib/validations";
import { useState } from "react";

export const useFormValidation = (
  password: React.RefObject<HTMLInputElement> | null,
  email: React.RefObject<HTMLInputElement> | null
) => {
  const [validationState, setValidationState] = useState<{
    email: "default" | "error" | "success";
    password: "default" | "error" | "success";
  }>({
    email: "default",
    password: "default",
  });

  const validateEmail = (email: string) => {
    return EMAIL_REGEX.test(email);
  };

  const validatePassword = (password: string) => {
    return password.length >= 8;
  };

  const isValid = () => {
    const emailValue = email?.current?.value || "";
    const passwordValue = password?.current?.value || "";
    return validateEmail(emailValue) && validatePassword(passwordValue);
  };

  return {
    validateEmail,
    validatePassword,
    validationState,
    setValidationState,
    isValid,
  };
};
