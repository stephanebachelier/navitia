module.exports = function (id) {
  this.tokens.push('routes');
  if (id) {
    this.tokens.push(id);
  }

  this.resource = 'routes';

  return this;
};
