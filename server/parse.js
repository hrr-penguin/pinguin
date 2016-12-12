
window.feednami = {};

feednami.load = function(url, callback) {
  let apiRoot = 'localhost:8000';
  let feedUrl = url;

  let qs = 'url=' + encodeURIComponent(feedUrl);

  let url = apiRoot + '/feeds/load?' + qs;

  if (window.XDomainRequest) {
    let script = document.createElement('script');
    let callbackName = 'jsonp_callback_' + new Date().getTime() + '_' + Math.round(1000000 * Math.random());
    url += '&jsonp_callback=' + callbackName;

    window[callbackName] = function(data) {
      callback(data);
      document.body.removeChild(script);
      window[callbackName] = null;
      try {
        delete window[callbackName];
      } catch (e) {

      }
    };
    script.src = url;
    document.body.appendChild(script);
  } else {
    let req = new XMLHttpRequest();
    req.onreadystatechange = function() {
      if (req.readyState === 4) {
        callback(JSON.parse(req.responseText));
      }
    };
    req.open('GET', url);
    req.send();
  }
};
