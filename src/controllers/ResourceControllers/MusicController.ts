import { StatusCodes } from 'http-status-codes';
import { getRepository, Repository } from 'typeorm';
import { Music } from '../../entities/Resources/Music';
import EntityNotFoundException from '../../exceptions/EntityNotFoundException';
import MissingPropertyException from '../../exceptions/MissingPropertyException';
import { notImplemented } from '../../helpers/notImplemented';
import { IResourceController, RequestHandlerT } from '../../typings';

export default class MusicController implements IResourceController<Music> {
  repository: Repository<Music>;
  constructor() {
    this.repository = getRepository(Music);
  }
  create: RequestHandlerT<Partial<Music>, unknown> = async (req, res, next) => {
    const newMusic = this.repository.create(req.body);
    try {
      const savedMusic = await this.repository.save(newMusic);
      res.status(StatusCodes.OK).send(savedMusic);
    } catch (error) {
      next(new MissingPropertyException());
    }
  };
  edit: RequestHandlerT<Partial<Music>, unknown> = (req, res) => {
    // TODO implement Music edit route
    notImplemented(req, res);
  };
  remove: RequestHandlerT<{ resourceId: string }, unknown> = async (req, res, next) => {
    try {
      const music = await this.repository.findOneOrFail(req.body.resourceId);
      const removedMusic = await this.repository.softRemove(music);
      music.deletedAt = new Date();
      res.status(StatusCodes.OK).send(removedMusic);
    } catch (error) {
      next(new EntityNotFoundException());
    }
  };
  approve: RequestHandlerT<{ resourceId: string }, unknown> = async (req, res, next) => {
    try {
      const music = await this.repository.findOneOrFail(req.body.resourceId);
      music.approval_state = 'approved';
      const updatedMusic = await this.repository.save(music);
      res.status(StatusCodes.OK).send(updatedMusic);
    } catch (error) {
      next(new EntityNotFoundException());
    }
  };
  deny: RequestHandlerT<{ resourceId: string }, unknown> = async (req, res, next) => {
    try {
      const music = await this.repository.findOneOrFail(req.body.resourceId);
      music.approval_state = 'denied';
      const updatedMusic = await this.repository.save(music);
      res.status(StatusCodes.OK).send(updatedMusic);
    } catch (error) {
      next(new EntityNotFoundException());
    }
  };
  get: RequestHandlerT<{ resourceId: string; searchTerm: string }> = async (req, res, next) => {
    const {
      resourceId,
      // , searchTerm
    } = req.body;
    if (resourceId) {
      try {
        const music = await this.repository.findOneOrFail(resourceId);
        res.status(StatusCodes.OK).send(music);
      } catch (error) {
        next(new EntityNotFoundException());
      }
    } else {
      //TODO implement full text search with searchTerm
    }
  };
}
