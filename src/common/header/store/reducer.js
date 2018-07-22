import * as actionTypes from './actionTypes';

const defaultState = {
  focused: false
};

export default (state = defaultState, action) => {
  if (action.type === actionTypes.HEADER_SEARCH_FOCUS) {
    return {
      focused: true
    }
  }
  if (action.type === actionTypes.HEADER_SEARCH_BLUR) {
    return {
      focused: false
    }
  }
  return state;
}