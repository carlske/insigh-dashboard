import AuthForm from "@/components/layout/container/AuthForm";

export default function AuthHome() {
  return (
    <main className="auth-home flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl text-insigh-primary font-bold mb-2">Hello!</h1>
      <p className="text-xl mb-6 text-insigh-secondary">
        Welcome to Insight Design System
      </p>
      <AuthForm />
    </main>
  );
}
