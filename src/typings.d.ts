import { NextFunction, Request, Response } from 'express';

type RequestHandler<RB = unknown, RP = unknown> = (
  req: Request<RP, unknown, RB>,
  res: Response,
  next: NextFunction,
) => void;
