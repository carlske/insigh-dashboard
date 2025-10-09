"use client"; // Importante: añade esto al inicio del archivo

import { InsighInput } from "@insigh-design/insigh-components";
import AuthSubmit from "./AuthSubmit";
import { RefObject, useRef, useState } from "react";
import { useFormValidation } from "@/hooks/useFormValidation";
import { useRouter } from "next/navigation";
import { post } from "@/lib/http";
import { loginAdapter, registerAdapter } from "@/adapter/auth";

interface AuthFormProps {
  register?: boolean;
}

const AuthForm = ({ register }: AuthFormProps) => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const [error, setError] = useState<boolean>(false);
  const router = useRouter();

  const { validationState, handleValidationChange, resetValidation } =
    useFormValidation(
      passwordRef as RefObject<HTMLInputElement>,
      emailRef as RefObject<HTMLInputElement>
    );

  const handleSubmit = async () => {
    setError(false);

    if (!emailRef.current?.value || !passwordRef.current?.value) {
      setError(true);
      return;
    }

    const formData = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };

    if (register) {
      registerAdapter(formData)
        .then(() => {
          router.push("/auth/login");
        })
        .catch((err) => {
          console.error("Registration error:", err);
          setError(true);
        });
    }

    if (!register) {
      loginAdapter(formData)
        .then(() => {
          router.push("/dashboard");
        })
        .catch((err) => {
          console.error("Login error:", err);
          setError(true);
        });
    }
  };

  const handleInputEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleValidationChange(e, "email");
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleValidationChange(e, "password");
  };

  return (
    <form className="space-y-4" action={handleSubmit}>
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
      />

      <div className="mt-4 text-center">
        <a
          href={register ? "/auth/login" : "/auth/register"}
          className="text-insigh-primary font-medium hover:underline"
        >
          {register
            ? "Already have an account? Login here"
            : "Don't have an account? Register here"}
        </a>
      </div>

      <AuthSubmit register={register} />

      {error && (
        <div className="mt-4 p-4 bg-red-100 border border-red-200 text-red-800 rounded">
          <h3 className="text-lg font-medium mb-2">Error!</h3>
          <p className="mb-2">
            {register
              ? "Registration failed. Please try again."
              : "Login failed. Please try again."}
          </p>
        </div>
      )}
    </form>
  );
};

export default AuthForm;
