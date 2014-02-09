var n = require(process.cwd() + '/dist/navitia');

n.query()
  .region('paris')
  .network('network:TN')
  .end()
  .on('ready', function (res) {
    console.log(res.resource);
  });
