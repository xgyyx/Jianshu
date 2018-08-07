import {fromJS} from 'immutable';
import * as actionTypes from './actionTypes';

const defaultState = fromJS({
  loginState: false
});

export default (state = defaultState, action) => {
  switch(action.type) {
    default:
      return state;
    case actionTypes.CHANGE_LOGIN_STATE_ACTION:
      return state.set('loginState', action.value);
    case actionTypes.LOGOUT_ACTION:
      return state.set('loginState', action.value);
  }
};