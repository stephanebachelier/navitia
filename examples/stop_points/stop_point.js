var n = require('../../lib/navitia');
require('dotenv').load()

n.query({apikey: process.env.apikey, debug: process.env.debug })
  .region('fr-idf')
  .stoppoints('stop_point:TRN:SP:DUA8711611')
  .end()
  .on('ready', function (res) {
    console.log('found #' + res.resource.length, ' stop points.');
    var sp = res.resource[0];
    console.log(' * id:', sp.id);
    console.log(' * name:', sp.name);
    console.log(' * address:', sp.address.label);
    console.log(' * coord:', sp.coord.lat, sp.coord.lon);
  });
