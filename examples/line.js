var navitia = require('../dist/navitia');

n = new navitia();
/*
n.query().region('paris').lines().end().on('ready', function (res) {
  console.log('paris line', res.statusCode);
  console.log('> pagination ?', res.pagination);
  console.log('> total #', res.pagination.total_result);
  console.assert(res.resource.length, res.pagination.items_on_page);
});

n.query().region('paris').lines('line:RTP:870212').end().on('ready', function (res) {
  console.log('paris line', res.statusCode);
  var line = res.resource[0];
  console.log('> line name ?', line.name);
  console.log('> line network ?', line.network.name);
  console.log('> line - routes count: #', line.routes.length);
  console.assert(res.resource.length, res.pagination.items_on_page);
});

// query the 50 items for paris lines
n.query().region('paris').lines().end({count:50}).on('ready', function (res) {
  console.log('paris line', res.statusCode);
  console.log('> pagination ?', res.pagination);
  console.log('> pagination.items_on_page ?', res.pagination.items_on_page);
  console.assert(res.resource.length, 50);
  console.assert(res.resource.length, res.pagination.items_on_page);
});
*/

// query the second page for paris lines
n.query().region('paris').lines().end({start_page:1, count:50}).on('ready', function (res) {
  console.log('paris line', res.statusCode);
  console.log('> pagination ?', res.pagination);
  console.log('> pagination.items_on_page ?', res.pagination.items_on_page);
  console.assert(res.resource.length, 50);
  console.assert(res.resource.length, res.pagination.items_on_page);
});

// query the last page for paris lines
n.query().region('paris').lines().end({start_page:2, count:50}).on('ready', function (res) {
  console.log('paris line', res.statusCode);
  console.log('> pagination ?', res.pagination);
  console.log('> pagination.items_on_page ?', res.pagination.items_on_page);
  console.assert(res.resource.length, 50);
  console.assert(res.resource.length, res.pagination.items_on_page);
});
