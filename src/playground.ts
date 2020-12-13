import { getRepository } from 'typeorm';
import { Photo } from './entities/test';
// import { Book } from './entities/Book';
// import { User } from './entities/User';
// import { UsersBooks } from './entities/Users_Books';

export default async () => {
  const pRepo = getRepository(Photo);
  const photo = await pRepo.create({ title: 'test photo', description: 'test' });
  pRepo.save(photo, { reload: true });
  console.log(photo);
};
