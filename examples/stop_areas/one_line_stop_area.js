var n = require('../../lib/navitia');
require('dotenv').load()

n.query({apikey: process.env.apikey, debug: process.env.debug })
  .region('fr-idf')
  .network('network:TN')
  .lines('line:TRN:DUA800850102')
  .stopareas()
  .end()
  .on('ready', function (res) {
    console.log('found #' + res.resource.length, ' stop areas.');
    res.resource.map(function (stoparea) {
      console.log(' --------------------------------------');
      console.log(' * id:', stoparea.id);
      console.log(' * label:', stoparea.label);
      console.log(' * lat:', stoparea.coord.lat);
      console.log(' * lon:', stoparea.coord.lon);
    });
  });
