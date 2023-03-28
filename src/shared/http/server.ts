import "dotenv/config";
import express from "express";
import "express-async-errors";
import { routes } from "./routes";
const app = express();
app.use(routes);

app.use(express.json());


app.listen(3000, () => {
  console.log(`Listen on port 3000...`);
});
