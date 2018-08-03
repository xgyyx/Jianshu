import * as actionTypes from './actionTypes';
import axios from 'axios';
import {fromJS} from 'immutable';

const changeTopicListAction = (data) => ({
  type: actionTypes.CHANGE_TOPIC_LIST,
  topicList: data.topicList,
  contentList: data.articleList,
  bannerPic: data.bannerPic
});

const addContentListAction = (data) => ({
  type: actionTypes.ADD_CONTENT_LIST,
  list: fromJS(data.articleList)
});

export const getTopicListAction = () => ((dispatch) => {
  axios.get('/api/home.json')
    .then((res) => {
      dispatch(changeTopicListAction(res.data.data));
    })
    .catch((e) => {
      console.log(e);
    })
});

export const getMoreListAction = () => ((dispatch) => {
  axios.get('/api/contentList.json')
    .then((res) => {
      dispatch(addContentListAction(res.data.data));
    })
    .catch((e) => {
      console.log(e);
    });
});

export const toggleShowTopChangeAction = (flag) => ({
  type: actionTypes.TOGGLE_SHOW_TOP_CHANGE,
  flag
});