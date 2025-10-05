import InsighButton from "@/design-system/ui/insigh-components/InsighButton/InsighButton";
import InsighCard from "@/design-system/ui/insigh-components/InsighCard/InsighCard";
import InsighInput from "@/design-system/ui/insigh-components/InsighInput/InsighInput";

export default function Home() {
  return (
    <>
      <InsighButton variant="primary">me</InsighButton>

      <InsighButton variant="primary" size="small">
        Buttons
      </InsighButton>
      <InsighButton variant="primary" size="medium">
        medium
      </InsighButton>
      <InsighButton variant="primary" size="large">
        large
      </InsighButton>
      <InsighButton variant="primary" icon="video" size="stretched">
        stretched
      </InsighButton>
      <InsighButton variant="primary" size="small">
        small
      </InsighButton>
      <InsighButton variant="primary" size="medium">
        medium
      </InsighButton>
      <InsighButton variant="primary" size="medium" disabled>
        medium
      </InsighButton>

      <InsighButton variant="secondary" size="small">
        small
      </InsighButton>
      <InsighButton variant="secondary" size="medium">
        medium
      </InsighButton>
      <InsighButton variant="secondary" size="large">
        large
      </InsighButton>
      <InsighButton variant="secondary" icon="video" size="stretched">
        stretched
      </InsighButton>
      <InsighButton variant="secondary" size="small">
        small
      </InsighButton>
      <InsighButton variant="secondary" size="medium">
        medium
      </InsighButton>

      <InsighButton variant="secondary" size="medium" disabled>
        disabled
      </InsighButton>

      <InsighInput
        identifier="example"
        type="email"
        validationState="success"
      />

      <InsighCard>
        <InsighCard.Image src="/card.png" alt="Insigh Logo" />
        <InsighCard.Header title="Header" />
        <InsighCard.Body>Body</InsighCard.Body>
        <InsighCard.Footer text="Footer" />
      </InsighCard>

      <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
        <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start"></main>
        <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center"></footer>
      </div>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <span>Created by Carlos Diaz - Insigh 2024</span>
      </footer>
    </>
  );
}
