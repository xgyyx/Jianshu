import {fromJS} from 'immutable';
import * as actionTypes from './actionTypes';

const defaultState = fromJS({
  topicList: [],
  contentList: [],
  showScroll: false
});

const changeTopicList = (state, action) => (
  state.merge({
    topicList: fromJS(action.topicList),
    contentList: fromJS(action.contentList)
  })
);

export default (state = defaultState, action) => {
  switch (action.type) {
    default:
      return state;
    case actionTypes.CHANGE_TOPIC_LIST:
      return changeTopicList(state, action);
    case actionTypes.ADD_CONTENT_LIST:
      return state.set('contentList', state.get('contentList').concat(action.list));
    case actionTypes.TOGGLE_SHOW_TOP_CHANGE:
      return state.set('showScroll', action.flag);
  }
}