import UsersMoviesNotFoundException from '../../exceptions/UsersMoviesNotFoundException';
import EntityNotFoundException from '../../exceptions/EntityNotFoundException';
import URLinkCouldntCreatedException from '../../exceptions/URLinkCouldntCreatedException';
import { UsersMovies } from '../../entities/Resources/UsersMovies';
import { RequestHandlerT, UsersResourcesRequest } from '../../typings';
import { StatusCodes } from 'http-status-codes';
import { getRepository } from 'typeorm';
import checkIfApproved from '../../utils/resourceUtils/checkIfApproved';
import { Movie } from '../../entities/Resources/Movie';

export default class UsersMoviesController {
  static create: RequestHandlerT<UsersResourcesRequest> = async (req, res, next) => {
    const umRepo = getRepository(UsersMovies);
    const { resourceId, isFavorite } = req.body;
    const { userId } = res.locals;
    const [existingRecord] = await umRepo.find({
      where: { movieId: resourceId, userId, isFavorite },
      withDeleted: true,
    });
    if (!existingRecord) {
      try {
        await checkIfApproved(Movie, resourceId);
      } catch (error) {
        next(error);
      }
      const umLink = umRepo.create({ movieId: resourceId, isFavorite, userId });
      try {
        const savedUmLink = await umRepo.save(umLink);
        res.status(StatusCodes.OK).send(savedUmLink);
      } catch (error) {
        next(new URLinkCouldntCreatedException());
      }
    } else {
      const recoveredRecord = await umRepo.recover(existingRecord);
      res.status(StatusCodes.OK).send(recoveredRecord);
    }
  };
  static edit: RequestHandlerT<UsersResourcesRequest> = async (req, res, next) => {
    const umRepo = getRepository(UsersMovies);
    const { resourceId, isFavorite } = req.body;
    const { userId } = res.locals;
    try {
      await umRepo
        .createQueryBuilder()
        .update(UsersMovies)
        .set({ movieId: resourceId, isFavorite, userId })
        .where('userId = :userId AND movieId = :movieId', { userId, movieId: resourceId })
        .execute();
      res.status(StatusCodes.OK).send(req.body);
    } catch (error) {
      next(new UsersMoviesNotFoundException());
    }
  };
  static remove: RequestHandlerT<UsersResourcesRequest> = async (req, res, next) => {
    const umRepo = getRepository(UsersMovies);
    const { resourceId } = req.body;
    const { userId } = res.locals;
    const [existingRecord] = await umRepo.find({
      where: { movieId: resourceId, userId },
    });
    if (existingRecord) {
      const deletedRecord = await umRepo.softRemove(existingRecord);
      res.status(StatusCodes.OK).send(deletedRecord);
    } else {
      next(new EntityNotFoundException());
    }
  };
}
