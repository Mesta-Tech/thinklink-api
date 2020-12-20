import Controllers from '../controllers';
import { ControllerName } from '../typings';

export default <K extends ControllerName>(className: K): typeof Controllers[K] | null => {
  if (Object.keys(Controllers).includes(className)) return Controllers[className];
  return null;
};
