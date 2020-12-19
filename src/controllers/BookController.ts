import { StatusCodes } from 'http-status-codes';
import { getRepository, Repository } from 'typeorm';
import { Book } from '../entities/Resources/Book';
import { IResourceController, RequestHandler } from '../typings';

export default class BookController implements IResourceController<Book> {
  repository: Repository<Book>;
  constructor() {
    this.repository = getRepository(Book);
  }
  create: RequestHandler<Partial<Book>, unknown> = async (req, res) => {
    const newBook = this.repository.create(req.body);
    const savedBook = await this.repository.save(newBook);
    res.status(StatusCodes.OK).send(savedBook);
  };
  edit: RequestHandler<Partial<Book>, unknown>;
  remove: RequestHandler<{ resourceId: string }, unknown>;
  approve: RequestHandler<{ resourceId: string }, unknown>;
}
