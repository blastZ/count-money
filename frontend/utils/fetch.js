import fetch from 'isomorphic-unfetch';
import Router from 'next/router';

export const post = (url, config) => {
  return fetch(`http://127.0.0.1:1337/api/v1${url}`, {
    method: 'POST',
    credentials: 'include',
    ...config
  }).then(res => {
    if (res.status === 403) {
      Router.push('/login');
    }

    if (res.status === 200) {
      return res.json();
    }
  });
};
