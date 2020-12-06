import { NullableId, Params } from '@feathersjs/feathers';
import { Service, SequelizeServiceOptions } from 'feathers-sequelize';
import { Sequelize } from 'sequelize/types';
import app from '../../app';
import { Application, SeqModel } from '../../declarations';
import { IUsersBooks } from './users_books.types';

export class UsersBooks extends Service {
	constructor(options: Partial<SequelizeServiceOptions>, _app: Application) {
		super(options);
	}
	async remove(_id: NullableId, params: Params) {
		const sequelize: Sequelize = app.get('sequelizeClient');
		const usersBooksModel: SeqModel<IUsersBooks> = sequelize.model(
			'users_books',
		);
		usersBooksModel.destroy({
			where: { bookId: params.bookId, userId: params.userId },
		});
	}
}
