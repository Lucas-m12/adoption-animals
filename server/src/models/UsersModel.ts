import db from '../database';

interface UserData {
  id: string;
  name: string;
  email: string;
  password: string;
  birth: string;
}

interface UserCreated {
  id: string;
  name: string;
  email: string;
  password: string;
  birth: string;
  status: number;
  created_at: string;
  updated_at: string;
}

const create = async (userData: UserData) => {

  const [user] = await db("users").insert(userData).returning("*");

  return user;

}

const get = async (optionsFilterUser: object) => {

  const user = await db<UserCreated>("users").select("*").where(optionsFilterUser).first();

  return user;

}

export default { create, get }