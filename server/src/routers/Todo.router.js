import express             from 'express';
import * as todoController from '../controllers/Todo.controller';

const router = express.Router();

router.get('/', todoController.getTodos);
router.post('/', todoController.postTodo);

export default router;
