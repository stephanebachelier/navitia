var n = require('../../lib/navitia');
require('dotenv').load()

n.query({apikey: process.env.apikey, debug: process.env.debug})
  .region('fr-idf')
  .network()
  .end()
  .on('ready', function (res) {
    console.log('found #' + res.resource.length, ' networks.');
    res.resource.forEach(function (network) {
      console.log(' --------------------------- ');
      console.log(' * id:', network.id)
      console.log(' * name:', network.name)
    });
  });
