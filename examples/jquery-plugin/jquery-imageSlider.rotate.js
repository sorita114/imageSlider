(function(window, $){
  'use strict';
  
  $.fn.imageSliderRotate = function(options){
    var len = $(this).length;
    $(this).animate({
      'left' : '-=' + options.slideWidth
    },{
      duration : options.rotateTime,
      step : function(now, tw){
        if(now === 0){
          $(this).addClass('active').siblings().removeClass('active');
        }
      },
      complete : function(){
        var $this = $(this);
        var left = $this.position().left;
        if( left  < 0 ){
          $this.css('left' , (len - 1) * options.slideWidth + 'px');
        }
      }
    }, options.slideTime);
    
  };
})(window, jQuery);
