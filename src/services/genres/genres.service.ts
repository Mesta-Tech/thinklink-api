// Initializes the `Genres` service on path `/genres`
import { ServiceAddons } from '@feathersjs/feathers';
import { Application } from '../../declarations';
import { Genres } from './genres.class';
import createModel from '../../models/genres.model';
import hooks from './genres.hooks';

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    'genres': Genres & ServiceAddons<any>;
  }
}

export default function (app: Application): void {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/genres', new Genres(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('genres');

  service.hooks(hooks);
}
