import express from 'express';
import { usersRouter } from './user.js';

export const router = express.Router();

// 기본 라우트
router.get('/', (req, res) => {
  res.json({
    message: 'Hello Express!',
    timestamp: new Date().toISOString(),
  });
});

// 하위 라우트 등록
router.use('/users', usersRouter);
