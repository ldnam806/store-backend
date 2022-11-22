import { Request, Response, NextFunction } from 'express';
import UserModel from '../models/user.model';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const Create = async (req: Request, res: Response, next: NextFunction) => {
  const userModel = new UserModel();
  try {
    const { email, firstName, lastName, password } = req.body;
    const result = await userModel.Create({
      email,
      firstName,
      lastName,
      password
    });
    res.status(200).json({
      data: result
    });
  } catch (err) {
    next(err);
  }
};

const Index = async (_: Request, res: Response, next: NextFunction) => {
  const userModel = new UserModel();
  try {
    const result = await userModel.Index();
    res.status(200).json({
      data: result
    });
  } catch (err) {
    next(err);
  }
};

const Show = async (req: Request, res: Response, next: NextFunction) => {
  const userModel = new UserModel();
  try {
    const { id } = req.params;
    const result = await userModel.Show(id);
    res.status(200).json({
      data: result
    });
  } catch (err) {
    next(err);
  }
};

const Auth = async (req: Request, res: Response, next: NextFunction) => {
  const userModel = new UserModel();
  try {
    const { email, password } = req.body;
    const isCorrectInfo = await userModel.Auth(email, password);
    if (!isCorrectInfo) {
      return res.status(401).json({
        message: 'Your email or password incorrect.'
      });
    }
    const token = jwt.sign(
      { isCorrectInfo },
      process.env.TOKEN_SECRET_KEY as unknown as string,
      {
        expiresIn: '3600s'
      }
    );
    return res.status(200).json({
      data: { ...isCorrectInfo, token }
    });
  } catch (err) {
    return next(err);
  }
};

export { Create, Show, Index, Auth };
