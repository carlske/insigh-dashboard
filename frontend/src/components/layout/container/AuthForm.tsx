"use client";
import { ChangeEvent, RefObject, useEffect, useRef, useState } from "react";
import { Link as LinkIcon } from "lucide-react";
import InsighButton from "@/design-system/ui/insigh-components/InsighButton/InsighButton";
import InsighInput from "@/design-system/ui/insigh-components/InsighInput/InsighInput";
import { useApi } from "@/hooks/useApi";
import { useFormValidation } from "@/hooks/useFormValidation";
import { ErrorCase } from "@/components/ui/ErrorCase";
import {
  ApiResponseLogin,
  ApiResponseResgister,
  FormInformation,
} from "@/lib/type";

interface AuthFormProps {
  register?: boolean;
}

const AuthForm = ({ register = false }: AuthFormProps) => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const { data, error, loading, request } = useApi<
    ApiResponseResgister | ApiResponseLogin
  >();
  const [isErrorModalOpen, setIsErrorModalOpen] = useState(false);
  const {
    isValid,
    validateEmail,
    validatePassword,
    validationState,
    setValidationState,
  } = useFormValidation(
    passwordRef as RefObject<HTMLInputElement>,
    emailRef as RefObject<HTMLInputElement>
  );

  useEffect(() => {
    if (error) {
      setIsErrorModalOpen(true);
    }
  }, [error]);

  const loginAction = async ({ email, password }: FormInformation) => {
    await request("/auth/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
    });
  };

  const registerAction = async ({ email, password }: FormInformation) => {
    await request("/auth/register", {
      method: "POST",
      body: JSON.stringify({ email, password }),
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValid()) {
      return;
    }
    const email = emailRef.current?.value || "";
    const password = passwordRef.current?.value || "";

    if (register) {
      await registerAction({ email, password });
    } else {
      await loginAction({ email, password });
    }
  };

  const handleInputEmail = (e: ChangeEvent<HTMLInputElement>) => {
    const isEmailValid = validateEmail(e.target.value);
    setValidationState((prev) => ({
      ...prev,
      email: isEmailValid ? "success" : "error",
    }));
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    const isPasswordValid = validatePassword(e.target.value);
    setValidationState((prev) => ({
      ...prev,
      password: isPasswordValid ? "success" : "error",
    }));
  };

  return (
    <div className="auth-form bg-white p-8 rounded shadow-md w-full max-w-md">
      <h2 className="text-2xl font-bold mb-6 text-center">
        {register ? "Register" : "Login"}
      </h2>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <InsighInput
          identifier="input-email"
          id="email"
          placeholder="Enter your email"
          label="Email"
          type="email"
          required
          onChange={handleInputEmail}
          validationState={validationState.email}
          helperText={
            validationState.email === "error"
              ? "Email must be a valid email address"
              : validationState.email === "success"
              ? "Looks good!"
              : undefined
          }
          ref={emailRef}
          disabled={loading}
        />

        <InsighInput
          identifier="input-password"
          id="password"
          placeholder="Enter your password"
          label="Password"
          type="password"
          onChange={handlePasswordChange}
          validationState={validationState.password}
          helperText={
            validationState.password === "error"
              ? "Password must be at least 6 characters long"
              : validationState.password === "success"
              ? "Looks good!"
              : undefined
          }
          required
          ref={passwordRef}
          disabled={loading}
        />

        <InsighButton
          type="submit"
          variant="primary"
          icon="activity"
          size="stretched"
          disabled={loading}
        >
          {loading ? "Processing..." : register ? "Register" : "Login"}
        </InsighButton>
      </form>

      <div className="mt-4 text-center">
        <a
          href={register ? "/auth" : "/auth/register"}
          className="text-insigh-primary font-medium hover:underline"
        >
          {register
            ? "Already have an account? Login here"
            : "Don't have an account? Register here"}
        </a>
      </div>

      {error && (
        <ErrorCase
          isOpen={isErrorModalOpen}
          onClose={() => setIsErrorModalOpen(false)}
        />
      )}

      {!error && data && (
        <div className="mt-4 p-4 bg-green-100 border border-green-200 text-green-800 rounded">
          <h3 className="text-lg font-medium mb-2">Success!</h3>
          <p className="mb-2">
            {register
              ? "Registration successful. You can now log in."
              : "Login successful. Welcome back!"}
          </p>
          <div className="flex items-center space-x-2">
            <LinkIcon className="text-green-600" size={16} />
            <span className="text-sm">Redirecting...</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default AuthForm;
