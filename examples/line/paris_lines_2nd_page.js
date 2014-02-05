var n = require(process.cwd() + '/dist/navitia');

// query the second page for paris lines
n.query().region('paris').lines().end({start_page:1, count:50}).on('ready', function (res) {
  console.log('paris line', res.statusCode);
  console.log('> pagination ?', res.pagination);
  console.log('> pagination.items_on_page ?', res.pagination.items_on_page);
  console.assert(res.resource.length, 50);
  console.assert(res.resource.length, res.pagination.items_on_page);
});

