import db from '../database';

interface AdoptionData {
  id_responsible: string;
  specie:string;
  birth?:string;
  breed?:string;
  color?:string;
  gender?:string;
  identification?:string;
  name?:string;
  size?:string;
  image?:string;
}

const create = async (adoptionData: AdoptionData) => {

  const [adoption] = await db('adoption').insert(adoptionData).returning('*');

  return adoption;

}

const getAll = async () => {

  const adoptions = await db('adoption').select('*').where({ status: 1 });

  return adoptions;

}

export default { create, getAll }