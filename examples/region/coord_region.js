var n = require('../../lib/navitia');
require('dotenv').load()

// will fail on this query -> only string supported

var coords = {
  lng: 2.2627899,
  lat: 48.984186
};

n.query({apikey: process.env.apikey, debug: process.env.debug })
  .region(coords)
  .end()
  .on('ready', function (res) {
    console.log('Not supported anymore');
  });
