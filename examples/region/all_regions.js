var n = require('../../lib/navitia');
require('dotenv').load()

n.query({apikey: process.env.apikey, debug: process.env.debug })
  .regions()
  .end()
  .on('ready', function (res) {
    if (!res.resource) {
      console.log('No regions found');
      return;
    }
    console.log('Found #' + res.resource.length, 'regions.');
    res.resource.forEach(function (region) {
      console.log(' --------------------------- ');
      console.log(' * id:', region.id);
      console.log(' * start_production_date:', region.start_production_date);
      console.log(' * end_production_date:', region.end_production_date);
    })
  });
