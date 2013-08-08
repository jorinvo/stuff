// get a value with the right vendor prefix
var vendorPrefix = (function($) {

    var prefixes = /^(Moz|Webkit|Khtml|O|ms|Icab)(?=[A-Z])/;
    var style = $('script')[0].style;
    var prefix = '';

    for (var prop in style) {
      if (prefixes.test(prop)) {
        prefix = prop.match(prefixes)[0];
        break;
      }
    }

    if ('WebkitOpacity' in style) { prefix = 'Webkit'; }
    if ('KhtmlOpacity' in style) { prefix = 'Khtml'; }

    return function(property) {
      return prefix + (prefix.length > 0 ? property.charAt(0).toUpperCase() + property.slice(1) : property);
    };

})(jQuery);
