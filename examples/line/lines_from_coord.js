var n = require('../../lib/navitia');
require('dotenv').load()
var moment = require('moment');

// will fail on this query -> only string supported

var coords = {
  lng: 2.2627899,
  lat: 48.984186
};

n.query({apikey: process.env.apikey, debug: process.env.debug})
  .region(coords)
  .lines()
  .end()
  .on('ready', function (res) {
    console.error('This example does not work anymore.');
  });
