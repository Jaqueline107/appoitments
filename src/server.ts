import "./data/prisma";
import express from "express";
import routes from "./routes";

const app = express();

app.use(express.json());

app.use(routes);

app.listen(3333, async () => {
  console.log("server started in port 3333 ");
});
