import { createApp } from "./app";
import { env } from "./config/env";

createApp()
  .then((app) => {
    const port = Number(env.PORT) || 4000;
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  })
  .catch((err) => {
    console.error("Failed to start app", err);
  });
