var req = require('./utils/request');

var navitia = {
  _endpoint: 'http://api.navitia.io/v1/',

  query: function () {
    this.tokens = [];
    this.resource = '';
    this.params = {};
    return this;
  },
  /**
   * `options`: pagination options for the queries
   * which support it.
   */
  end: function (options) {
    return req.request(
      this._endpoint + this.tokens.join('/'),
      this.resource,
      this.params,
      options || {}
    );
  }
};

var resources = ['regions', 'region', 'lines', 'journey'];

// attach resource to navitia prototype
resources.forEach(function (name) {
  navitia[name] = require('./resource/' + name);
});

var sugar = ['isochrone'];

// attach resource to navitia prototype
sugar.forEach(function (name) {
  navitia[name] = require('./sugar/' + name);
});

module.exports = navitia;
