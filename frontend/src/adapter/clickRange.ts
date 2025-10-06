import { apiClient } from "@/lib/apiClient";

export interface ClickRange {
  component: string;
  variant: string;
  action: string;
}

export async function clickRangeAdapter(clickRange: ClickRange) {
  try {
    await apiClient("/components/track", {
      method: "POST",
      body: JSON.stringify(clickRange),
      skipJsonParse: true,
    });
  } catch (error) {
    console.warn("clickRangeAdapter tracking failed:", error);
  }
}
