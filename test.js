var navitia = require('./index');

n = new navitia();

n.regions().query().on('ready', function (res) {
  console.log('ready', res.resource);
});

n.region('paris').query().on('ready', function (res) {
  console.log('ready', res.resource);
});
