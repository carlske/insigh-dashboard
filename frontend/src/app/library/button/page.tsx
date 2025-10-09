import { InsighButton, InsighCard } from "@insigh-design/insigh-components";

export default function ButtonHome() {
  return (
    <div>
      <main className="flex flex-col md:flex-row gap-8 p-8 flex-wrap sm:p-20 w-full">
        <InsighCard>
          <InsighCard.Content>
            <InsighCard.Header title="Buttons Primary" />
            <InsighCard.Body>
              <div className="p-4">
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
              </div>
            </InsighCard.Body>
          </InsighCard.Content>
        </InsighCard>

        <InsighCard>
          <InsighCard.Content>
            <InsighCard.Header title="Buttons Secondary" />
            <InsighCard.Body>
              <div className="p-4">
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

                  <InsighButton
                    variant="secondary"
                    icon="video"
                    size="stretched"
                  >
                    stretched
                  </InsighButton>

                  <InsighButton variant="secondary" size="medium" disabled>
                    disabled
                  </InsighButton>
                </div>
              </div>
            </InsighCard.Body>
          </InsighCard.Content>
        </InsighCard>

        <InsighCard>
          <InsighCard.Content>
            <InsighCard.Header title="Buttons danger" />
            <InsighCard.Body>
              <div className="p-4">
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
              </div>
            </InsighCard.Body>
          </InsighCard.Content>
        </InsighCard>

        <InsighCard>
          <InsighCard.Content>
            <InsighCard.Header title="Buttons Success" />
            <InsighCard.Body>
              <div className="p-4">
                <div className="mb-4">
                  <p className="font-medium">
                    Success buttons are used for positive actions.
                  </p>{" "}
                </div>

                <div className="flex flex-wrap gap-4 p-1">
                  <InsighButton variant="success" size="medium">
                    medium
                  </InsighButton>

                  <InsighButton variant="success" size="small">
                    small
                  </InsighButton>

                  <InsighButton variant="success" size="large">
                    large
                  </InsighButton>

                  <InsighButton variant="success" icon="video" size="stretched">
                    stretched
                  </InsighButton>

                  <InsighButton variant="success" size="medium" disabled>
                    disabled
                  </InsighButton>
                </div>
              </div>
            </InsighCard.Body>
          </InsighCard.Content>
        </InsighCard>
      </main>
    </div>
  );
}
