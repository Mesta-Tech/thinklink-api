// Initializes the `tv-series` service on path `/tv-series`
import { ServiceAddons } from '@feathersjs/feathers';
import { Application } from '../../declarations';
import { TvSeries } from './tv-series.class';
import createModel from '../../models/tv-series.model';
import hooks from './tv-series.hooks';

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    'tv-series': TvSeries & ServiceAddons<any>;
  }
}

export default function (app: Application): void {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/tv-series', new TvSeries(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('tv-series');

  service.hooks(hooks);
}
