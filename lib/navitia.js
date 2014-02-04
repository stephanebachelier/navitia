var req = require('./utils/request');
var _ = require('lodash');

var endpoint = 'http://api.navitia.io/v1';

var navitia = function () {};

var pagerOptions = ['start_page', 'count'];

var buildQuery = function (options) {
  var args = [];
  for (var name in options) {
    args.push(name + '=' + options[name]);
  }
  return args.length ? '?' + args.join('&') : '';
};

navitia.prototype = {
  query: function () {
    this.tokens = [endpoint];
    this.resource = '';
    this.params = {};
    return this;
  },
  /**
   * `options`: pagination options for the queries
   * which support it.
   */
  end: function (options) {
    var url = this.tokens.join('/');
    var args = _.extend({}, this.params, _.pick(options, pagerOptions));
    if (args) {
      url += buildQuery(args);
    }
    console.log(url);
    return req.request(url, this.resource);
  }
};

var resources = ['regions', 'region', 'lines', 'journey'];

// attach resource to navitia prototype
resources.forEach(function (name) {
  navitia.prototype[name] = require('./resource/' + name);
});

var sugar = ['isochrone'];

// attach resource to navitia prototype
sugar.forEach(function (name) {
  navitia.prototype[name] = require('./sugar/' + name);
});

module.exports = navitia;
