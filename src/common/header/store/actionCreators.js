import * as actionTypes from './actionTypes';
import axios from 'axios';
import {fromJS} from 'immutable';

const changeListAction = (data) => ({
  type: actionTypes.CHANGE_LIST,
  data: fromJS(data)
});

export const headerSearchFocusAction = () => ({
  type: actionTypes.HEADER_SEARCH_FOCUS
});

export const headerSearchBlurAction = () => ({
  type: actionTypes.HEADER_SEARCH_BLUR
});

export const getList = () => ((dispatch) => {
  axios.get('/api/headerList.json')
    .then((res) => {
      const data = res.data;
      dispatch(changeListAction(data.data));
    })
    .catch((e) => {
      console.log(e);
    })
});