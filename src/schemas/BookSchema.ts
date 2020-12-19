/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { object, string } from 'yup';

const bookSchema = object({
  title: string().required(),
  author: string().required(),
  literature: string().required(),
});

export const validateBook = bookSchema.validate;
export default bookSchema;
