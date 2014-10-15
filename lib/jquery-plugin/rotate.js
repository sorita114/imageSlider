(function(window, jQuery){
  $.fn.imageSlider.rotate = function rotate(options){
    var settings = options;
    var $li = settings.$this.find('li');
    var intervalTime = null;
    var stop = settings.mouseOuver;
        
    resume();

    function resume(){
      intervalTime = setInterval(function(){
        $li.animate({
          'left' : '-=200px'
        },{
          duration : settings.rotateTime,
          complete : function(){
            var $this = $(this);
            left = $this.position().left;
            if( left  < 0 ){
              $this.css('left' , settings.len * settings.slideWidth + 'px');
            }
          }
        });
      }, settings.slideTime);
    }
    
    function pause(){
      clearInterval(intervalTime);
    }
    
    if(stop){
      $li.on('mouseover', function(){
        pause();
      }).on('mouseout', function(){
        resume();
      });
    }
  };
})(window, jQuery);
