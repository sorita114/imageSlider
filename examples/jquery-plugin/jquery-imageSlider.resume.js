(function(window, $){
  'use strict';
  
  $.fn.imageSliderResume = function resume(options){
    var self = $(this);
    return setInterval(function(){self.imageSliderRotate(options);}, options.slideTime);
  };
})(window, jQuery);
