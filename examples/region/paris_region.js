var n = require(process.cwd() + '/dist/navitia');

n.query().region('paris').end().on('ready', function (res) {
  console.log('ready', res.resource);
});
