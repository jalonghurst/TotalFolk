import { Router, Response } from 'express';

const router = Router();

router.get('/', (res: Response) => {
  res.send('The server is running');
});

export default router;
