import { NullableId, Params } from '@feathersjs/feathers';
import { Service, SequelizeServiceOptions } from 'feathers-sequelize';
import { Sequelize } from 'sequelize/types';
import app from '../../app';
import { Application } from '../../declarations';
import { IBook } from './books.types';

export class Books extends Service<IBook> {
	constructor(options: Partial<SequelizeServiceOptions>, _app: Application) {
		super(options);
	}
	async create(data: IBook | IBook[], params?: Params) {
		return super.create(data, params);
	}

	async remove(id: NullableId, params?: Params) {
		if (params && params.user) {
			const users_books_service = app.service('users-books');
			users_books_service.remove(null, {
				bookId: id,
				userId: params.user.id,
			});
		}
		return super.remove(id, params);
	}
}
