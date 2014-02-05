var n = require(process.cwd() + '/dist/navitia');

n.query().region('paris').lines('line:RTP:870212').end().on('ready', function (res) {
  console.log('paris line', res.statusCode);
  var line = res.resource[0];
  console.log('> line name ?', line.name);
  console.log('> line network ?', line.network.name);
  console.log('> line - routes count: #', line.routes.length);
  console.assert(res.resource.length, res.pagination.items_on_page);
});

