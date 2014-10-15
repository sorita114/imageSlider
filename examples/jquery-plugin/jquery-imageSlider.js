(function(window, $){
  'use strict';
  
  $.fn.imageSlider = function(options){
    //var self = this;
    var defaults = {
      $this : self,
      hover : true,
      rotateTime : 1000,
      slideTime : 3000,
      slideWidth : 200,
      easing : 'slide'
    };
    
    return this.each(function(){
      var self = $(this);
      var settings = $.extend(true, defaults, options || {});
      var $li = self.find('.slide').find('li');
      var intervalTime = null;
      
       $li.each(function(index){
         $(this).css('left', index * settings.slideWidth);
      });
      
      if(settings.hover){
        $li.on('mouseover', function(){
          clearInterval(intervalTime);
        }).on('mouseout', function(){
          intervalTime = setInterval(function(){
            $li.imageSliderRotate(settings);
          }, settings.slideTime);
        });
      }
      
      intervalTime = setInterval(function(){
        $li.imageSliderRotate(settings);
      }, settings.slideTime);
      
    });
  };
})(window, jQuery);
