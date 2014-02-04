module.exports = function (resource_path, params) {
  this.tokens.push(resource_path);
  this.tokens.push('journeys');
  this.resource = 'journeys';

  this.params = params;

  return this;
};
