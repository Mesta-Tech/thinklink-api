import assert from 'assert';
import app from '../../src/app';
import { IUser } from '../../src/services/users/users.types';

describe('Users service', () => {
	let userId: number = -1;
	const service = app.service('users');
	it('registered the service', () => {
		assert.ok(service, 'Registered the service');
	});

	it('creates a user', async () => {
		await app.service('users').remove(null, { username: 'test' });

		const user: IUser = {
			username: 'test',
			email: 'test@test.com',
			password: 'supersecret',
			name: 'TEST',
			lastname: 'TEST',
			birthday: '2/24/1971',
			gender: 'Male',
			country: 'Turkey',
			profile_image: 'http://dummyimage.com/102x210.png/dddddd/000000',
			bio:
				'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.',
			role: 'admin',
		};
		const createdUser = (await service.create(user)) as IUser;
		userId = createdUser.id || -1;
		assert.strictEqual(createdUser.name, 'TEST');
	});

	it('authenticates a user', async () => {
		const auth = app.service('authentication');
		const userInfo = { email: 'test@test.com', password: 'supersecret' };
		const { accessToken } = await auth.create(
			{ strategy: 'local', ...userInfo },
			{},
		);
		assert.ok(accessToken);
	});

	it('updates a user', async () => {
		const user = await service.get(userId);
		await service.patch(userId, { gender: 'Female' });
		const updatedUser = await service.get(userId);
		assert.notStrictEqual(user.gender, updatedUser.gender);
	});

	it('deletes a user', async () => {
		const removed = await service.remove(userId);
		assert.ok(removed);
	});
});
