import { Router } from 'express';
import { prisma } from '@chefsire/db';

export const usersRouter = Router();

usersRouter.get('/', async (_req, res) => {
  const users = await prisma.user.findMany({ take: 20, orderBy: { createdAt: 'desc' } });
  res.json(users);
});
