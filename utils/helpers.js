module.exports = {
  limitText: function(string) {
    if (string.length > 65)
      return string.substring(0,65) + '...';
    return string;
  }
};