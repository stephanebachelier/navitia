var n = require(process.cwd() + '/dist/navitia');

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
