var n = require(process.cwd() + '/dist/navitia');

n.query().regions().end().on('ready', function (res) {
  console.log('ready', res.resource);
});
