var n = require('../../lib/navitia');
require('dotenv').load()
var moment = require('moment');

var date = moment(Date.now()).format('YYYYMMDDTHHmm');
n.query({apikey: process.env.apikey, debug: process.env.debug})
  .region('fr-idf')
  .isochrone('coords/2.2627899;48.984186', {
    datetime: date,
    max_duration: 1200
  })
  .end()
  .on('ready', function (res) {
    console.log('found #' + res.resource.length, ' isochrones.');
  });
