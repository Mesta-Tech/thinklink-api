import { Book } from '../entities/Book';
import { Movie } from '../entities/Movie';
import { Music } from '../entities/Music';
import { User } from '../entities/User';
import { UsersBooks } from '../entities/Users_Books';
import { UsersMovies } from '../entities/Users_Movies';
import { UsersMusics } from '../entities/Users_Musics';

export default () => [User, Book, Movie, Music, UsersBooks, UsersMovies, UsersMusics];
