import express from 'express';
import authenticateToken from '../middlewares/authenticate';

export default (): express.Router => {
  const TestRoute = express.Router();
  TestRoute.get('/protectedTestRoute', authenticateToken(), (_req, res) => {
    res.send(res.locals);
  });
  TestRoute.get('/', () => '');

  return TestRoute;
};
