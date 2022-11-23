import { Request, Response, NextFunction } from 'express';
import OrderModel from '../models/order.model';

const Create = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const orderModel = new OrderModel();
  try {
    const result = await orderModel.Create(req.body);
    res.status(200).json({
      data: result
    });
  } catch (err) {
    next(err);
  }
};

 const Index = async (_: Request, res: Response, next: NextFunction) => {
  const orderModel = new OrderModel();
  try {
    const result = await orderModel.Index();
    res.status(200).json({
      data: result
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
  const orderModel = new OrderModel();
  try {
    const { id } = req.params;
    const result = await orderModel.Show(id);
    res.status(200).json({
      data: result
    });
  } catch (err) {
    next(err);
  }
};

export { Create, Show, Index };