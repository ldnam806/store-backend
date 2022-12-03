import { Request, Response, NextFunction } from 'express';
import ProductModel from '../models/product.model';

const Create  = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const productModel = new ProductModel();
  const {name, price} = req.body
  try {
    const result = await productModel.Create({name,price});
    res.status(200).json({
      data: { ...result }
    });
  } catch (err) {
    next(err);
  }
};

const Index = async (_req: Request, res: Response, next: NextFunction) => {
  const productModel = new ProductModel();
  try {
    const result = await productModel.Index();
    res.status(200).json({
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const Show = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const productModel = new ProductModel();
  try {
    const { id } = req.params;
    const result = await productModel.Show(id);
    res.status(200).json({
      data: result,
    });
  } catch (err) {
    next(err);
  }
};


export {
  Create,
  Show,
  Index
}