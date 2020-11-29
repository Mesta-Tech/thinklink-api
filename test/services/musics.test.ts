import assert from 'assert';
import app from '../../src/app';

describe('\'musics\' service', () => {
  it('registered the service', () => {
    const service = app.service('musics');

    assert.ok(service, 'Registered the service');
  });
});
