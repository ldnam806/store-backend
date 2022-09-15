import { Request, Response, NextFunction } from 'express';
import ProductModel from '../models/product.model';

const productModel = new ProductModel();

export const create = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const product = await productModel.create(req.body);
    res.json({
      status: 'success',
      data: { ...product },
      message: 'Product created successfully'
    });
  } catch (err) {
    next(err);
  }
};

export const getAll = async (_: Request, res: Response, next: NextFunction) => {
  try {
    const products = await productModel.getAll();
    res.json({
      status: 'success',
      data: products,
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
    const product = await productModel.getById(id as string);
    res.json({
      status: 'success',
      data: product,
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
    const product = await productModel.updateById(req.body);
    res.json({
      status: 'success',
      data: product,
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
    const product = await productModel.delete(
      req.params.id as unknown as string
    );
    res.json({
      status: 'success',
      data: product,
      message: 'Successfully'
    });
  } catch (err) {
    next(err);
  }
};
