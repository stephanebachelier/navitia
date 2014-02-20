var n = require(process.cwd() + '/dist/navitia');

n.query()
  .region('paris')
  .network('network:TN')
  .lines()
  .end()
  .on('ready', function (res) {
    console.log('found #' + res.resource.length, ' lines.');
    res.resource.map(function (line) {
      console.log(line.id, line.code, line.name, line.color);
    });
  });
