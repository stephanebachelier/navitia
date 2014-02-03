var req = require('./utils/request');
var _ = require('lodash');

var endpoint = 'http://api.navitia.io/v1';

var navitia = function () {};

var pagerOptions = ['start_page', 'count'];

var buildPagerOptions = function (options) {
  var args = [];
  for (var name in _.pick(options, pagerOptions)) {
    args.push(name + '=' + options[name]);
  }
  return args.length ? '?' + args.join('&') : '';
};

navitia.prototype = {
  query: function () {
    this.tokens = [endpoint, 'coverage'];
    this.resource = '';

    return this;
  },
  /**
   * `options`: pagination options for the queries
   * which support it.
   */
  end: function (options) {
    var url = this.tokens.join('/');
    if (options) {
      url += buildPagerOptions(options);
    }
    return req.request(url, this.resource);
  }
};

var resources = ['regions', 'region', 'lines'];

// attach resource to navitia prototype
resources.forEach(function (name) {
  navitia.prototype[name] = require('./resource/' + name);
});

module.exports = navitia;
