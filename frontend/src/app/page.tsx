import ChartContainer from "@/components/layout/ChartContainer";
import Dashboard from "@/components/layout/Dashboard";
import ChartSkeleton from "@/components/ui/ChartSkeleton";
import { Suspense } from "react";

export default function Home() {
  return (
    <>
      <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen gap-16 sm:p-20">
        <main className="flex flex-col  row-start-2 items-center sm:items-start">
          <Dashboard>
            <Suspense fallback={<ChartSkeleton />}>
              <ChartContainer />
            </Suspense>
          </Dashboard>
        </main>
      </div>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <span>Created by Carlos Diaz - Insigh 2024</span>
      </footer>
    </>
  );
}
