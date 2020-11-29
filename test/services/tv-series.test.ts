import assert from 'assert';
import app from '../../src/app';

describe('\'tv-series\' service', () => {
  it('registered the service', () => {
    const service = app.service('tv-series');

    assert.ok(service, 'Registered the service');
  });
});
