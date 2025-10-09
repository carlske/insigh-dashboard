import { InsighButton, InsighCard } from "@insigh-design/insigh-components";

export default function ButtonHome() {
  return (
    <div>
      <main className="flex flex-col md:flex-row gap-8 p-8 flex-wrap sm:p-20 w-full">
        <InsighCard>
          <InsighCard.Body>
            <div className="mb-4">
              <p className="font-medium">
                This is an example of card component used to display only
                content.
              </p>
              <div className="mt-2">
                <InsighButton variant="secondary" size="medium">
                  medium
                </InsighButton>
              </div>
            </div>
          </InsighCard.Body>
        </InsighCard>

        <InsighCard border borderStyle="dashed">
          <InsighCard.Body>
            <div className="mb-4">
              <p className="font-medium">
                This is an example of card component used to display only
                content.
              </p>
              <div className="mt-2">
                <InsighButton variant="secondary" size="medium">
                  medium
                </InsighButton>
              </div>
            </div>
          </InsighCard.Body>
        </InsighCard>

        <InsighCard border borderStyle="dotted">
          <InsighCard.Body>
            <div className="mb-4">
              <p className="font-medium">
                This is an example of card component used to display only
                content.
              </p>
              <div className="mt-2">
                <InsighButton variant="secondary" size="medium">
                  medium
                </InsighButton>
              </div>
            </div>
          </InsighCard.Body>
        </InsighCard>

        <InsighCard border borderStyle="solid">
          <InsighCard.Body>
            <div className="mb-4">
              <p className="font-medium">
                This is an example of card component used to display only
                content.
              </p>
              <div className="mt-2">
                <InsighButton variant="secondary" size="medium">
                  medium
                </InsighButton>
              </div>
            </div>
          </InsighCard.Body>
        </InsighCard>

        <InsighCard>
          <InsighCard.Header title="Buttons Primary" />
          <InsighCard.Body>
            <div className="mb-4">
              <p className="font-medium">
                This is an example of card component used to display content in
                a concise and organized manner.
              </p>
              <div className="mt-2">
                <InsighButton variant="secondary" size="medium">
                  medium
                </InsighButton>
              </div>
            </div>
          </InsighCard.Body>
          <InsighCard.Footer text="#card-primary #buttons #primary #carlosv" />
        </InsighCard>
      </main>
    </div>
  );
}
