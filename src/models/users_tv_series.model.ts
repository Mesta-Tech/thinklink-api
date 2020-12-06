// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
import { Sequelize, DataTypes, Model } from 'sequelize';
import { Application } from '../declarations';
import { HookReturn } from 'sequelize/types/lib/hooks';

export default function (app: Application): typeof Model {
  const sequelizeClient: Sequelize = app.get('sequelizeClient');
  const usersTvSeries = sequelizeClient.define(
    'users_tv_series',
    {
      isFavorite: { type: DataTypes.BOOLEAN },
    },
    {
      hooks: {
        beforeCount(options: any): HookReturn {
          options.raw = true;
        },
      },
      timestamps: true,
      freezeTableName: true,
      paranoid: true,
    },
  );

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  (usersTvSeries as any).associate = function (models: any): void {
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return usersTvSeries;
}
