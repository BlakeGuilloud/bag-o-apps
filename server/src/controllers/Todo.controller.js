import * as todoService from '../db/services/Todo.service';
import * as authHelpers from '../helpers/Auth.helpers';

export function postTodo(req, res) {
  Promise.resolve()
    .then(() => todoService.postTodo(req.body))
    .then((todo) => res.status(200).json(todo))
}

export function getTodos(req, res) {
  Promise.resolve()
    .then(() => todoService.getTodos())
    .then((todos) => res.status(200).json(todos))
}
