module.exports = {
  limitText: function(string) {
    if (string.length > 65)
      return string.substring(0,65) + '...';
    return string;
  },
  displayStars: num => {
    let starImg;
    if (num === 1) {
      starImg = `<div><img src="/images/star-on.png" /><img src="/images/star-off.png" /><img src="/images/star-off.png" /><img src="/images/star-off.png" /><img src="/images/star-off.png" /></div>`
      return starImg;
    }
    else if (num === 2) {
      starImg = `<div><img src="/images/star-on.png" /><img src="/images/star-on.png" /><img src="/images/star-off.png" /><img src="/images/star-off.png" /><img src="/images/star-off.png" /></div>`
      return starImg;
    }
    else if (num === 3) {
      starImg = `<div><img src="/images/star-on.png" /><img src="/images/star-on.png" /><img src="/images/star-on.png" /><img src="/images/star-off.png" /><img src="/images/star-off.png" /></div>`
      return starImg;
    }
    else if (num === 4) {
      starImg = `<div><img src="/images/star-on.png" /><img src="/images/star-on.png" /><img src="/images/star-on.png" /><img src="/images/star-on.png" /><img src="/images/star-off.png" /></div>`
      return starImg;
    }
    else if (num === 5) {
      starImg = `<div><img src="/images/star-on.png" /><img src="/images/star-on.png" /><img src="/images/star-on.png" /><img src="/images/star-on.png" /><img src="/images/star-on.png" /></div>`
      return starImg;
    }
  }
};