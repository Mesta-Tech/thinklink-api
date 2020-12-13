import bootstrap from './bootstrap';
import getEnv from './helpers/getEnv';
import playground from './playground';

export default async (): Promise<void> => {
  const app = await bootstrap();
  // eslint-disable-next-line no-console
  app.listen(process.env.PORT || 3030, () =>
    console.log(`Server up! Port => ${getEnv('PORT') ?? 3030}`),
  );
  playground().catch((err) => {
    console.log(err);
  });
};
