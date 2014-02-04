module.exports = function (resource, params) {
  if (resource) {
    // use resource journey route
    this.tokens.push(resource);
  }
  else {
    // use general route
    if (!params.from) {
      throw new Error('missing required <from> parameter.');
    }
  }

  this.tokens.push('journeys');
  this.resource = 'journeys';

  if (!params.datetime) {
    throw new Error('missing required <datetime> parameter.');
  }

  this.params = params;

  return this;
};
