import { NextFunction, Request, Response } from 'express';

type RequestHandler<RB = unknown, RP = unknown> = (
  req: Request<RP, unknown, RB>,
  res: Response,
  next: NextFunction,
) => void;

interface IResourceController<
  ResourceType = unknown,
  ApproveRequestBody = { resourceId: string },
  CreateRequestBody = ResourceType,
  EditRequestBody = ResourceType,
  RemoveRequestBody = { resourceId: string }
> {
  create: RequestHandler<Partial<CreateRequestBody>>;
  edit: RequestHandler<Partial<EditRequestBody>>;
  remove: RequestHandler<RemoveRequestBody>;
  approve: RequestHandler<ApproveRequestBody>;
}
