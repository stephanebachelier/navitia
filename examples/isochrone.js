var navitia = require('../dist/navitia');

n = new navitia();

n.query()
  .region('paris')
  .isochrone('coords/2.2627899;48.984186', {
    datetime: '20140204T0800',
    max_duration: 1200
  })
  .end()
  .on('ready', function (res) {
    console.log('found #' + res.resource.length, ' isochrones.');
  });
