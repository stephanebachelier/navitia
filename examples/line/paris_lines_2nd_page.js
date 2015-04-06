var n = require('../../lib/navitia');
require('dotenv').load()
var moment = require('moment');
var descriptor = require('./descriptor');
var pagination = require('./pagination');

// query the second page for paris lines
n.query({apikey: process.env.apikey, debug: process.env.debug})
  .region('fr-idf')
  .lines()
  .end({start_page:1, count:50})
  .on('ready', function (res) {
    pagination(res);
    console.assert(res.resource.length === 50);
    console.assert(res.resource.length === res.pagination.items_on_page);
  });
