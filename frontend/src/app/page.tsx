import InsighButton from "@/design-system/ui/insigh-components/InsighButton/InsighButton";
import InsighInput from "@/design-system/ui/insigh-components/InsighInput/InsighInput";
import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <InsighButton>me</InsighButton>

        <InsighButton>me</InsighButton>
        <InsighButton>me</InsighButton>
        <InsighButton>me</InsighButton>
        <InsighButton>me</InsighButton>
        <InsighButton>me</InsighButton>
        <InsighButton>me</InsighButton>

        <InsighInput
          identifier="example"
          type="email"
          error={false}
          valid={true}
        />
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center"></footer>
    </div>
  );
}
