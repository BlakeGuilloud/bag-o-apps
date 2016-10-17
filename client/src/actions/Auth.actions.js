import { createAction }     from 'redux-actions';
import axios                from '../axios';
import { browserHistory }   from 'react-router';
import * as AuthActionTypes from '../constants/Auth.constants';

const setUser = createAction(AuthActionTypes.SET_USER);

export function login(user) {
  return (dispatch) => {
    return axios.post('/auth/login', user)
      .then((response) => dispatch(setUser(response.data)))
      .then((user) => {
        console.log('login user', user);
        browserHistory.push(`/${user.payload.id}`)
      })
      .catch((err) => console.log(err));
  };
}

export function logout() {
  return (dispatch) => {
    return axios.delete('/auth/logout')
      .then(() => dispatch(setUser({})))
      .catch((err) => console.log(err));
  };
}

export function getCurrentUser() {
  return (dispatch) => {
    return axios.get('/auth/currentUser')
      .then((response) => dispatch(setUser(response.data)))
      .catch((err) => console.log(err));
  };
}
