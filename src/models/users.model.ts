// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
import { Sequelize, DataTypes, Model } from 'sequelize';
import { Application } from '../declarations';
import { HookReturn } from 'sequelize/types/lib/hooks';
import { IUser } from '../services/users/users.types';

export default function (app: Application) {
	const sequelizeClient: Sequelize = app.get('sequelizeClient');
	const users = sequelizeClient.define<Model<IUser>>(
		'users',
		{
			username: { type: DataTypes.STRING, allowNull: false, unique: true },
			email: {
				type: DataTypes.STRING,
				allowNull: false,
				unique: true,
			},
			password: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			name: { type: DataTypes.STRING, allowNull: false },
			lastname: { type: DataTypes.STRING, allowNull: false },
			googleId: { type: DataTypes.STRING },
			birthday: { type: DataTypes.DATE, allowNull: false },
			gender: { type: DataTypes.STRING },
			country: { type: DataTypes.STRING },
			profile_image: { type: DataTypes.STRING },
			bio: { type: DataTypes.TEXT },
			role: { type: DataTypes.STRING },
		},
		{
			hooks: {
				beforeCount(options: any): HookReturn {
					options.raw = true;
				},
			},
			timestamps: true,
		},
	);

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	(users as any).associate = function (models: any): void {
		// Define associations here
		users.belongsToMany(models.books, {
			through: models.users_books,
			onDelete: 'CASCADE',
		});
		// See http://docs.sequelizejs.com/en/latest/docs/associations/
	};

	return users;
}
