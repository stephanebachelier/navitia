var n = require('../../lib/navitia');
require('dotenv').load()
var moment = require('moment');
var descriptor = require('./descriptor');

var date = moment(Date.now()).format('YYYYMMDDTHHmm');

// use /v1/journey
n.query({apikey: process.env.apikey, debug: process.env.debug})
  .journey(null, {
    from: '2.2627899;48.984186',
    to: '2.363871;48.8673191',
    datetime: date
  })
  .end()
  .on('ready', function (res) {
    console.log('found #' + res.resource.length, ' journeys.');
    res.resource.forEach(descriptor);
  });
