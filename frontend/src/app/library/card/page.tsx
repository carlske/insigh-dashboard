import { InsighButton, InsighCard } from "@insigh-design/insigh-components";

export default function ButtonHome() {
  return (
    <div>
      <main className="flex flex-col md:flex-row gap-8 p-8 flex-wrap sm:p-20 w-full">
        <InsighCard className="w-1/4">
          <InsighCard.Content>
            <InsighCard.Image>
              <img src="../card-button.jpg" alt="Sample Image" />
            </InsighCard.Image>
            <InsighCard.Header title="Card without Header" />
            <InsighCard.Body>
              <div className="p-2">
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
          </InsighCard.Content>
        </InsighCard>

        <InsighCard borderStyle="dashed" className="w-1/4">
          <InsighCard.Content>
            <InsighCard.Image>
              <img src="../card-button.jpg" alt="Sample Image" />
            </InsighCard.Image>
            <InsighCard.Header title="Card with Header" />
            <InsighCard.Body>
              <div className="flex justify-between items-center flex-col p-2 ">
                <p className="font-medium">
                  This is an example of card component used to display only
                  content.
                </p>
                <div className="p-2">
                  <InsighButton variant="secondary" size="medium">
                    medium
                  </InsighButton>
                </div>
              </div>
            </InsighCard.Body>
            <InsighCard.Footer>
              <p className="text-sm text-gray-500">
                This is an example of card component used to display footer
                content.
              </p>
            </InsighCard.Footer>
          </InsighCard.Content>
        </InsighCard>
      </main>
    </div>
  );
}
