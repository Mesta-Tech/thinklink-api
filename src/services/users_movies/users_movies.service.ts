// Initializes the `users_movies` service on path `/users-movies`
import { ServiceAddons } from '@feathersjs/feathers';
import { Application } from '../../declarations';
import { UsersMovies } from './users_movies.class';
import createModel from '../../models/users_movies.model';
import hooks from './users_movies.hooks';

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    'users-movies': UsersMovies & ServiceAddons<any>;
  }
}

export default function (app: Application): void {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/users-movies', new UsersMovies(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('users-movies');

  service.hooks(hooks);
}
