import { InsighCard } from "@insigh-design/insigh-components";

export default function Home() {
  return (
    <>
      <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen gap-5 ">
        <main className="flex flex-col  row-start-2 items-center sm:items-start m-4">
          <h1 className=" text-aurora">Insights Design System</h1>
          <h2 className="text-2xl font-semibold text-gray-700 mb-6">
            A React component library built with Tailwind CSS
          </h2>
          <div className="mt-2 grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
            <InsighCard className="w-full md:w-3/4">
              <InsighCard.Content>
                <InsighCard.Image>
                  <img src="./card.png" alt="Sample Image" />
                </InsighCard.Image>
                <InsighCard.Header title="Insights" />
                <InsighCard.Body>
                  <div className="w-full p-4">
                    <p>
                      Insights is a design system using React, Tailwind CSS and
                      Storybook.
                    </p>
                  </div>
                </InsighCard.Body>
              </InsighCard.Content>
            </InsighCard>

            <InsighCard className="w-full md:w-3/4">
              <InsighCard.Content>
                <InsighCard.Image>
                  <img src="./card-page.png" alt="Sample Image" />
                </InsighCard.Image>
                <InsighCard.Header title="Components" />
                <InsighCard.Body>
                  <div className="w-full p-4">
                    <p>
                      Components are reusable building blocks that can be used
                      in React projects.
                    </p>
                  </div>
                </InsighCard.Body>
              </InsighCard.Content>
            </InsighCard>

            <InsighCard className="w-full md:w-3/4">
              <InsighCard.Content>
                <InsighCard.Image>
                  <img src="./card-button.jpg" alt="Sample Image" />
                </InsighCard.Image>
                <InsighCard.Header title="Figma" />
                <InsighCard.Body>
                  <div className="w-full p-4">
                    <p>
                      Figma files are available for designers to use in their
                      projects.
                    </p>
                  </div>
                </InsighCard.Body>
              </InsighCard.Content>
            </InsighCard>
          </div>
        </main>
      </div>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <span>Created by Carlos Diaz</span>
      </footer>
    </>
  );
}
