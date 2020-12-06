import { Sequelize } from 'sequelize';
import { Application } from './declarations';
import seed from './dummy_data/seeder';

export default function (app: Application): void {
	const connectionString = app.get('postgres');
	const sequelize = new Sequelize(connectionString, {
		dialect: 'postgres',
		logging: false,
		define: {
			freezeTableName: true,
			createdAt: 'createdat',
			updatedAt: 'updatedat',
			deletedAt: 'deletedat',
		},
	});
	const oldSetup = app.setup;

	app.set('sequelizeClient', sequelize);

	app.setup = function (...args): Application {
		const result = oldSetup.apply(this, args);

		// Set up data relationships
		const models = sequelize.models;
		Object.keys(models).forEach((name) => {
			if ('associate' in models[name]) {
				(models[name] as any).associate(models);
			}
		});

		// Sync to the database
		sequelize.sync({ force: true, schema: 'public' }).then((sequelizeSync) => {
			app.set('sequelizeSync', sequelizeSync);
			app.configure(seed);
		});
		return result;
	};
}
