var n = require(process.cwd() + '/dist/navitia');

n.query()
  .region('paris')
  .routes('route:TRN:DUA800853023_R')
  .stoppoints()
  .end()
  .on('ready', function (res) {
    console.log('found #' + res.resource.length, 'stopareas.');
    res.resource.forEach(function (sp) {
    console.log(sp);
    });
  });

