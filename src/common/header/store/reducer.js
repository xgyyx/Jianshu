import * as actionTypes from './actionTypes';
import {fromJS} from 'immutable';

const defaultState = fromJS({
  focused: false,
  list: []
});

export default (state = defaultState, action) => {
  switch (action.type) {
    default:
      return state;
    case actionTypes.HEADER_SEARCH_FOCUS:
      return state.set('focused', true);
    case actionTypes.HEADER_SEARCH_BLUR:
      return state.set('focused', false);
    case actionTypes.CHANGE_LIST:
      return state.set('list', action.data);
  }
}