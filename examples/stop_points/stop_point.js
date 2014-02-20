var n = require(process.cwd() + '/dist/navitia');

n.query()
  .region('paris')
  .stoppoints('stop_point:TRN:SP:DUA8711611')
  .end()
  .on('ready', function (res) {
    console.log('found #' + res.resource.length, ' stop points.');
    var sp = res.resource[0];
    console.log(' * name', sp.name);
    console.log(' * coord', sp.coord.lat, sp.coord.lon);

  });
