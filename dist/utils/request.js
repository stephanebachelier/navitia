var http = require('http');
var Response = require('./response');
var T = require('../utils/toolkit');

var errorCallback = function (err) {
  if (err) {
    throw new Error(err);
  }
};

var pagerOptions = ['start_page', 'count'];

var buildQuery = function (options) {
  var args = [];
  for (var name in options) {
    if (options[name]) args.push(name + '=' + options[name]);
  }
  return args.length ? '?' + args.join('&') : '';
};


module.exports = {
  request: function (url, resource, params, options) {
    var opts = T.pick.apply(null, [options].concat(pagerOptions)),
        args = T.extend({}, params, opts);

    if (args) {
      url += buildQuery(args);
    }
    console.log('calling', url, resource);
    var response = new Response(url, resource);
    http.get(url, response.read.bind(response))
      .on('error', errorCallback);
    return response;
  }
};
