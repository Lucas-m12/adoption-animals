import { Request, Response } from 'express';

import AdoptionModel from '../models/AdoptionModel';

const index = async (req: Request, res: Response) => {

  try {
    const adoptions = await AdoptionModel.getAll();

    return res.json(adoptions);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }

}

const store = async (req: Request, res: Response) => {
  const { userId } = req;
  
  const {
    specie,
    birth,
    breed,
    color,
    gender,
    identification,
    name,
    size,
    image, 
  } = req.body;


  try {
    const adoption = await AdoptionModel.create({ 
      id_responsible: userId,
      specie,
      birth,
      breed,
      color,
      gender,
      identification,
      image: `http://localhost:3333/${image}`,
      name,
      size
    });

    return res.status(201).json(adoption);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }

}

export default { index, store }