import {fromJS} from 'immutable';
import * as actionTypes from './actionTypes';

const defaultState = fromJS({
  title: '',
  content: ''
});

export default (state = defaultState, action) => {
  switch (action.type) {
    default:
      return state;
    case actionTypes.CHANGE_DETAIL_ACTION:
      return state.merge({
        title: action.title,
        content: action.content
      })
  }
};