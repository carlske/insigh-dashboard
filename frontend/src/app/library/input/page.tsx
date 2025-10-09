"use client";
import { cn } from "@insigh-shared/utils/cn";
import { useState } from "react";
import {
  InsighButton,
  InsighCard,
  InsighInput,
} from "@insigh-design/insigh-components";

export default function InputHome() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    comments: "",
  });

  const [validationState, setValidationState] = useState<{
    name: "default" | "error" | "success";
    email: "default" | "error" | "success";
    password: "default" | "error" | "success";
  }>({
    name: "default",
    email: "default",
    password: "default",
  });

  const handleInputChange = (field: keyof typeof formData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));

    // Auto-validation
    if (field === "name") {
      setValidationState((prev) => ({
        ...prev,
        name:
          value.length >= 3
            ? "success"
            : value.length > 0
            ? "error"
            : "default",
      }));
    }

    if (field === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      setValidationState((prev) => ({
        ...prev,
        email: emailRegex.test(value)
          ? "success"
          : value.length > 0
          ? "error"
          : "default",
      }));
    }

    if (field === "password") {
      setValidationState((prev) => ({
        ...prev,
        password:
          value.length >= 6
            ? "success"
            : value.length > 0
            ? "error"
            : "default",
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Form submitted successfully! Check console for data.");
  };

  return (
    <div>
      <main className="flex flex-col md:flex-row gap-8 p-8 flex-wrap sm:p-20 w-full">
        <InsighCard>
          <InsighCard.Content>
            <InsighCard.Header title="InsighInput Example" />
            <InsighCard.Body>
              <div className={cn("w-full max-w-3xl p-4")}>
                <div className=" mb-6">
                  <p className="font-medium text-gray-700">
                    InsighInput is used to capture user input in forms. It
                    supports multiple types, validation states, and
                    accessibility features.
                  </p>
                  <p>This is an example of a form with validation.</p>
                </div>

                <form
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-6 w-full max-w-md"
                >
                  <div className="flex flex-col gap-2">
                    <label htmlFor="input-name" className="font-medium text-sm">
                      Name
                    </label>
                    <InsighInput
                      identifier="input-name"
                      id="input-name"
                      type="text"
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={(e) =>
                        handleInputChange("name", e.target.value)
                      }
                      validationState={validationState.name}
                      helperText={
                        validationState.name === "error"
                          ? "Name must be at least 3 characters"
                          : validationState.name === "success"
                          ? "Looks good!"
                          : undefined
                      }
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="input-email"
                      className="font-medium text-sm"
                    >
                      Email
                    </label>
                    <InsighInput
                      identifier="input-email"
                      id="input-email"
                      type="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={(e) =>
                        handleInputChange("email", e.target.value)
                      }
                      validationState={validationState.email}
                      helperText={
                        validationState.email === "error"
                          ? "Please enter a valid email address"
                          : validationState.email === "success"
                          ? "Valid email!"
                          : undefined
                      }
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="input-password"
                      className="font-medium text-sm"
                    >
                      Password
                    </label>
                    <InsighInput
                      identifier="input-password"
                      id="input-password"
                      type="password"
                      placeholder="Enter your password"
                      value={formData.password}
                      onChange={(e) =>
                        handleInputChange("password", e.target.value)
                      }
                      validationState={validationState.password}
                      helperText={
                        validationState.password === "error"
                          ? "Password must be at least 6 characters"
                          : validationState.password === "success"
                          ? "Strong password!"
                          : undefined
                      }
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="input-comments"
                      className="font-medium text-sm"
                    >
                      Comments (Disabled)
                    </label>
                    <InsighInput
                      identifier="input-comments"
                      id="input-comments"
                      type="text"
                      placeholder="This field is disabled"
                      value={formData.comments}
                      disabled
                      helperText="This input is disabled and cannot be edited"
                    />
                  </div>

                  <InsighButton
                    variant="primary"
                    size="medium"
                    type="submit"
                    disabled={
                      validationState.name !== "success" ||
                      validationState.email !== "success" ||
                      validationState.password !== "success"
                    }
                  >
                    Submit Form
                  </InsighButton>
                </form>
              </div>
            </InsighCard.Body>
          </InsighCard.Content>
        </InsighCard>
      </main>
    </div>
  );
}
