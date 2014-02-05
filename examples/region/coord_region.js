var n = require(process.cwd() + '/dist/navitia');

// will fail on this query -> only string supported

var coords = {
  lng: 2.2627899,
  lat: 48.984186
};

n.query().region(coords).end().on('ready', function (res) {
  console.log('ready', res.resource);
});
