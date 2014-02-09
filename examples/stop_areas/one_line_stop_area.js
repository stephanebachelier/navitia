var n = require(process.cwd() + '/dist/navitia');

n.query()
  .region('paris')
  .network('network:TN')
  .lines('line:TRN:DUA800850013')
  .stopareas()
  .end()
  .on('ready', function (res) {
    console.log('found #' + res.resource.length, ' stop areas.');
    console.log(res.resource.map(function (stoparea) { return stoparea.name; }));
  });
