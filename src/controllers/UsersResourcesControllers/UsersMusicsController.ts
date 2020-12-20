import UsersMusicsNotFoundException from '../../exceptions/UsersMusicsNotFoundException';
import EntityNotFoundException from '../../exceptions/EntityNotFoundException';
import URLinkCouldntCreatedException from '../../exceptions/URLinkCouldntCreatedException';
import checkIfApproved from '../../utils/resourceUtils/checkIfApproved';
import { RequestHandlerT, UsersResourcesRequest } from '../../typings';
import { UsersMusics } from '../../entities/Resources/UsersMusics';
import { Music } from '../../entities/Resources/Music';
import { StatusCodes } from 'http-status-codes';
import { getRepository } from 'typeorm';

export default class UsersMusicsController {
  static create: RequestHandlerT<UsersResourcesRequest> = async (req, res, next) => {
    const umRepo = getRepository(UsersMusics);
    const { resourceId, isFavorite } = req.body;
    const { userId } = res.locals;
    const [existingRecord] = await umRepo.find({
      where: { musicId: resourceId, userId, isFavorite },
      withDeleted: true,
    });
    if (!existingRecord) {
      try {
        await checkIfApproved(Music, resourceId);
      } catch (error) {
        next(error);
      }
      const umLink = umRepo.create({ musicId: resourceId, isFavorite, userId });
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
    const umRepo = getRepository(UsersMusics);
    const { resourceId, isFavorite } = req.body;
    const { userId } = res.locals;
    try {
      await umRepo
        .createQueryBuilder()
        .update(UsersMusics)
        .set({ musicId: resourceId, isFavorite, userId })
        .where('userId = :userId AND musicId = :musicId', { userId, musicId: resourceId })
        .execute();
      res.status(StatusCodes.OK).send(req.body);
    } catch (error) {
      next(new UsersMusicsNotFoundException());
    }
  };
  static remove: RequestHandlerT<UsersResourcesRequest> = async (req, res, next) => {
    const umRepo = getRepository(UsersMusics);
    const { resourceId } = req.body;
    const { userId } = res.locals;
    const [existingRecord] = await umRepo.find({
      where: { musicId: resourceId, userId },
    });
    if (existingRecord) {
      const deletedRecord = await umRepo.softRemove(existingRecord);
      res.status(StatusCodes.OK).send(deletedRecord);
    } else {
      next(new EntityNotFoundException());
    }
  };
}
