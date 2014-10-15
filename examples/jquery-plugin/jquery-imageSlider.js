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
      var rotate = $(this).find('.slide').imageSliderRotate(settings);
      //navigtion
      var nav = $(this).imageSliderNavigation(options);
      
      //init
      rotate.resume();
      
      //events
      nav.on('click','a', function(e){
        var pageNum = $(this).data('index');
        e.preventDefault();
        rotate.moveTo(pageNum);
      });
    });
  };
})(window, jQuery);
