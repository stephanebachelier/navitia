var n = require(process.cwd() + '/dist/navitia');

n.query()
  .region('paris')
  .isochrone('coords/2.2627899;48.984186', {
    datetime: '20140204T0800',
    max_duration: 1500
  })
  .end()
  .on('ready', function (res) {
    res.resource.map(function (item) {
      console.log(item.to.embedded_type, item.to.id, item.to.name);
    });
  });
