import { getTracks } from "@/adapter/getTracks";
import { use } from "react";

const Chart = () => {
  const data = use(getTracks());

  return (
    <div className="bg-insigh-accent-foreground">
      <p>Chart Component</p>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default Chart;
