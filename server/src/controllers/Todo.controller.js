import * as todoService from '../db/services/Todo.service';
import * as authHelpers from '../helpers/Auth.helpers';

export function postTodo(req, res) {
  console.log('req body', req.body);
  Promise.resolve()
    .then(() => todoService.postTodo(req.body))
    .then((todo) => res.status(200).json(todo))
    .catch((err) => console.log(err));
}

export function getTodos(req, res) {
  Promise.resolve()
    .then(() => todoService.getTodos())
    .then((todos) => res.status(200).json(todos))
    .catch((err) => console.log(err));
}
