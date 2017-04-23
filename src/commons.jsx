import 'whatwg-fetch';

function urlString (obj) {
  return '?'+Object.keys(obj).map(k => k + '=' + encodeURIComponent(obj[k])).join('&')
}

function makeParameters(method){
  return {
    method: method,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  };
}

export function getApi(url, query = {}, callback) {
  url = Object.keys(query).length ? url + urlString(query) : url;
  fetch(url, makeParameters("get")).then(function(response) {
    return response.json()
  }).then(function(result) {
    callback(result);
  });
  // TODO return error on failure
}
