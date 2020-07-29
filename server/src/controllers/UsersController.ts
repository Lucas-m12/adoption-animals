import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import { v4 } from 'uuid'

import generateTokenJWT from '../utils/generateTokenJWT';

import UsersModel from '../models/UsersModel'


const store = async (req: Request, res: Response) => {

  const { email, password, name, birth } = req.body;


  try {
    const user = await UsersModel.get({ email });

    if (user) return res.status(400).json({ error: 'User already exists' });

    const id = v4();

    const passwordHash = await bcrypt.hash(password, 8);

    const userCreated = await UsersModel.create({
      id,
      email, 
      birth, 
      name, 
      password: passwordHash 
    });

    delete userCreated.password;

    const token = generateTokenJWT({ id });

    return res.status(201).json({ user: userCreated, token });

  } catch (error) {
    return res.status(500).json({ error: error.message });
  }

}

export default { store }