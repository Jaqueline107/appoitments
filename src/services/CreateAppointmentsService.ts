import { startOfHour } from "date-fns";
import AppointmentsRepository from "../repository/appointmentsRepository";
import { Request, Response } from "express";

export default class CreateServiceAppointments {
  public async create(request: Request, response: Response): Promise<Response> {
    try {
      const { where, provider, date } = request.body;

      const appointmentsRepository = new AppointmentsRepository();

      const AppointmentDate = startOfHour(date);

      const findAppotimentInSameDate = await appointmentsRepository.findByDate(
        AppointmentDate
      );

      if (findAppotimentInSameDate) {
        throw Error("This appontiment already booked ");
      }

      appointmentsRepository.create({ date: AppointmentDate, provider, where });

      return response.json({ where, provider, date: AppointmentDate });
    } catch (err: any) {
      return response.status(400).json({ error: err.message });
    }
  }
}
