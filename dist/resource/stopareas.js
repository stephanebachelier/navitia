module.exports = function (id) {
  this.tokens.push('stop_areas');
  if (id) {
    this.tokens.push(id);
  }

  this.resource = 'stop_areas';

  return this;
};
