(function ($) {

  $.fn.protectMail = function (options) {
    options = options || {};

    return $(this).each(function () {

      var $el = $(this);

      var name = $el.attr('data-name');
      var host = $el.attr('data-host');
      var ending = $el.attr('data-ending');

      var mail = name +'@' + host + '.' + ending;

      if (options.href !== false) $el.attr('href', 'mailto:' + mail);

      if (options.content !== false) $el.text(mail);

    });
  };

})(jQuery);