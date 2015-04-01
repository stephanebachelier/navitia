var req = require('./utils/request');

var navitia = {
  _endpoint: 'api.navitia.io',
  _version: 'v1',
  _apikey: null,

  query: function (options) {
    options = options || {};
    if (options.apikey) {
      this._apikey = options.apikey;
    }

    this._debug = options.debug || false;

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
      {
        hostname: this._endpoint,
        path: [this._version].concat(this.tokens).join('/'),
        apikey: this._apikey,
        debug: this._debug || false
      },
      this.resource,
      this.params,
      options || {}
    );
  }
};

var resources = ['regions', 'region', 'lines', 'journey', 'network', 'stopareas', 'stoppoints', 'routes'];

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
