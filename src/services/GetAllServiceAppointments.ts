import { Request, Response } from "express";

import AppointmentsRepository from "../repository/appointmentsRepository";

export default class AppointmentController {
  public async getAll(request: Request, response: Response): Promise<Response> {
    const appointmentsRepository = new AppointmentsRepository();

    const findMany = await appointmentsRepository.all();

    return response.json(findMany);
  }
}
