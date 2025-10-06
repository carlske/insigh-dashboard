import { Suspense } from "react";
import Chart from "./Chart";
import ChartContainer from "./ChartContainer";

interface DashboardProps {
  children?: React.ReactNode;
}

const Dashboard = ({ children }: DashboardProps) => {
  return (
    <div className="p-3">
      <h1 className="text-4xl text-aurora">Insights Dashboard</h1>
      <p className="text-lg text-gray-700 p-3">
        This is the dashboard page. You can view your statistics and insights
        here.
      </p>
      {children}
    </div>
  );
};
export default Dashboard;
