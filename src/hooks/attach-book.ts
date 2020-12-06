// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html
import { Hook, HookContext } from '@feathersjs/feathers';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default (options = {}): Hook => {
	return async (context: HookContext): Promise<HookContext> => {
		const { app, method, params, result } = context;

		for (const data of result.data) {
			const relatedBook = await app.service('books').get(data.bookId);
			data.book = relatedBook;
			delete data.bookId;
		}

		return context;
	};
};
