// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
import { Sequelize, DataTypes, Model } from 'sequelize';
import { Application } from '../declarations';
import { HookReturn } from 'sequelize/types/lib/hooks';

export default function (app: Application): typeof Model {
  const sequelizeClient: Sequelize = app.get('sequelizeClient');
  const tvSeries = sequelizeClient.define(
    'tv_series',
    {
      title: { type: DataTypes.STRING, allowNull: false },
      image: { type: DataTypes.STRING },
      creator: { type: DataTypes.STRING },
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
  (tvSeries as any).associate = function (models: any): void {
    // Define associations here
    tvSeries.belongsToMany(models.users, {
      through: models.users_tv_series,
      foreignKey: 'tvSerieId',
    });
    tvSeries.hasMany(models.genres);
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return tvSeries;
}
