import { getRepository } from 'typeorm';
import ResourceNotApprovedException from '../../exceptions/ResourceNotApprovedException';
import { ModelName, ModelType } from '../../typings';

export default async <K extends ModelName>(
  Model: ModelType<K>,
  resourceId: string,
): Promise<boolean> => {
  try {
    const bRepo = getRepository(Model);
    const book = await bRepo.findOneOrFail({
      where: { id: resourceId, approval_state: 'approved' },
    });
    console.log(
      'UsersBooksController => create:RequestHandlerT<UsersResourcesRequest>= => book',
      book,
    );
    if (book) return true;
  } catch (error) {
    throw new ResourceNotApprovedException();
  }
  return false;
};
