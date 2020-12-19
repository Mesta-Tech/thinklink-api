import TokenController from '../controllers/TokenController';
import { RequestHandler } from '../typings';

/**
 * Checks token integrity and if its ok, it adds user to res.locals.user
 */
const authenticateToken = (): RequestHandler => async (req, res, next) => {
  const authToken = req.header('Authorization')?.replace('Bearer ', '');
  try {
    const userInfo = await TokenController.verifyToken(authToken);
    res.locals.user = userInfo.user;
    return next();
  } catch (err) {
    console.log(err);
    next(err);
  }
};
export default authenticateToken;
