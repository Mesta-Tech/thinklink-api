import { StatusCodes } from 'http-status-codes';
import { getRepository, Repository } from 'typeorm';
import { Book } from '../../entities/Resources/Book';
import EntityNotFoundException from '../../exceptions/EntityNotFoundException';
import MissingPropertyException from '../../exceptions/MissingPropertyException';
import { notImplemented } from '../../helpers/notImplemented';
import { IResourceController, RequestHandlerT } from '../../typings';

export default class BookController implements IResourceController<Book> {
  repository: Repository<Book>;
  constructor() {
    this.repository = getRepository(Book);
  }
  create: RequestHandlerT<Partial<Book>, unknown> = async (req, res, next) => {
    const newBook = this.repository.create(req.body);
    try {
      const savedBook = await this.repository.save(newBook);
      res.status(StatusCodes.OK).send(savedBook);
    } catch (error) {
      next(new MissingPropertyException());
    }
  };
  edit: RequestHandlerT<Partial<Book>, unknown> = (req, res) => {
    // TODO implement book edit route
    notImplemented(req, res);
  };
  remove: RequestHandlerT<{ resourceId: string }, unknown> = async (req, res, next) => {
    try {
      const book = await this.repository.findOneOrFail(req.body.resourceId);
      const removedBook = await this.repository.softRemove(book);
      book.deletedAt = new Date();
      res.status(StatusCodes.OK).send(removedBook);
    } catch (error) {
      next(new EntityNotFoundException());
    }
  };
  approve: RequestHandlerT<{ resourceId: string }, unknown> = async (req, res, next) => {
    try {
      const book = await this.repository.findOneOrFail(req.body.resourceId);
      book.approval_state = 'approved';
      const updatedBook = await this.repository.save(book);
      res.status(StatusCodes.OK).send(updatedBook);
    } catch (error) {
      next(new EntityNotFoundException());
    }
  };
  deny: RequestHandlerT<{ resourceId: string }, unknown> = async (req, res, next) => {
    try {
      const book = await this.repository.findOneOrFail(req.body.resourceId);
      book.approval_state = 'denied';
      const updatedBook = await this.repository.save(book);
      res.status(StatusCodes.OK).send(updatedBook);
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
        const book = await this.repository.findOneOrFail(resourceId);
        res.status(StatusCodes.OK).send(book);
      } catch (error) {
        next(new EntityNotFoundException());
      }
    } else {
      //TODO implement full text search with searchTerm
    }
  };
}
