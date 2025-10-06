import { apiClient } from "@/lib/apiClient";

export async function getTracks() {
  try {
    const response = await apiClient("/components/stats", {
      method: "GET",
      skipJsonParse: false,
    });
    return await response;
  } catch (error) {
    console.warn("clickRangeAdapter tracking failed:", error);
  }
}
