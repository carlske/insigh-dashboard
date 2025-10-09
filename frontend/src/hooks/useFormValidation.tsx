import { EMAIL_REGEX } from "@/lib/validations";
import { ChangeEvent, startTransition, useState } from "react";

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

  const handleValidationChange = (
    e: ChangeEvent<HTMLInputElement>,
    type: "email" | "password"
  ) => {
    const value = e.target.value;

    startTransition(() => {
      setValidationState((prev) => ({
        ...prev,
        [type]:
          type === "email"
            ? validateEmail(value)
              ? "success"
              : value.length > 0
              ? "error"
              : "default"
            : validatePassword(value)
            ? "success"
            : value.length > 0
            ? "error"
            : "default",
      }));
    });
  };

  const cleanUp = () => {
    setValidationState({
      email: "default",
      password: "default",
    });
  };

  const cleanUpRef = () => {
    if (email && email.current) email.current.value = "";
    if (password && password.current) password.current.value = "";
  };

  const resetValidation = () => {
    cleanUp();
    cleanUpRef();
  };

  return {
    validateEmail,
    validatePassword,
    validationState,
    handleValidationChange,
    resetValidation,
    isValid,
  };
};
