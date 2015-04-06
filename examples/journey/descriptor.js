var moment = require('moment');

module.exports = function (journey, index) {
  console.log(' - #' + index + ' -----------------------------');
  console.log('departure', moment(journey.departure_date_time, 'YYYYMMDDTHHmm').format('YYYY/MM/DD - hh:mm:ss A'));
  console.log('arrival', moment(journey.arrival_date_time, 'YYYYMMDDTHHmm').format('YYYY/MM/DD - hh:mm:ss A'));
  console.log('duration', moment.duration(journey.duration, 'seconds').minutes() + 'min');
  console.log('nb of transfers', journey.nb_transfers);
  var sections = journey.sections;
  if (sections && sections.length > 0) {
    console.log('nb of steps', sections.length);
    journey.sections.forEach(function (section) {
      console.log(' ---------------------------------');
      console.log(' *', section.type + (section.mode ? ' (' + section.mode + ')': ''));
      if (section.from) {
        console.log(' * from:', section.from.name);
      }
      if (section.to) {
        console.log(' * to:', section.to.name);
      }
      console.log(' * duration:', moment.duration(section.duration, 'seconds').minutes(true) + 'min');
    });
  }

  if (journey.to) {
    console.log(' * to:', journey.to.name);
  }
}
