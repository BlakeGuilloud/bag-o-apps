import { combineReducers } from 'redux';
import { routerReducer }   from 'react-router-redux';
import userReducer         from './User.reducer';
import authReducer         from './Auth.reducer';
import todoReducer         from './Todo.reducer';


const rootReducer = combineReducers({
  auth: authReducer,
  todo: todoReducer,
  users: userReducer,
  routing:  routerReducer,
});

export default rootReducer;
