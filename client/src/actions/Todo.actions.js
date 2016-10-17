import { createAction }       from 'redux-actions';
import axios                  from '../axios';
import * as TodoActionTypes   from '../constants/Todo.constants';

const requestData  = createAction(TodoActionTypes.REQUEST_DATA);
const receiveTodos = createAction(TodoActionTypes.RECEIVE_TODOS);

export function fetchTodos() {
  return (dispatch) => {
    dispatch(requestData());
    return axios.get('/api/todos')
      .then((response) => dispatch(receiveTodos(response.data)))
      .catch((err) => console.log(err));
  };
}

export function createTodo(todo) {
  return (dispatch) => {
    return axios.post('/api/todos', todo)
      .then((response) => console.log(response.data))
      .catch((err) => console.log(err));
  };
}
