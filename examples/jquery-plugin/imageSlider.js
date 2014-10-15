(function(window, $){
  $.fn.imageSlider = function imageSlider(options){
    var self = this;
    var defaults = {
      $this : self,
      mouseOver : true,
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
    //rotate
    $.fn.imageSlider.rotate(settings);
  };
})(window, jQuery);
