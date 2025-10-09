import { InsighButton } from "@insigh-design/insigh-components";
import { useFormStatus } from "react-dom";

interface AuthSubmitProps {
  register?: boolean;
}

const AuthSubmit = ({ register }: AuthSubmitProps) => {
  const { pending } = useFormStatus();

  return (
    <InsighButton
      type="submit"
      disabled={pending}
      isLoading={pending}
      variant="primary"
      icon="user"
      size="stretched"
    >
      {register ? "Register" : "Login"}
    </InsighButton>
  );
};

export default AuthSubmit;
