"use client";
import { clickRangeAdapter } from "@/adapter/clickRange";
import { InsighButton } from "@insigh-design/insigh-components";
import { useApi } from "@/hooks/useApi";
import { useRouter } from "next/navigation";

const CloseSection = () => {
  const { data, error, loading, request } = useApi<any>();

  const router = useRouter();

  const handleCloseSection = async () => {
    clickRangeAdapter({
      component: "CloseSection",
      variant: "secondary",
      action: "close-section",
    });

    try {
      const response = await request("/auth/logout", {
        method: "POST",
        body: JSON.stringify({}),
      });

      if (response?.success) {
        router.push("/");
      }
    } catch (error) {
      console.error("Error closing section:", error);
    }
  };

  return (
    <div className="h-px w-full bg-gray-300 my-4">
      <InsighButton
        onClick={handleCloseSection}
        icon="door-closed"
        variant="secondary"
        size="stretched"
      >
        Close Section
      </InsighButton>
    </div>
  );
};

export default CloseSection;
