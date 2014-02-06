module.exports = function (region) {
  var param;
  if (typeof(region) === 'string') {
    param = region;
  }
  else {
    if (typeof(region) === 'object') {
      if (region.lng && region.lat) {
        param = region.lng + ';' + region.lat;
      }
    }
  }
  if (param === void 0) {
    throw new Error('Unsupported type for region.');
  }
  this.tokens.push('coverage');
  this.tokens.push(param);

  this.resource = 'regions';

  return this;
};
