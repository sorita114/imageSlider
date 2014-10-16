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
      
      //rotae
      var rotate = $(this).imageSliderRotate(settings);
      //navigtion
      $(this).imageSliderNavigation(options);
      
      //init
      rotate.resume();
      
      //events
      $(this).find('.slide-nav').on('click','a:not(".active")', function(e){
        var pageNum = $(this).data('index');
        e.preventDefault();
        rotate.moveTo(pageNum);
      });
      $(this).find('.slide-controller').on('click', '.controller', function(e){
        e.preventDefault();
        var type = $(this).data('type');
        console.log(type);
        rotate[type]();
      });
    });
  };
})(window, jQuery);
