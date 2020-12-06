// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
import { Sequelize, DataTypes, Model } from 'sequelize';
import { Application } from '../declarations';
import { HookReturn } from 'sequelize/types/lib/hooks';

export default function (app: Application): typeof Model {
  const sequelizeClient: Sequelize = app.get('sequelizeClient');
  const movies = sequelizeClient.define(
    'movies',
    {
      name: { type: DataTypes.STRING },
      image: { type: DataTypes.STRING },
      year: { type: DataTypes.STRING },
      director: { type: DataTypes.STRING },
      summary: { type: DataTypes.TEXT },
      isActive: { type: DataTypes.BOOLEAN },
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
  (movies as any).associate = function (models: any): void {
    // Define associations here
    movies.belongsToMany(models.users, {
      through: models.users_movies,
    });
    movies.hasMany(models.genres);
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return movies;
}
