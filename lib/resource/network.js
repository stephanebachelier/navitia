module.exports = function (id) {
  this.tokens.push('networks');
  if (id) {
    this.tokens.push(id);
  }

  this.resource = 'networks';

  return this;
};
