import assert from 'assert';
import app from '../../src/app';

describe('\'users_movies\' service', () => {
  it('registered the service', () => {
    const service = app.service('users-movies');

    assert.ok(service, 'Registered the service');
  });
});
