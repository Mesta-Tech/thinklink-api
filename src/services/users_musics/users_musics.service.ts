// Initializes the `users_musics` service on path `/users-musics`
import { ServiceAddons } from '@feathersjs/feathers';
import { Application } from '../../declarations';
import { UsersMusics } from './users_musics.class';
import createModel from '../../models/users_musics.model';
import hooks from './users_musics.hooks';

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    'users-musics': UsersMusics & ServiceAddons<any>;
  }
}

export default function (app: Application): void {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/users-musics', new UsersMusics(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('users-musics');

  service.hooks(hooks);
}
