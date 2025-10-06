import { use } from "react";
import Chart from "./Chart";
import { getTracks } from "@/adapter/getTracks";
import { ApiResponseTracks } from "@/lib/type";

export default function ChartContainer() {
  const clicksTrack = use(getTracks()) as ApiResponseTracks;
  return (
    <div className="bg-amber-300- p-4">
      <Chart data={clicksTrack} />
    </div>
  );
}
