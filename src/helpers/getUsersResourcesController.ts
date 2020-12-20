import { UsersResourcesControllers } from '../controllers';
import { UsersResourceControllers } from '../typings';

export default <K extends UsersResourceControllers>(
  className: K,
): typeof UsersResourcesControllers[K] | null => {
  if (Object.keys(UsersResourcesControllers).includes(className))
    return UsersResourcesControllers[className];
  return null;
};
