$(function() {
  //we pack all the functionality in a jQuery-plugin

  //-selector (optional) can be specified to filter the
  // selection if the links aren't the direct children of nav
  //-start (optional) specifies the page which will open as default.
  // to set start you have to set selector. If you don't want a specific
  // selector '' works.
  $.fn.bookmarkableTabs = function(selector, start, cb) {
    var nav = this;
    var activePage = start;

    var $body = $('html, body');

    var location = window.location.hash;

    //reference to the items triggering the changes
    // needed to know which pages exist
    // and to mark the links as activated later on
    var $links = (function() {
      if (selector) return $(nav).find(selector);
      return $(nav).children();
    })();

    $links.click(function (e) {
      if ( activePage === $(this).attr('href') ) {
        e.preventDefault();
        $(window).trigger('hashchange');
      }
    });

    //cache all available pages to check against it later on
    var pages = $.map($links, function(el) {
      return $(el).attr('href');
    });

    //called to check if a requested page is valid or not
    pages.contains = function(el) {
      for (var i = this.length; i >= 0; i--) {
        if (this[i] === el) {
          return true;
        }
      }
      return false;
    };


    //listening to changes of the hash
    $(window).on('hashchange', function(e) {
      e.preventDefault();

      var hash = window.location.hash || start;

      if (pages.contains(hash) ) {

        if (hash !== activePage) {

          function done () {
            //toggle pages
            $(activePage).hide();
            activePage = hash;
            $(activePage).show();
            $body.stop().animate({ scrollTop: $(activePage).offset().top }, 900, 'swing' );
          }

          if (cb) {
            cb(hash.replace('#', ''), done);
          } else {
            done();
          }
        } else {
          $body.stop().animate({ scrollTop: $(activePage).offset().top }, 900, 'swing' );
        }

      } else {
        //if page requested isn't valid
        //open the last page
        window.location.hash = activePage;
      }
    });

    if (pages.contains(location)) {
      $(window).trigger('hashchange');
    }

    return this;
  };

});








    var $nav = $('.mobile_navigation').find('ul ul');
    if ( $('body').hasClass('mobile') ) {
      $nav.bookmarkableTabs('a', '#restaurant', function(el, done) {
          $nav
            .slideUp(500)
            .children('li').removeClass('active')
            .filter('[data-area=' + el + ']').addClass('active');

          $('#header .container .area')
            .find('img').removeClass('active')
            .filter('.' + el).addClass('active');
        setTimeout(done, 800);
      });
    }

