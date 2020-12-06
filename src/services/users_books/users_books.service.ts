// Initializes the `users_books` service on path `/users-books`
import { ServiceAddons } from '@feathersjs/feathers';
import { Application } from '../../declarations';
import { UsersBooks } from './users_books.class';
import createModel from '../../models/users_books.model';
import hooks from './users_books.hooks';

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    'users-books': UsersBooks & ServiceAddons<any>;
  }
}

export default function (app: Application): void {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/users-books', new UsersBooks(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('users-books');

  service.hooks(hooks);
}
