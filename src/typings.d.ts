import { NextFunction, Request, Response, RequestHandler } from 'express';
import Controllers, { ResourceControllers } from './controllers';
import UsersResourcesControllers from './controllers/UsersResourcesControllers';
import Resources from './entities/Resources';
import { User } from './entities/User';

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

type MyResponse<ResBody = unknown> = Omit<Response<ResBody>, 'locals'> & {
  locals: {
    user: User;
    userId: string;
  };
};
type RequestHandlerT<RB = unknown, RP = unknown, RQ = unknown> = (
  req: Request<RP, unknown, RB, RQ>,
  res: MyResponse<unknown>,
  next: NextFunction,
) => void;

interface IResourceController<
  ResourceType = unknown,
  ApproveRequestBody = { resourceId: string },
  CreateRequestBody = ResourceType,
  EditRequestBody = ResourceType,
  RemoveRequestBody = { resourceId: string },
  GetRequestBody = { resourceId: string; searchTerm: string }
> {
  create: RequestHandlerT<Partial<CreateRequestBody>>;
  edit: RequestHandlerT<Partial<EditRequestBody>>;
  remove: RequestHandlerT<RemoveRequestBody>;
  approve: RequestHandlerT<ApproveRequestBody>;
  deny: RequestHandlerT<ApproveRequestBody>;
  get: RequestHandlerT<GetRequestBody>;
}

type ControllerName = keyof typeof Controllers;
type ResourceControllerName = keyof typeof ResourceControllers;
type UsersResourceControllers = keyof typeof UsersResourcesControllers;
type ResourceTypes = 'book' | 'movie' | 'music';

type UsersResourcesRequest = { resourceId: string; isFavorite: boolean };

type ControllerType<K extends ControllerName> = typeof Controllers[K];

type ModelName = keyof typeof Resources;
type ModelType<K extends ModelName> = typeof Resources[K];
