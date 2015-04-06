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

var request = require('request');

module.exports = {
  request: function (req, resource, params, options) {
    var opts = T.pick.apply(null, [options].concat(pagerOptions)),
        args = T.extend({}, params, opts);

    var url = 'https://' + req.hostname + '/' + req.path;

    if (args) {
      url += buildQuery(args);
    }

    var debug = true; // set debug to true by default
    if (req.debug !== undefined) {
        // support all this `falsy` values
        if (-1 !== [0, '0', 'false', false, null, undefined].indexOf(req.debug)) {
          debug = false;
        }
    }
    if (debug) {
      request.debug = true;
      require('request-debug')(request);
    }

    console.log('calling %s [%s]', resource, url);
    var response = new Response(resource);
    response.on('error', function (error) {
      console.log('Response error: code ' + error.statusCode);
      console.log('Error message', error.error);
    });

    request.get(url, {
        auth: {
          user: req.apikey,
          pass: ''
        }
      },
      function (error, resp, body) {
        if (error) {
          console.log(error);
          response.emit('error', {
            statusCode: this.statusCode,
            error: error.toString()
          });
          return;
        }

        response.statusCode = resp.statusCode;
        response.parse(body);
      }
    ).on('error', errorCallback);

    return response;
  }
};
