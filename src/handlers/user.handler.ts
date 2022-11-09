import { Request, Response, NextFunction } from 'express';
import UserModel from '../models/user.model';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const userModel = new UserModel();

export const create = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = await userModel.create(req.body);
    res.json({
      status: 'success',
      data: { ...user },
      message: 'Product created successfully'
    });
  } catch (err) {
    next(err);
  }
};

export const getAll = async (_: Request, res: Response, next: NextFunction) => {
  try {
    const users = await userModel.getAll();
    res.json({
      status: 'success',
      data: users,
      message: 'Successfully'
    });
  } catch (err) {
    next(err);
  }
};

export const getById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const user = await userModel.getById(id as string);
    res.json({
      status: 'success',
      data: user,
      message: 'Successfully'
    });
  } catch (err) {
    next(err);
  }
};

export const updateById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = await userModel.updateById(req.body);
    res.json({
      status: 'success',
      data: user,
      message: 'Successfully'
    });
  } catch (err) {
    next(err);
  }
};

export const deleteById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = await userModel.delete(req.params.id as unknown as string);
    res.json({
      status: 'success',
      data: user,
      message: 'Successfully'
    });
  } catch (err) {
    next(err);
  }
};
export const authenticate = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.authenticate(email, password);
    const token = jwt.sign(
      { user },
      process.env.TOKEN_SECRET_KEY as unknown as string,
      {
        expiresIn: '60s'
      }
    );
    if (!user) {
      return res.status(401).json({
        status: 'error',
        message: 'the email and password do not match please try again'
      });
    }
    return res.json({
      status: 'success',
      data: { ...user, token },
      message: 'user authenticated successfully'
    });
  } catch (err) {
    return next(err);
  }
};
