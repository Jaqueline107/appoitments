import { uuid } from "uuidv4";

class UsersModel {
  userId: number;

  name: string;

  email: string;

  password: string;

  create_at!: Date;

  update_at!: Date;

  constructor({
    userId,
    name,
    email,
    password,
    create_at,
    update_at,
  }: UsersModel) {
    this.userId = userId;
    this.name = name;
    this.email = email;
    this.password = password;
    this.create_at = create_at;
    this.update_at = update_at;
  }
}

export default UsersModel;
