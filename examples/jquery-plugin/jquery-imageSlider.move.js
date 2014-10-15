(function(window, $){
  'use strict';
  
  $.fn.imageSliderMove = function move(options){
    var self = $(this);
    
    $(this).each(function(){
      if( $(this).data('index') != options.pageNum){
        self.animate({
          'left' : '-=' + options.slideWidth
        },{
          complete : function(){
            var $this = $(this);
            var left = $this.position().left;
            if( left  < 0 ){
              $this.css('left' , (self.length - 1) * options.slideWidth + 'px');
            }
          }
        }, 'fast');
      }
    });
  };
  
})(window, jQuery);
