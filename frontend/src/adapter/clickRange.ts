import { post } from "@/lib/http";

export interface ClickRange {
  component: string;
  variant: string;
  action: string;
}

export async function clickRangeAdapter(clickRange: ClickRange) {
  try {
    await post("/components/track", {
      body: JSON.stringify(clickRange),
      skipJsonParse: true,
    });
  } catch (error) {
    console.warn("clickRangeAdapter tracking failed:", error);
  }
}
