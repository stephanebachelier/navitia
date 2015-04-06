var n = require('../../lib/navitia');
require('dotenv').load()
var moment = require('moment');
var descriptor = require('./descriptor');

n.query({apikey: process.env.apikey, debug: process.env.debug})
  .region('fr-idf')
  .lines('line:TRN:DUA810801043')
  .end()
  .on('ready', function (res) {
    descriptor(res.resource[0]);
    console.assert(res.resource.length === res.pagination.items_on_page);
  });
