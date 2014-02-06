module.exports = function (id) {
  this.tokens.push('lines');
  if (id) {
    this.tokens.push(id);
  }

  this.resource = 'lines';

  return this;
};
