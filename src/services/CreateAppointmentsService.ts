import AppointmentsRepository from "../repositorio/AppointmentsRepository";
import Appointment from "../models/Appointments";
import { startOfHour } from "date-fns";
import prisma from "../data/prisma";
import AppointmentModel from "../models/Appointments";

interface Request {
  provider: string;
  date: Date;
  where: string;
}

class CreateAppointmenService {
  private appointmentsRepository: AppointmentsRepository;
  constructor(appoitmentsRepository: AppointmentsRepository) {
    this.appointmentsRepository = appoitmentsRepository;
  }
  public async execute({
    date,
    provider,
    where,
  }: Request): Promise<Appointment> {
    const AppointmentDate = startOfHour(date);

    // const findAppotimentInSamDate = await prisma.appointment.findFirstOrThrow({
    //   where: { date: { equals: AppointmentDate } },
    // });

    const findAppotimentInSamDate =
      await this.appointmentsRepository.findByDate(AppointmentDate);

    if (findAppotimentInSamDate) {
      throw Error("This appontiment already booked ");
    }

    const appointment = await this.appointmentsRepository.create({
      provider,
      date: AppointmentDate,
      where,
    });
    return appointment;
  }
}
export default CreateAppointmenService;
