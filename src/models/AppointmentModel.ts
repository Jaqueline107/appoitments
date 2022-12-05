import { uuid } from "uuidv4";
import UsersModel from "./usersModel";
class AppointmentModel {
  userId: number;

  provider: string;

  date: Date;

  where: string;

  constructor({ provider, date, where, userId }: AppointmentModel) {
    this.userId = userId;
    this.provider = provider;
    this.date = date;
    this.where = where;
  }
}

export default AppointmentModel;
