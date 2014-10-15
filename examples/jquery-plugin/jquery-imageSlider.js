(function(window, $){
  'use strict';
  
  $.fn.imageSlider = function(options){
    //var self = this;
    var defaults = {
      $this : self,
      mouseOver : true,
      rotateTime : 1000,
      slideTime : 3000,
      slideWidth : 200,
      easing : 'slide'
    };
    var count = 0;
    var intervalTime = null;
    
    return this.each(function(){
      var self = $(this);
      var settings = $.extend(true, defaults, options || {});
      var $li = self.find('.slide').find('li');
       $li.each(function(index){
         $(this).css('left', index * settings.slideWidth);
      });
      
      if(stop){
        $li.on('mouseover', function(){
          //pause();
        }).on('mouseout', function(){
          intervalTime = $li.imageSliderResume(settings);
        });
      }
      
      intervalTime = $li.imageSliderResume(settings);
      
    });
  };
})(window, jQuery);
