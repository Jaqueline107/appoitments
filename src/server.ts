import appointmentsRouter from "./routes/appointments.routes";
import express, { request } from "express";
import "./data/prisma";
const app = express();

app.get("/", (request, response) => {
  return response.json({
    menssage: "Hello World",
  });
});
app.use(express.json());
app.use("/appointments", appointmentsRouter);
app.listen(3333, () => {
  console.log("server started in port 3333 ");
});
