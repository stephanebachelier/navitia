module.exports = function (id) {
  this.tokens.push('stop_points');
  if (id) {
    this.tokens.push(id);
  }

  this.resource = 'stop_points';

  return this;
};
