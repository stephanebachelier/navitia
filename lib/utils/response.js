var events = require('events');
var util = require('util');

var Response = function (name) {
  this.name = name;
  events.EventEmitter.call(this);
};


util.inherits(Response, events.EventEmitter);


Response.prototype.parse = function (body) {
  try {
    var json = JSON.parse(body);
    var res = {statusCode: this.statusCode};

    if (this.statusCode >= 400) {
      // error
      res.error = json.error ? json.error.message : json.message || 'An error occured.';
    }
    else {
      // response ok
      res.resource = json[this.name] || null;
      res.pagination = json.pagination || false;
      res.links = json.links || [];
    }
    this.emit('ready', res);

    json = null;

  } catch (e) {
    this.emit('error', {
      statusCode: this.statusCode,
      error: e.toString() || ''
    });
  }
};

Response.prototype.read = function (res) {
  this.statusCode = res.statusCode;
  var body = '';

  res.on('data', function (chunk) {
    body += chunk;
  });

  res.on('end', function () {
    this.parse(body);
  }.bind(this));
};

module.exports = Response;
