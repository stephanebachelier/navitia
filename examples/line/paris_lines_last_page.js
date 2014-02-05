var n = require(process.cwd() + '/dist/navitia');

// query the last page for paris lines
n.query().region('paris').lines().end({start_page:2, count:50}).on('ready', function (res) {
  console.log('paris line', res.statusCode);
  console.log('> pagination ?', res.pagination);
  console.log('> pagination.items_on_page ?', res.pagination.items_on_page);
  console.assert(res.resource.length, 8);
  console.assert(res.resource.length, res.pagination.items_on_page);
});
