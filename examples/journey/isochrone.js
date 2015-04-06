var n = require('../../lib/navitia');
require('dotenv').load()
var moment = require('moment');
var descriptor = require('./descriptor');

var date = moment(Date.now()).format('YYYYMMDDTHHmm');
// use /v1/coverage/<resource>/journey
var resource = 'coords/2.2627899;48.984186'
n.query({apikey: process.env.apikey, debug: process.env.debug})
  .region('fr-idf')
  .journey(resource, {
    datetime: date,
    max_duration: 1500
  })
  .end()
  .on('ready', function (res) {
    console.log('found #' + res.resource.length, ' journeys found (aka isochrones).');
    res.resource.forEach(descriptor);
  });
