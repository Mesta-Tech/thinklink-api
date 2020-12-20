import { StatusCodes } from 'http-status-codes';
import { Repository, getRepository } from 'typeorm';
import { Movie } from '../../entities/Resources/Movie';
import EntityNotFoundException from '../../exceptions/EntityNotFoundException';
import MissingPropertyException from '../../exceptions/MissingPropertyException';
import { notImplemented } from '../../helpers/notImplemented';
import { IResourceController, RequestHandlerT } from '../../typings';

export default class MovieController implements IResourceController<Movie> {
  repository: Repository<Movie>;
  constructor() {
    this.repository = getRepository(Movie);
  }
  create: RequestHandlerT<Partial<Movie>, unknown> = async (req, res, next) => {
    const newMovie = this.repository.create(req.body);
    try {
      const savedMovie = await this.repository.save(newMovie);
      res.status(StatusCodes.OK).send(savedMovie);
    } catch (error) {
      next(new MissingPropertyException());
    }
  };
  edit: RequestHandlerT<Partial<Movie>, unknown> = (req, res) => {
    // TODO implement Movie edit route
    notImplemented(req, res);
  };
  remove: RequestHandlerT<{ resourceId: string }, unknown> = async (req, res, next) => {
    try {
      const movie = await this.repository.findOneOrFail(req.body.resourceId);
      const removedMovie = await this.repository.softRemove(movie);
      movie.deletedAt = new Date();
      res.status(StatusCodes.OK).send(removedMovie);
    } catch (error) {
      next(new EntityNotFoundException());
    }
  };
  approve: RequestHandlerT<{ resourceId: string }, unknown> = async (req, res, next) => {
    try {
      const movie = await this.repository.findOneOrFail(req.body.resourceId);
      movie.approval_state = 'approved';
      const updatedMovie = await this.repository.save(movie);
      res.status(StatusCodes.OK).send(updatedMovie);
    } catch (error) {
      next(new EntityNotFoundException());
    }
  };
  deny: RequestHandlerT<{ resourceId: string }, unknown> = async (req, res, next) => {
    try {
      const movie = await this.repository.findOneOrFail(req.body.resourceId);
      movie.approval_state = 'denied';
      const updatedMovie = await this.repository.save(movie);
      res.status(StatusCodes.OK).send(updatedMovie);
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
        const movie = await this.repository.findOneOrFail(resourceId);
        res.status(StatusCodes.OK).send(movie);
      } catch (error) {
        next(new EntityNotFoundException());
      }
    } else {
      //TODO implement full text search with searchTerm
    }
  };
}
