(function(window, $){
  $.fn.imageSlider = function imageSlider(options){
    var self = this;
    var defaults = {
      rotateTime : 1000,
      slideTime : 3000,
      slideWidth : 200,
      easing : 'slide'
    };
    var settings = $.extend(true, defaults, options || {});
    var count = 0;
    //init
    self.find('li').each(function(index){
      $(this).css('left', index * settings.slideWidth);
      settings.len = count++;
    });

    function rotate(){
      self.find('li').animate({
        'left' : '-=200px'
      },{
        duration : settings.rotateTime,
        complete : function(){
          left = $(this).position().left;
          if( left  < 0 ){
            $(this).css('left' , settings.len * settings.slideWidth + 'px');
          }
        }
      });
    }
    setTimeout(function(){
      //console.log('t');
      rotate();
    }, settings.slideTime);
  };
})(window, jQuery);
