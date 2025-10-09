import AuthForm from "./AuthForm";

interface AuthFormLayoutProps {
  register?: boolean;
}

const AuthFormLayout = ({ register }: AuthFormLayoutProps) => {
  return (
    <main className="auth-home flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl text-insigh-primary font-bold mb-2">Hello!</h1>
      <p className="text-xl mb-6 text-insigh-secondary">
        Welcome to Insight Design System
      </p>
      <AuthForm register={register} />
    </main>
  );
};

export default AuthFormLayout;
