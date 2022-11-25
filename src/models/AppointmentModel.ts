import { uuid } from "uuidv4";
import UsersModel from "./usersModel";
class AppointmentModel {
  id: string;

  provider: string;

  date: Date;

  where: string;

  constructor({ provider, date, where }: Omit<AppointmentModel, "id">) {
    this.id = uuid();
    this.provider = provider;
    this.date = date;
    this.where = where;
  }
}

export default AppointmentModel;
