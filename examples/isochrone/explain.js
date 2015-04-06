var n = require('../../lib/navitia');
require('dotenv').load()
var moment = require('moment');

var date = moment(Date.now()).format('YYYYMMDDTHHmm');
n.query({apikey: process.env.apikey, debug: process.env.debug})
  .region('fr-idf')
  .isochrone('coords/2.2627899;48.984186', {
    datetime: date,
    max_duration: 1500
  })
  .end()
  .on('ready', function (res) {
    if (res.statusCode === 200) {
      res.resource.map(function (item) {
        console.log(item.to.id, item.to.name);
      });
    }
  });
