import UsersBooksNotFoundException from '../../exceptions/UsersBooksNotFoundException';
import EntityNotFoundException from '../../exceptions/EntityNotFoundException';
import URLinkCouldntCreatedException from '../../exceptions/URLinkCouldntCreatedException';
import { RequestHandlerT, UsersResourcesRequest } from '../../typings';
import { UsersBooks } from '../../entities/Resources/UsersBooks';
import { StatusCodes } from 'http-status-codes';
import { getRepository } from 'typeorm';
import { Book } from '../../entities/Resources/Book';
import checkIfApproved from '../../utils/resourceUtils/checkIfApproved';

export default class UsersBooksController {
  static create: RequestHandlerT<UsersResourcesRequest> = async (req, res, next) => {
    const ubRepo = getRepository(UsersBooks);
    const { resourceId, isFavorite } = req.body;
    const { userId } = res.locals;
    const [existingRecord] = await ubRepo.find({
      where: { bookId: resourceId, userId, isFavorite },
      withDeleted: true,
    });
    console.log({ userId, existingRecord });
    if (!existingRecord) {
      try {
        await checkIfApproved(Book, resourceId);
      } catch (error) {
        next(error);
        return;
      }
      const ubLink = ubRepo.create({ bookId: resourceId, isFavorite, userId });
      try {
        const savedUbLink = await ubRepo.save(ubLink);
        res.status(StatusCodes.OK).send(savedUbLink);
      } catch (error) {
        console.log(error);
        next(new URLinkCouldntCreatedException());
      }
    } else {
      const recoveredRecord = await ubRepo.recover(existingRecord);
      res.status(StatusCodes.OK).send(recoveredRecord);
    }
  };
  static edit: RequestHandlerT<UsersResourcesRequest> = async (req, res, next) => {
    const ubRepo = getRepository(UsersBooks);
    const { resourceId, isFavorite } = req.body;
    const { userId } = res.locals;
    try {
      await ubRepo
        .createQueryBuilder()
        .update(UsersBooks)
        .set({ bookId: resourceId, isFavorite, userId })
        .where('userId = :userId AND bookId = :bookId', { userId, bookId: resourceId })
        .execute();
      res.status(StatusCodes.OK).send(req.body);
    } catch (error) {
      next(new UsersBooksNotFoundException());
    }
  };
  static remove: RequestHandlerT<UsersResourcesRequest> = async (req, res, next) => {
    const ubRepo = getRepository(UsersBooks);
    const { resourceId } = req.body;
    const { userId } = res.locals;

    const [existingRecord] = await ubRepo.find({
      where: { bookId: resourceId, userId },
    });

    if (existingRecord) {
      const deletedRecord = await ubRepo.softRemove(existingRecord);
      res.status(StatusCodes.OK).send(deletedRecord);
    } else {
      next(new EntityNotFoundException());
    }
  };
}
