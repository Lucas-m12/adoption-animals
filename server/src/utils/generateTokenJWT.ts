import jwt from 'jsonwebtoken';

interface Payload {
  id: string;
}

export default (payload: Payload) => {
  const secret = String(process.env.SECRET);

  const token = jwt.sign(payload, secret);

  return token;
}