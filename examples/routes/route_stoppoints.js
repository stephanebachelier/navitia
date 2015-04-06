var n = require('../../lib/navitia');
require('dotenv').load()

n.query({apikey: process.env.apikey, debug: process.env.debug })
  .region('fr-idf')
  .routes('route:TRN:DUA800853023_R')
  .stoppoints()
  .end()
  .on('ready', function (res) {
    console.log('found #' + res.resource.length, 'stop points.');
    res.resource.forEach(function (sp) {
      console.log(' --------------------------- ');
      console.log(' * id:', sp.id);
      console.log(' * name:', sp.name);
      console.log(' * address:', sp.address.label);
    });
  });
