  function stellarCustomPosition () {
    $.stellar.positionProperty.custom = {

      setPosition: function ($elem, left, originalLeft, top, originalTop) {

        var prop = $elem.attr('data-stellar-position');
        var pos = $.stellar.positionProperty[prop];

        if ( pos.setPosition ) {
          pos.setPosition.apply(this, arguments);
        } else {
          pos.setTop.call(this, $elem, top, originalTop);
          pos.setLeft.call(this, $elem, left, originalLeft);
        }

      }

    };
  }



  function stellarInverted () {
    $.stellar.positionProperty.inverted = {

      setPosition: function ($elem, left, originalLeft, top, originalTop) {

        $.stellar.positionProperty.transform.setPosition(
          $elem, top, originalTop, 0, 0
        );

      }

    };
  }



  function stellarOpacity () {
    $.stellar.positionProperty.opacity = {

      setPosition: function ($elem, left, originalLeft, top, originalTop) {
        var max = 1, min = 0;
        var val = (originalTop - top) / 400; // 400 == $elem.height()
        if (val < min) val = min;
        if (val > max) val = max;
        $elem.css( 'opacity', val.toFixed(2) );
      }

    };
  }



  function stellarCount () {
    $.stellar.positionProperty.count = {

      setPosition: function ($elem, left, originalLeft, top, originalTop) {

        var min = 0;
        var max = parseInt( $elem.attr('data-max'), 10 );
        var val = Math.round( (originalTop - top) / 82 * max ); // 82 == $elem.height()

        if (val < min) val = min;
        if (val > max) val = max;

        $elem.text(val);

      }

    };
  }



  function stellarDots () {
    $.stellar.positionProperty.dots = {

      setPosition: function ($elem, left, originalLeft, top, originalTop) {

        var min = 0;
        var max = parseInt( $elem.attr('data-max'), 10 );
        var val = Math.round( (originalTop - top) / 82 * max ); // 82 == $elem.height()

        if (val < min) val = min;
        if (val > max) val = max;

        // format 1000000 => 1.000.000
        $elem.text( val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") );

      }

    };
  }



  function stellarRotate () {

    var transform = vendorPrefix('transform');

    $.stellar.positionProperty.rotate = {

      setPosition: function ($elem, left, originalLeft, top, originalTop) {
        var max = 360, min = 0;
        var val =  Math.round( ( (top - 300) / 400 ) * max );

        if (val < min) val = min;
        if (val > max) val = max;

        $elem.css( transform, 'rotate(' + val + 'deg)' );
      }

    };

  }



  function stellarScale () {

    var transform = vendorPrefix('transform');

    $.stellar.positionProperty.scale = {

      setPosition: function ($elem, left, originalLeft, top, originalTop) {
        var max = 1, min = 0;
        var val = (originalTop - top) / 150; // 150 == $elem.height()

        if (val < min) val = min;
        if (val > max) val = max;
        $elem.css( transform, 'scale(' + val.toFixed(1) + ')' );
      }

    };

  }



  function stellarHeight () {

    var transform = vendorPrefix('transform');

    $.stellar.positionProperty.height = {

      setPosition: function ($elem, left, originalLeft, top, originalTop) {
        var max = 70, min = 0;
        var val =  Math.round( ( ( 600 - top ) / 150 ) * max );

        if (val < min) val = min;
        if (val > max) val = max;
        $elem.css( 'height', val );
      }

    };

  }

  function stellarWidth () {

    var transform = vendorPrefix('transform');

    $.stellar.positionProperty.width = {

      setPosition: function ($elem, left, originalLeft, top, originalTop) {
        var max = 300, min = 0;
        var val =  Math.round( ( ( 600 - top ) / 70 ) * max );

        if (val < min) val = min;
        if (val > max) val = max;
        $elem.css( 'width', val );
      }

    };

  }



  function stellarChart () {
    $.stellar.positionProperty.chart = {

      setPosition: function ($elem, left, originalLeft, top, originalTop) {

        var min = 0, max = 1;
        var val = ( parseInt(originalTop, 10) - parseInt(top, 10) ) / 100;
        if (val < min) val = min;
        if (val > max) val = max;
        $elem.data('chart')(val);

      }

    };
  }



  function shimTransform () {

    $.stellar.positionProperty.transform = $.stellar.positionProperty.position;

    $.stellar.positionProperty.inverted = {

      setPosition: function ($elem, left, originalLeft, top, originalTop) {
        $elem.css( 'left', originalLeft + top - originalTop );
      }

    };

  }





  function paralax (options) {

    var defaults = {
      positionProperty: 'custom',
      horizontalScrolling: false
    };

    if (!options) options = defaults;

    for ( var i in defaults ) {
      if (options[i] === undefined) options[i] = defaults[i];
    }

    $.stellar(options);

    var $window = $(window);

    var mobile;

    function handleResize () {
      if ( window.matchMedia && window.matchMedia('all and (max-width: 640px)').matches ) {
        mobile = true;
        $window.data('plugin_stellar').destroy();
        return $('[data-stellar-ratio]').attr('style', ' ');
      }
      if (mobile) {
        mobile = false;
        return $window.data('plugin_stellar').init();
      }
      $window.data('plugin_stellar').refresh();
    }

    $window.on('resize', handleResize);
    setTimeout(handleResize, 0);

  }