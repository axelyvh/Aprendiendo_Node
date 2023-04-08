import bodyParser from "body-parser";
import express from "express";
import routes from "./infrastructure/http/routes/index";

function boostrap() {

  const app = express();

  app.use(bodyParser.json());
  app.use("/api", routes);

  const port = 3000;

  app.listen(port, () => {
    console.log(`[APP] - Starting application on port ${port}`);
  });

}

boostrap();