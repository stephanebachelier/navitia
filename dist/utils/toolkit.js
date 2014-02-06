module.exports = {
  extend: function (obj) {
    var sources = Array.prototype.slice.call(arguments, 1);
    for (var i = 0, len = sources.length; i < len; i++)
      for (var prop in sources[i]) obj[prop] = sources[i][prop];

    return obj;
  },

  pick: function (obj) {
    var name,
        clone = {},
        attrs = Array.prototype.slice.call(arguments, 1);

    for (var index in attrs) {
      name = attrs[index];
      if (name in obj) clone[name] = obj[name];

    }
    return clone;
  }
};
