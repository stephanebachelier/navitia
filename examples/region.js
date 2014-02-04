var navitia = require('../dist/navitia');

n = new navitia();

n.query().regions().end().on('ready', function (res) {
  console.log('ready', res.resource);
});

n.query().region('paris').end().on('ready', function (res) {
  console.log('ready', res.resource);
});

// will fail on this query -> only string supported
/*
var coords = {
  lng: 2.2627899,
  lat: 48.984186
};
n.region(coords).query().on('ready', function (res) {
  console.log('ready', res.resource);
});
*/
