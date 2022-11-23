import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

type Error = {
  status?: number;
  name?: string;
  message?: string;
  stack?: string;
};

const handleUnauthorized = (next: NextFunction) => {
  const error: Error = new Error('Please login again');
  error.status = 401;
  next(error);
};

const checkToken = (req: Request, _res: Response, next: NextFunction) => {
  try {
    const authHeader = req.get('Authorization');
    if (authHeader) {
      const bearer = authHeader.split(' ')[0].toLowerCase();
      const token = authHeader.split(' ')[1];
      if (token && bearer === 'bearer') {
        const decode = jwt.verify(
          token,
          process.env.TOKEN_SECRET_KEY as string
        );
        if (decode) {
          next();
        } else {
          handleUnauthorized(next);
        }
      } else {
        // token type not bearer
        handleUnauthorized(next);
      }
    } else {
      // No Token Provided.
      handleUnauthorized(next);
    }
  } catch (err) {
    handleUnauthorized(next);
  }
};

export default checkToken;
