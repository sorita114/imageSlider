(function(window, $){
  'use strict';
  /**
  * @fileOverview Contains the awesome plug-in code.
  * @version 1.0.1
  * @author Hyyoon &amp;lt;hyyoon@mz.co.kr
  */
  
  /**
  * See (http://jquery.com/)
  * @name jQuery
  * @class
  * See the jQuery Library (http://jquery.com/) for full details. This just
  * documents the function and classes that are added to jQuery by this plug-in.
  */
  
  /**
  * See (http://jquery.com/)
  * @name fn
  * @class
  * See the jQuery Library (http://jquery.com/) for full details. This just
  * documents the function and classes that are added to jQuery by this plug-in.
  * @memberOf jQuery
  */
  
  /**
  * imageSlider Plugin - image slide jQuery plug-in.
  *
  * @class imageSlider
  * @membarOf jQuery.fn
  */
  $.fn.imageSlider = function(options){
    var defaults = {
      width : 850,
      height : 500,
      type : 'image',
      theme : null,
      hover : true,
      userNav : true,
      rotateTime : 1000,
      slideTime : 3000,
      easing : 'slide',
      usedButton : true,
      usedButtonNext : true,
      usedButtonPrev : true,
      usedButtonResume : true,
      usedButtonPause : true,
      isLoop : true,
      autoSlide : true
    };
    return this.each(function(){
      var settings = $.extend(true, defaults, options || {});
      var _this = $(this);
      var rotate = _this.imageSliderRotate(settings);
      if( settings.theme ){
        _this.addClass(settings.theme + '-theme');
      }
      _this.imageSliderNavigation(settings);
      _this.imageSliderController(settings);
      _this.css('width', settings.width + 'px');
      _this.find('.slide').css('height', settings.height + 'px');
      _this.find('.slide-nav').on('click','a:not(".active")', function(e){
        var pageNum = $(this).data('index') * 1;
        e.preventDefault();
        rotate.moveTo(pageNum);
      });
      
      if(settings.hover){
        _this.find('.slide li').on('mouseover', function(e){
          e.preventDefault();
          rotate.pause();
        }).on('mouseout', function(e){
          e.preventDefault();
          rotate.resume();
        });
      }
      //event
      _this.find('.slide-controller').on('click', '.controller', function(e){
        e.preventDefault();
        var type = $(this).data('type');
        rotate[type]();
      });
      
      if(settings.autoSlide){
        rotate.resume();
      }
    });
  };
})(window, jQuery);
