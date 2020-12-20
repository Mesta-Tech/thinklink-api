import UUIDNotValidException from '../exceptions/UUIDNotValidException';

const uuidRegex = /^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i;
export default (uuid: string): void => {
  const result = uuidRegex.test(uuid);
  if (!result) {
    throw new UUIDNotValidException();
  }
};
