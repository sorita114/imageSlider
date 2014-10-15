(function(window, $){
  'use strict';
  
  $.fn.imageSliderRotate = function(options){
    var self = $(this);
    var $li = self.find('li');
    var len = $li.length;
    var interValTime = null;
    
    $li.each(function(index){
      $(this).css('left', index * options.slideWidth);
      $(this).data('index', index + 1);
    });
    
    return {
      rotate : function(){
        $li.animate({
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
        });
      },
      resume : function(){
        var _this = this;
        interValTime = setInterval(function(){
          _this.rotate();
        }, options.slideTime);
      },
      pause : function(){
        clearInterval(interValTime);
      },
      moveTo : function(pageNum){
        var _this = this;
        _this.pause();
        
        $li.each(function(){
          if($(this).data('index') !== pageNum){
            _this.rotate();
          } else {
            return false;
          }
        });
      }
    };
  };
})(window, jQuery);
