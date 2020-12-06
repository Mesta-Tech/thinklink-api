import assert from 'assert';
import app from '../../src/app';

describe('\'Genres\' service', () => {
  it('registered the service', () => {
    const service = app.service('genres');

    assert.ok(service, 'Registered the service');
  });
});
