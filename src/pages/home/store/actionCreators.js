import * as actionTypes from './actionTypes';
import {fromJS} from 'immutable';
import axios from 'axios';

const changeTopicListAction = (data) => ({
  type: actionTypes.CHANGE_TOPIC_LIST,
  data: fromJS(data)
});

export const getTopicListAction = () => ((dispatch) => {
  axios.get('/api/topicList.json')
    .then((res) => {
      dispatch(changeTopicListAction(res.data.data));
    })
    .catch((e) => {
      console.log(e);
    })
});