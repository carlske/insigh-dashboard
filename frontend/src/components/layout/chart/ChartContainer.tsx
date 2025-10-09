import { use } from "react";
import Chart from "./Chart";
import { getTracks } from "@/adapter/getTracks";
import { ApiResponseTracks } from "@/lib/type";
import ChartSkeleton from "@/components/ui/ChartSkeleton";

export default function ChartContainer() {
  const clicksTrack = use(getTracks()) as ApiResponseTracks | null;

  return <>{clicksTrack ? <Chart data={clicksTrack} /> : <ChartSkeleton />}</>;
}
