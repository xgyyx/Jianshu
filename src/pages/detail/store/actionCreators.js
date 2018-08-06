import axios from 'axios';
import * as actionTypes from './actionTypes';

const changeDetailAction = (title, content) => ({
  type: actionTypes.CHANGE_DETAIL_ACTION,
  title,
  content
});

export const getDetail = (id) => (
  (dispatch) => {
    axios.get('/api/detail.json?id=' + id)
      .then((res) => {
        const data = res.data.data;
        dispatch(changeDetailAction(data.title, data.content));
      })
      .catch((err) => {
        console.log(err);
      })
  }
);