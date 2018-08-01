import {fromJS} from 'immutable';
import * as actionTypes from './actionTypes';

const defaultState = fromJS({
  topicList: [],
  contentList: []
});

export default (state = defaultState, action) => {
  switch (action.type) {
    default:
      return state;
    case actionTypes.CHANGE_TOPIC_LIST:
      return state.merge({
        topicList: fromJS(action.topicList),
        contentList: fromJS(action.contentList)
      });
    case actionTypes.ADD_CONTENT_LIST:
      console.log(state.get('contentList').concat(action.list));
      return state.set('contentList', state.get('contentList').concat(action.list));
  }
}