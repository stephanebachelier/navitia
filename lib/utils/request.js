var http = require('http');
var Response = require('./response');

var errorCallback = function (err) {
  if (err) {
    throw new Error(err);
  }
};

module.exports = {
  request: function (url, resource, callback) {
    console.log('calling', url, resource);
    var response = new Response(url, resource);
    http.get(url, response.read.bind(response))
      .on('error', errorCallback);
    return response;
  }
};
