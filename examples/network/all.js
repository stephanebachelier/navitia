var n = require(process.cwd() + '/dist/navitia');

n.query()
  .region('paris')
  .network()
  .end()
  .on('ready', function (res) {
    console.log('found #' + res.resource.length, ' networks.');
  });
