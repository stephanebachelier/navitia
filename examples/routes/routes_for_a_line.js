var n = require(process.cwd() + '/dist/navitia');

n.query()
  .region('paris')
  .lines('line:TRN:DUA800853028')
  .routes()
  .end()
  .on('ready', function (res) {
    console.log('found #' + res.resource.length, 'routes.');
    res.resource.forEach(function (route) {
    console.log(route.name, route.id);
    });
  });

