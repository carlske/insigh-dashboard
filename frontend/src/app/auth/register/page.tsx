import AuthFormLayout from "@/components/layout/auth/AuthFormLayout";

export default function RegisterHome() {
  return (
    <main className="auth-home flex flex-col items-center justify-center min-h-screen">
      <AuthFormLayout register />
    </main>
  );
}
