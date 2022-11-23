import { Response, Request, NextFunction } from 'express';

type ErrorMiddleware = { status: number; message: string };

const errorTracker = (
  error: ErrorMiddleware,
  req: Request,
  res: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  next: NextFunction
) => {
  res
    .status(error.status ? error.status : 500)
    .json({ message: error.message });
};

export default errorTracker;
