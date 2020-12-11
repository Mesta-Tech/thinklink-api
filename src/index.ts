import bootstrap from './bootstrap';

export default async () => {
  const app = await bootstrap();
  // eslint-disable-next-line no-console
  app.listen(process.env.PORT, () => console.log('Server up!'));
};
