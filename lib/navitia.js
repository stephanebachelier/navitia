var req = require('./utils/request');


var endpoint = 'http://api.navitia.io/v1';

var navitia = function () {
  this.tokens = [endpoint, 'coverage'];
  this.resource = '';
};

navitia.prototype = {
  query: function () {
    var url = this.tokens.join('/');
    return req.request(url, this.resource);
  }
};

var resources = ['regions', 'region'];

// attach resource to navitia prototype
resources.forEach(function (name) {
  navitia.prototype[name] = require('./resource/' + name);
});

module.exports = navitia;
