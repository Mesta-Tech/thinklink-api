import getUserResourceControllerName from '../../helpers/getUserResourceControllerName';
import getUsersResourcesController from '../../helpers/getUsersResourcesController';
import ClassNotFoundException from '../../exceptions/ClassNotFoundException';
import { RequestHandlerT, ResourceTypes, UsersResourcesRequest } from '../../typings';
import uuidValidate from '../../helpers/uuidValidate';
type RequestType = UsersResourcesRequest;
export const EditMapper: RequestHandlerT<RequestType & { type: ResourceTypes }> = (
  req,
  res,
  next,
) => {
  const type = req.body.type;

  const className = getUserResourceControllerName(type);

  const Controller = getUsersResourcesController(className);

  if (Controller) {
    //
    try {
      uuidValidate(res.locals.userId);
      uuidValidate(req.body.resourceId);
      Controller.edit(req, res, next);
    } catch (error) {
      next(error);
    }
    //
  } else {
    //
    next(new ClassNotFoundException());
    //
  }
};
