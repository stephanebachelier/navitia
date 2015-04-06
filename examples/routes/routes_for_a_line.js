var n = require('../../lib/navitia');
require('dotenv').load()

n.query({apikey: process.env.apikey, debug: process.env.debug })
  .region('fr-idf')
  .lines('line:TRN:DUA800853028')
  .routes()
  .end()
  .on('ready', function (res) {
    console.log('found #' + res.resource.length, 'routes.');
    res.resource.forEach(function (route) {
      console.log(' --------------------------- ');
      console.log(' * id:', route.id);
      console.log(' * name:', route.name);
      if (route.direction) {
        console.log(' * direction');
        var direction = route.direction;
        console.log('   + id', direction.id);
        console.log('   + name', direction.name);
        var type = direction.embedded_type;
        console.log('   + informations:');
        console.log('     - type:', type);
        console.log('     - id:', direction[type].id);
        console.log('     - name:', direction[type].name);
      }
    });
  });
