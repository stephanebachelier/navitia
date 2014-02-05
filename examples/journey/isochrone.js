var n = require(process.cwd() + '/dist/navitia');

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
