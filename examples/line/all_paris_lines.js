var n = require(process.cwd() + '/dist/navitia');

n.query().region('paris').lines().end().on('ready', function (res) {
  console.log('paris line', res.statusCode);
  console.log('> pagination ?', res.pagination);
  console.log('> total #', res.pagination.total_result);
  console.assert(res.resource.length, res.pagination.items_on_page);
});

