import { Application } from '../declarations';
import users from './users/users.service';
import books from './books/books.service';
import movies from './movies/movies.service';
import tvSeries from './tv-series/tv-series.service';
import musics from './musics/musics.service';
import images from './images/images.service';
// Don't remove this comment. It's needed to format import lines nicely.

export default function (app: Application): void {
  app.configure(users);
  app.configure(books);
  app.configure(movies);
  app.configure(tvSeries);
  app.configure(musics);
  app.configure(images);
}
