import jwt from 'jsonwebtoken';
import { Response, Request, NextFunction } from 'express';
import dotenv from 'dotenv';
dotenv.config();
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function verifyToken(req: Request | any, res: Response, next: NextFunction) {
  const token = req.header('auth-token');
  if (!token) return res.status(401).send('Access denied');
  try {
    const verified = jwt.verify(token, process.env.TOKEN_SECRET_KEY as string);
    console.log({ verified });
    req.user = verified;
    next();
  } catch (error) {
    res.status(400).send('Token is invalid');
  }
}

export default verifyToken;
