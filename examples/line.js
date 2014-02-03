var navitia = require('../index');

n = new navitia();

n.region('paris').lines().query().on('ready', function (res) {
  console.log('paris line', res.statusCode);
  console.log('> pagination ?', res.pagination);
  console.log('> total #', res.pagination.total_result);
  console.assert(res.resource.length, res.pagination.items_on_page);
});

//

n.region('paris').lines('line:RTP:870212').query().on('ready', function (res) {
  console.log('paris line', res.statusCode);
  var line = res.resource[0];
  console.log('> line name ?', line.name);
  console.log('> line network ?', line.network.name);
  console.log('> line - routes count: #', line.routes.length);
  console.assert(res.resource.length, res.pagination.items_on_page);
});
