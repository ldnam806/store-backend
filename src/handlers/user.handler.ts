import { Request, Response, NextFunction } from 'express';
import UserModel from '../models/user.model';

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
