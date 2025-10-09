import { get } from "@/lib/http";
import { ApiResponseTracks } from "@/lib/type";

export async function getTracks(): Promise<ApiResponseTracks | null> {
  try {
    const response = await get("/components/stats", {
      headers: { "Content-Type": "application/json" },
    });
    return await response;
  } catch (error) {
    console.warn("clickRangeAdapter tracking failed:", { cause: error });
    return null;
  }
}
