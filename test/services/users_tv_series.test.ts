import assert from 'assert';
import app from '../../src/app';

describe('\'users_tv_series\' service', () => {
  it('registered the service', () => {
    const service = app.service('users-tv-series');

    assert.ok(service, 'Registered the service');
  });
});
