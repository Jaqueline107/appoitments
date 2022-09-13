import { Router } from "express";
import { parseISO } from "date-fns";
import AppointmentsRepository from "../repositorio/AppointmentsRepository";
import CreateAppointmenService from "../services/CreateAppointmentsService";
import prisma from "../data/prisma";

const appointmentsRouter = Router();

const appointmentsRepository = new AppointmentsRepository();

appointmentsRouter.get("/", async (resquest, response) => {
  const appointments = await appointmentsRepository.all();
  return response.json(appointments);
  // response.send("Hello");
});

appointmentsRouter.post("/", async (resquest, response) => {
  try {
    const { provider, date, where } = resquest.body;

    const ParseDate = parseISO(date);

    const createAppointmen = new CreateAppointmenService(
      appointmentsRepository
    );
    const appointment = await createAppointmen.execute({
      date: ParseDate,
      provider,
      where,
    });

    return response.json(appointment);
  } catch (Error) {
    return response.status(400).json({ message: "this appointment is boked" });
  }
});

export default appointmentsRouter;
