import { apiClient } from "@/lib/apiClient";

export async function getTracks() {
  try {
    return await apiClient("/components/stats", {
      method: "GET",
      skipJsonParse: true,
    });
  } catch (error) {
    console.warn("clickRangeAdapter tracking failed:", error);
  }
}
