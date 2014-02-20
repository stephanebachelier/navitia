var n = require(process.cwd() + '/dist/navitia');

n.query()
  .region('paris')
  .network('network:TN')
  .lines('line:TRN:DUA800850013')
  .stoppoints()
  .end()
  .on('ready', function (res) {
    console.log('found #' + res.resource.length, ' stop points.');
    console.log(res.resource.map(function (stoppoint) { return stoppoint.name; }));
  });