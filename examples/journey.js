var navitia = require('../dist/navitia');

n = new navitia();
/*
// use /v1/journey
n.query()
  .journey(null, {
    from: '2.2627899;48.984186',
    to: '2.363871;48.8673191',
    datetime: '20140204T0800'
    //max_duration: 1200
  })
  .end()
  .on('ready', function (res) {
    console.log('found #' + res.resource.length, ' journeys.');
  });

*/
// use /v1/coverage/<resource>/journey
var resource = 'coords/2.2627899;48.984186'
n.query()
  .region('paris')
  .journey(resource, {
    datetime: '20140204T0800',
    max_duration: 1200
  })
  .end()
  .on('ready', function (res) {
    console.log('found #' + res.resource.length, ' journeys found (aka isochrones).');
  });
