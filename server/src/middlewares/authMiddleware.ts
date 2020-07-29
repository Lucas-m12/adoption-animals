import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

interface TokenPayload {
    id: string;
    iat: number;
}

const AuthMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const { authorization } = req.headers;

  if (!authorization) return res.status(401).json({ error: 'No token provider' });

  const token = authorization.replace('Bearer', '').trim();

  try {
    const secretToken = String(process.env.SECRET);

    const data = jwt.verify(token, secretToken);

    const { id } = data as TokenPayload;

    req.userId = id;

    return next();
  } catch (error) {
    return res.status(401).json({ error });
  }
};

export default AuthMiddleware;
