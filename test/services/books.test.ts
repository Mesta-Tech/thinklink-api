import { Paginated } from '@feathersjs/feathers';
import assert from 'assert';
import app from '../../src/app';
import { IBook } from '../../src/services/books/books.types';

describe('Books service', () => {
	it('registered the service', () => {
		const service = app.service('books');
		assert.ok(service, 'Registered the service');
	});
	it('creates a book', async () => {
		const service = app.service('books');
		const createdBook = (await service.create({ name: 'test' })) as IBook;
		assert.strictEqual(createdBook.name, 'test');
	});

	it('deletes a book', async () => {
		const service = app.service('books');
		const {
			data: [book],
		} = (await service.find({
			query: { name: 'test' },
		})) as Paginated<IBook>;

		await service.remove(book.id || -1, { force: true });
	});
});
