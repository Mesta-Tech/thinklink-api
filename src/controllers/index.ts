import UsersMoviesController from './UsersResourcesControllers/UsersMoviesController';
import UsersMusicsController from './UsersResourcesControllers/UsersMusicsController';
import UsersBooksController from './UsersResourcesControllers/UsersBooksController';
import UsersResourcesControllers from './UsersResourcesControllers';
import MusicController from './ResourceControllers/MusicController';
import MovieController from './ResourceControllers/MovieController';
import BookController from './ResourceControllers/BookController';
import TokenController from './TokenController';
import AuthController from './AuthController';

const Controllers = {
  AuthController: AuthController,
  TokenController: TokenController,
  BookController: BookController,
  MovieController: MovieController,
  MusicController: MusicController,
  UsersBooksController: UsersBooksController,
  UsersMoviesController: UsersMoviesController,
  UsersMusicsController: UsersMusicsController,
};
export default Controllers;

const ResourceControllers = {
  BookController,
  MovieController,
  MusicController,
};

export { UsersResourcesControllers, ResourceControllers };
export {
  AuthController,
  TokenController,
  BookController,
  MovieController,
  MusicController,
  UsersBooksController,
  UsersMoviesController,
  UsersMusicsController,
};
