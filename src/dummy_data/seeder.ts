import { Sequelize } from 'sequelize';
import { Application } from '../declarations';

import users from './users_dummy.json';
import books from './books_dummy.json';
import movies from './movies_dummy.json';
import tvSeries from './tv_series_dummy.json';
import users_books from './users_books_dummy.json';
import users_movies from './users_movies_dummy.json';
import users_tv_series from './users_tv_series_dummy.json';

export default async function seed(app: Application) {
	console.log('START SEEDING');
	console.time('users');
	await app.service('users').Model.bulkCreate(users);
	console.timeEnd('users');
	console.time('books');
	await app.service('books').Model.bulkCreate(books);
	console.timeEnd('books');
	console.time('tv-series');
	await app.service('tv-series').Model.bulkCreate(tvSeries);
	console.timeEnd('tv-series');
	console.time('movies');
	await app.service('movies').Model.bulkCreate(movies);
	console.timeEnd('movies');
	console.time('users_books');
	await app.service('users-books').Model.bulkCreate(users_books);
	console.timeEnd('users_books');
	console.time('users-movies');
	await app.service('users-movies').Model.bulkCreate(users_movies);
	console.timeEnd('users-movies');
	console.time('users-tv-series');
	await app.service('users-tv-series').Model.bulkCreate(users_tv_series);
	console.timeEnd('users-tv-series');
	app.set('seederDone', true);
}
