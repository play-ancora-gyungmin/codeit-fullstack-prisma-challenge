import express from 'express';
import { userRepository } from '../repository/user.repository.js';

export const usersRouter = express.Router();

usersRouter.post('/', async (req, res) => {
  try {
    const newUser = await userRepository.createUser(req.body);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

usersRouter.get('/', async (req, res) => {
  try {
    const users = await userRepository.findAllUsers();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

usersRouter.get('/:id', async (req, res) => {
  try {
    const user = await userRepository.findUserById(req.params.id);
    if (!user) {
      return res.status(404).json({ error: '사용자를 찾을 수 없습니다.' });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

usersRouter.put('/:id', async (req, res) => {
  try {
    const updatedUser = await userRepository.updateUser(
      req.params.id,
      req.body,
    );
    res.json(updatedUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

usersRouter.delete('/:id', async (req, res) => {
  try {
    await userRepository.deleteUser(req.params.id);
    res.json({ message: '사용자가 성공적으로 삭제되었습니다.' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
