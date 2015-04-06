var n = require('../../lib/navitia');
require('dotenv').load()
var moment = require('moment');

n.query({apikey: process.env.apikey, debug: process.env.debug})
  .region('fr-idf')
  .network('network:TN')
  .lines()
  .end()
  .on('ready', function (res) {
    console.log('found #' + res.resource.length, ' lines.');
    res.resource.forEach(function (line) {
      console.log(' --------------------------- ');
      console.log(' * id:', line.id);
      console.log(' * name:', line.name);
      console.log(' * color: #' + line.color);
      console.log(' * opening_time: ', moment(line.opening_time, 'HHmmss').format('HH:mm'));
      console.log(' * closing_time: ', moment(line.closing_time, 'HHmmss').format('HH:mm'));
      //console.log(line);
    });
  });
