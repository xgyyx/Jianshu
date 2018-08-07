import axios from 'axios';
import * as actionTypes from './actionTypes';

const changeLoginStateAction = (value) => ({
  type: actionTypes.CHANGE_LOGIN_STATE_ACTION,
  value
});

export const loginAction = (account, password) => (
  (dispatch) => {
    axios.get('/api/login.json?account=' + account + '&password=' + password)
      .then((res) => {
        const result = res.data.data;
        if (result) {
          dispatch(changeLoginStateAction(true));
        } else {
          alert('登录失败');
        }
      })
      .catch((err) => {
        console.log(err);
      })
  }
);

export const logoutAction = () => ({
  type: actionTypes.LOGOUT_ACTION,
  value: false
});