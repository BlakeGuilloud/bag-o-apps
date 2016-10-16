import { handleActions }    from 'redux-actions';
import * as AuthActionTypes from '../constants/Auth.constants';

const authReducer = handleActions({
  [AuthActionTypes.SET_USER]: (state, action) =>
    ({
      ...state,
      user: action.payload,
    }),
}, {
  error: '',
  loading: false,
  user: {},
});

export default authReducer;
