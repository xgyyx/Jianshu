import {fromJS} from 'immutable';
import * as actionTypes from './actionTypes';

const defaultState = fromJS({
  topicList: []
});

export default (state = defaultState, action) => {
  switch (action.type) {
    default:
      return state;
    case actionTypes.CHANGE_TOPIC_LIST:
      return state.set('topicList', action.data)
  }
}