import AppointmentModel from "../models/appointmentModel";
import {
  PrismaClient,
  Appointment as AppointmentEntity,
  Prisma,
} from "@prisma/client";
import prisma from "../data/prisma";
import { isEqual } from "date-fns";

import appointmentsRouter from "../routes/appointments.routes";

interface createAppointmenDTO {
  provider: string;
  date: Date;
  where: string;
}

class AppointmentsRepository {
  private appointments: AppointmentEntity[] = [];
  private prisma: PrismaClient;
  constructor() {
    this.prisma = new PrismaClient();
  }

  public async all() {
    const findMany = await this.prisma.appointment.findMany();

    return findMany;
  }

  public async findByDate(date: Date): Promise<AppointmentEntity | null> {
    const findAppointment = await this.prisma.appointment.findFirst({
      where: { date: { equals: date } },
    });

    return findAppointment;
  }

  public async create({
    provider,
    date,
    where,
  }: createAppointmenDTO): Promise<AppointmentModel> {
    const appointment = new AppointmentModel({ provider, date, where });

    await prisma.appointment.create({ data: appointment });
    console.log(appointment);
    return appointment;
  }
}

export default AppointmentsRepository;
