import assert from 'assert';
import app from '../../src/app';

describe("'users_books' service", () => {
	it('registered the service', () => {
		const service = app.service('users-books');
		assert.ok(service, 'Registered the service');
	});
});
