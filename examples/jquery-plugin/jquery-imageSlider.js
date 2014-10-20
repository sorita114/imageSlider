(function(window, $){
  'use strict';
  
  $.fn.imageSlider = function(options){
    var defaults = {
      $this : self,
      hover : true,
      userNav : true,
      rotateTime : 1000,
      slideTime : 3000,
      slideWidth : 200,
      easing : 'slide'
    };
    
    return this.each(function(){
      var settings = $.extend(true, defaults, options || {});
      var _this = $(this);
      
      //rotae
      var rotate = _this.imageSliderRotate(settings);
      //navigtion
      _this.imageSliderNavigation(options);
      
      //init
      rotate.resume();
      
      //events
      _this.find('.slide-nav').on('click','a:not(".active")', function(e){
        var pageNum = $(this).data('index');
        e.preventDefault();
        rotate.moveTo(pageNum);
      });
      _this.find('.slide-controller').on('click', '.controller', function(e){
        e.preventDefault();
        var type = $(this).data('type');
        rotate[type]();
      });
      if(settings.hover){
        _this.find('.slide li').one('mouseover', function(e){
          e.preventDefault();
          rotate.pause();
        }).one('mouseout', function(e){
          e.preventDefault();
          rotate.resume();
        });
      }
    });
  };
})(window, jQuery);
