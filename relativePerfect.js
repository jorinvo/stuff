// percent '25%'
// denominator 4
// pixel '200px'

(function ($, window, undefined) {


  $.fn.relativePerfect = function (rules, options) {

    var defaultOptions = {
      isResizeBound: true
    };

    if (!options) options = {};

    for (var i in defaultOptions) {
      if (options[i] === undefined) {
        options[i] = defaultOptions[i];
      }
    }

    if (! $.isArray(rules)) rules = [rules];
    rules[0] = rules[0] || {};
    if (!rules[0].columns) rules[0].columns = 2;
    if (!rules[0].rows) rules[0].rows = 1;

    var $el = $(this);
    var rulesLength = rules.length;


    function calculateWidth () {

      var width = $el.parent().width();

      var rule;

      for (var i = -1; ++i < rulesLength;) {
        if (!rules[i].maxWidth || width <= rules[i].maxWidth) {
          rule = rules[i];
          break;
        }
      }

      var factor = rule.columns * rule.rows;

      while ( width % factor !== 0 ) { width++; }

      $el.css({ width: width + 'px' });

    }


    if (options.isResizeBound) $(window).resize( calculateWidth );
    calculateWidth();


    return $el;

  };




})(jQuery, window);