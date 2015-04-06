var n = require('../../lib/navitia');
require('dotenv').load()

n.query({apikey: process.env.apikey, debug: process.env.debug })
  .region('fr-idf')
  .routes('route:TRN:DUA800853023_R')
  .stopareas()
  .end()
  .on('ready', function (res) {
    console.log('found #' + res.resource.length, 'stopareas.');
    res.resource.forEach(function (sa) {
      console.log(' --------------------------- ');
      console.log(' * id:', sa.id);
      console.log(' * name:', sa.name);
      console.log(' * city:', sa.administrative_regions[0].name, sa.administrative_regions[0].zip_code);
    });
  });
