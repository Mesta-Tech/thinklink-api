import bootstrap from './bootstrap';
import playground from './playground';

export default async () => {
  const app = await bootstrap();
  // eslint-disable-next-line no-console
  app.listen(process.env.PORT, () => console.log(`Server up! Port => ${process.env.PORT}`));
  playground();
};
