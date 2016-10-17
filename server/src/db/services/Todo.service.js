import Todo from '../models/Todo.model';

export async function postTodo(todo) {
  let newTodo;
  try {
    newTodo = await Todo.query()
      .insertWithRelated(todo);
  } catch (err) {
    return Promise.reject(err);
  }
  return Promise.resolve(newTodo);
}

export async function getTodos() {
  let todos;
  try {
    todos = await Todo.query();
  } catch (err) {
    return Promise.reject(err);
  }
  if (!todos) return Promise.reject('You has no todo.');
  return Promise.resolve(todos);
}
