var device = {

  android: function() {
    return navigator.userAgent.match(/Android/i);
  },
  androidPhone: function() {
    return navigator.userAgent.match(/Android.+Mobile/i);
  },
  androidTablet: function() {
    return (device.android() && !device.androidPhone());
  },
  blackberry: function() {
    return navigator.userAgent.match(/BlackBerry/i);
  },
  iPhone: function() {
    return navigator.userAgent.match(/iPhone/i);
  },
  iPod: function() {
    return navigator.userAgent.match(/iPod/i);
  },
  iPad: function() {
    return navigator.userAgent.match(/iPad/i);
  },
  iOS: function() {
    return (device.iPhone() || device.iPod() || device.iPad());
  },
  opera: function() {
    return navigator.userAgent.match(/Opera Mini/i);
  },
  windowsPhone: function() {
    return navigator.userAgent.match(/IEios/i);
  },
  touch: function() {
    return (device.android() || device.blackberry() || device.iOS() || device.opera() || device.windowsPhone());
  },
  tablet: function() {
    return (device.iPad() || device.androidTablet());
  },
  mobile: function() {
    return (device.touch() && !device.tablet());
  },
  safari: function() {
    return Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0;
  },
  ie8: function() {
    return navigator.userAgent.match(/MSIE\s8/i);
  }

};