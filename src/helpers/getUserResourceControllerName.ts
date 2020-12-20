import { UsersResourceControllers } from '../typings';

/**
 * makes it lower case and capitalizes first letter
 * @param string
 */
export default function getUserResourceControllerName(string: string): UsersResourceControllers {
  string = string.toLowerCase();

  return `Users${
    string.charAt(0).toUpperCase() + string.slice(1)
  }sController` as UsersResourceControllers;
}
