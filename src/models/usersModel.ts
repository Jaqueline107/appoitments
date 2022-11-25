import { uuid } from "uuidv4";

class UsersModel {
  id: string;

  name: string;

  email: string;

  password: string;

  create_at!: Date;

  update_at!: Date;

  constructor({
    name,
    email,
    password,
    create_at,
    update_at,
  }: Omit<UsersModel, "id">) {
    this.id = uuid();
    this.name = name;
    this.email = email;
    this.password = password;
    this.create_at = this.create_at;
    this.update_at = this.update_at;
  }
}

export default UsersModel;
