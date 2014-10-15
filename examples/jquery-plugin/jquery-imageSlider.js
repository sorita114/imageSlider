(function(window, $){
  'use strict';
  
  $.fn.imageSlider = function(options){
    //var self = this;
    var defaults = {
      $this : self,
      hover : true,
      userNav : true,
      rotateTime : 1000,
      slideTime : 3000,
      slideWidth : 200,
      easing : 'slide'
    };
    
    function move(element){
      element.imageSliderMove();
    }
    
    function resume(element, options){
      return setInterval(function(){
        element.imageSliderRotate(options);
      }, options.slideTime);
    }
    return this.each(function(){
      var self = $(this);
      var settings = $.extend(true, defaults, options || {});
      var $li = self.find('.slide').find('li');
      var intervalTime = null;
      
       $li.each(function(index){
         $(this).data('index', index).css('left', index * settings.slideWidth);
      });
      
      if(settings.hover){
        $li.on('mouseover', function(){
          clearInterval(intervalTime);
        }).on('mouseout', function(){
          intervalTime = resume($li, settings);
        });
      }
      
      intervalTime = resume($li, settings);
      
      if(settings.userNav){
        self.imageSliderNavigation().on('mouseover', function(){
          move($li);
        });
      }
    });
  };
})(window, jQuery);
