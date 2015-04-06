var n = require('../../lib/navitia');
require('dotenv').load()
var moment = require('moment');
var descriptor = require('./descriptor');
var pagination = require('./pagination');

n.query({apikey: process.env.apikey, debug: process.env.debug})
  .region('fr-idf')
  .lines()
  .end()
  .on('ready', function (res) {
    var nbResults = res.pagination.total_result;

    pagination(res);

    if (nbResults > 0) {
      descriptor(res.resource[0]);
    }

    console.assert(res.resource.length === res.pagination.items_on_page);
  });
