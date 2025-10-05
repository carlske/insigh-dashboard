import InsighButton from "@/design-system/ui/insigh-components/InsighButton/InsighButton";
import InsighCard from "@/design-system/ui/insigh-components/InsighCard/InsighCard";

export default function ButtonHome() {
  return (
    <div>
      <main className="flex flex-col md:flex-row gap-8 p-8 flex-wrap sm:p-20 w-full">
        <InsighCard>
          <InsighCard.Image src="/card-button.jpg" alt="Buttons Primary" />
          <InsighCard.Header title="Buttons Primary" />
          <InsighCard.Body>
            <div className="mb-4">
              <p className="font-medium">
                Primary buttons are used for main actions.
              </p>{" "}
            </div>

            <div className="flex flex-wrap gap-4 p-1">
              <InsighButton variant="primary" size="medium">
                medium
              </InsighButton>

              <InsighButton variant="primary" size="small">
                small
              </InsighButton>

              <InsighButton variant="primary" size="large">
                large
              </InsighButton>
              <InsighButton variant="primary" icon="video" size="stretched">
                stretched
              </InsighButton>

              <InsighButton variant="primary" size="medium" disabled>
                disabled
              </InsighButton>
            </div>
          </InsighCard.Body>
        </InsighCard>

        <InsighCard>
          <InsighCard.Image src="/card-button.jpg" alt="Buttons Secondary" />
          <InsighCard.Header title="Buttons Secondary" />
          <InsighCard.Body>
            <div className="mb-4">
              <p className="font-medium">
                Secondary buttons are used for less important actions.
              </p>{" "}
            </div>

            <div className="flex flex-wrap gap-4 p-1">
              <InsighButton variant="secondary" size="medium">
                medium
              </InsighButton>

              <InsighButton variant="secondary" size="small">
                small
              </InsighButton>

              <InsighButton variant="secondary" size="large">
                large
              </InsighButton>

              <InsighButton variant="secondary" icon="video" size="stretched">
                stretched
              </InsighButton>

              <InsighButton variant="secondary" size="medium" disabled>
                disabled
              </InsighButton>
            </div>
          </InsighCard.Body>
        </InsighCard>

        <InsighCard>
          <InsighCard.Image src="/card-button.jpg" alt="Buttons danger" />
          <InsighCard.Header title="Buttons danger" />
          <InsighCard.Body>
            <div className="mb-4">
              <p className="font-medium">
                Danger buttons are used for destructive actions.
              </p>{" "}
            </div>

            <div className="flex flex-wrap gap-4 p-1">
              <InsighButton variant="danger" size="medium">
                medium
              </InsighButton>

              <InsighButton variant="danger" size="small">
                small
              </InsighButton>

              <InsighButton variant="danger" size="large">
                large
              </InsighButton>

              <InsighButton variant="danger" icon="video" size="stretched">
                stretched
              </InsighButton>

              <InsighButton variant="danger" size="medium" disabled>
                disabled
              </InsighButton>
            </div>
          </InsighCard.Body>
        </InsighCard>
      </main>
    </div>
  );
}
