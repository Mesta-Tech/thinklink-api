import assert from 'assert';
import app from '../../src/app';

describe('\'users_musics\' service', () => {
  it('registered the service', () => {
    const service = app.service('users-musics');

    assert.ok(service, 'Registered the service');
  });
});
