import { combineReducers } from 'redux';
import { routerReducer }   from 'react-router-redux';
import userReducer         from './User.reducer';
import authReducer         from './Auth.reducer';


const rootReducer = combineReducers({
  auth: authReducer,
  users: userReducer,
  routing:  routerReducer,
});

export default rootReducer;
