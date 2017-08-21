import fetch from 'dva/fetch';
import { Toast } from 'antd-mobile';


function parseJSON(response) {
  return response.json();
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */
export default function request(url, options) {
  Toast.loading('加载中...', 0); // 为了展示加载层
  return fetch(url, {
    headers: {
      Accept: 'application/json, text/javascript, */*; q=0.01',
      'Content-Type': 'application/json; charset=UTF-8',
      'Employee-Token': localStorage.getItem('token'), // eslint-disable-line
    },
    ...options,
  })
    // .then(checkStatus)
    .then(parseJSON)
    .then(data => data)
    .catch(err => err);
}
