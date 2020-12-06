// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
import { Sequelize, DataTypes, Model } from 'sequelize';
import { Application } from '../declarations';
import { HookReturn } from 'sequelize/types/lib/hooks';
import { IBook } from '../services/books/books.types';

export default function (app: Application) {
	const sequelizeClient: Sequelize = app.get('sequelizeClient');
	const books = sequelizeClient.define<Model<IBook>>(
		'books',
		{
			name: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			author: { type: DataTypes.STRING },
			literature: { type: DataTypes.STRING },
			image: { type: DataTypes.STRING },
			summary: { type: DataTypes.TEXT },
			isActive: { type: DataTypes.BOOLEAN, defaultValue: true },
		},
		{
			hooks: {
				beforeCount(options: any): HookReturn {
					options.raw = true;
				},
			},
			timestamps: true,
			paranoid: true,
		},
	);

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	(books as any).associate = function (models: any): void {
		// Define associations here
		books.belongsToMany(models.users, {
			through: models.users_books,
			onDelete: 'CASCADE',
		});
		books.hasMany(models.genres);
		// See http://docs.sequelizejs.com/en/latest/docs/associations/
	};

	return books;
}
