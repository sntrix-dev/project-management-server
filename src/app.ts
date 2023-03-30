import express from "express";
import bodyParser from "body-parser";
import { routes } from "./routes";

const app = express();
const port = 5000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

routes(app);

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
