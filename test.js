var navitia = require('./index');

n = new navitia();

n.regions().query().on('ready', function (res) {
  console.log('ready', res.resource);
});

n.region('paris').query().on('ready', function (res) {
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
