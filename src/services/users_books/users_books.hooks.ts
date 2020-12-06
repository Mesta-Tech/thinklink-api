import * as authentication from '@feathersjs/authentication';
import attachBook from '../../hooks/attach-book';
// Don't remove this comment. It's needed to format import lines nicely.

const { authenticate } = authentication.hooks;

export default {
	before: {
		all: [authenticate('jwt')],
		find: [],
		get: [],
		create: [],
		update: [],
		patch: [],
		remove: [],
	},

	after: {
		all: [],
		find: [attachBook()],
		get: [],
		create: [],
		update: [],
		patch: [],
		remove: [],
	},

	error: {
		all: [],
		find: [],
		get: [],
		create: [],
		update: [],
		patch: [],
		remove: [],
	},
};