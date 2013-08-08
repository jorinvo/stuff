var device = {

Android: function() { return navigator.userAgent.match(/Android.+Mobile/i); },
AndroidTablet: function() { return navigator.userAgent.match(/Android/i) && !device.Android(); },
BlackBerry: function() { return navigator.userAgent.match(/BlackBerry/i); },
iOS: function() { return navigator.userAgent.match(/iPhone|iPod/i); },
iPad: function() { return navigator.userAgent.match(/iPad/i); },
Opera: function() { return navigator.userAgent.match(/Opera Mini/i); },
Windows: function() { return navigator.userAgent.match(/IEios/i); },
safari: function() { return Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0; },
mobile: function() { return (device.Android() || device.BlackBerry() || device.iOS() || device.Opera() || device.Windows()); }

};

      var ie8 = navigator.userAgent.match(/MSIE\s8/i);
