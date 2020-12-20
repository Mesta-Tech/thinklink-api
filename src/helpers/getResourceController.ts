import { ResourceControllers } from '../controllers';
import { ResourceControllerName } from '../typings';

export default <K extends ResourceControllerName>(
  className: K,
): typeof ResourceControllers[K] | null => {
  if (Object.keys(ResourceControllers).includes(className)) return ResourceControllers[className];
  return null;
};
