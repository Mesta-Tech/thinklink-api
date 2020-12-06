import { Id, NullableId, Params } from '@feathersjs/feathers';
import { Service, SequelizeServiceOptions } from 'feathers-sequelize';
import { Model, ModelCtor, Sequelize } from 'sequelize/types';
import app from '../../app';
import { Application, SeqModel } from '../../declarations';
import { IUser } from './users.types';

export class Users extends Service<IUser> {
	//eslint-disable-next-line @typescript-eslint/no-unused-vars
	constructor(options: Partial<SequelizeServiceOptions>, app: Application) {
		super(options);
	}

	async remove(id: NullableId, params?: Params) {
		//TODO: clean users connections
		if (id) return super.remove(id);

		const sequelize: Sequelize = app.get('sequelizeClient');
		const userModel: SeqModel<IUser> = sequelize.models['users'];
		const user = (
			await userModel.findOne({
				where: { username: params?.username },
			})
		)?.get();
		if (user?.id) return super.remove(user?.id);
		return [];
	}
}
