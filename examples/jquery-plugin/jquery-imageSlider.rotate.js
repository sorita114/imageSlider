(function(window, $){
  'use strict';
  
  $.fn.imageSliderRotate = function(options){
    var self = $(this);
    var $li = self.find('li');
    var len = $li.length;
    var interValTime = null;
    
    //init
    $li.each(function(index){
      $(this).css({
        'left': index * options.slideWidth
      });
      $(this).data('index', index + 1);
    });
    
    return {
      rotate : function(page){
        var _this = this;
        var index = self.find('li.active').data('index');
        $li.animate({
          'left' : ( page && index > page ? '+=' : '-=') + options.slideWidth
        },{
          duration : page ? '400' : options.rotateTime,
          step : function(now, tw){
            $(this).removeClass('active');
            if(now === 0){
              $(this).addClass('active');
            }
          },
          complete : function(){
            var $this = $(this);
            var left = $this.position().left;
            if( left  <  -1 * options.slideWidth ){
              $this.css('left' , ((len - 1) * options.slideWidth) + ( -1 * options.slideWidth ) + 'px');
            }
            if( left >= (len - 1 ) * options.slideWidth ) {
              $this.css('left' , -1 * options.slideWidth + 'px');
            }
            if( page && $this.hasClass('active')){
              var _index = $this.data('index');
              if(_index == page){
                  return;
              } else {
                  _this.rotate(page);
              }
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
        _this.rotate(pageNum);
      }
    };
  };
})(window, jQuery);
