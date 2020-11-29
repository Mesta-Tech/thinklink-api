// Initializes the `musics` service on path `/musics`
import { ServiceAddons } from '@feathersjs/feathers';
import { Application } from '../../declarations';
import { Musics } from './musics.class';
import createModel from '../../models/musics.model';
import hooks from './musics.hooks';

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    'musics': Musics & ServiceAddons<any>;
  }
}

export default function (app: Application): void {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/musics', new Musics(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('musics');

  service.hooks(hooks);
}
