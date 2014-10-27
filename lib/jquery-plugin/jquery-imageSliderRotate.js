(function(window, $){
  'use strict';
  /**
  * @fileOverview Contains the awesome plug-in code.
  * @version 1.0.1
  * @author Hyyoon &amp;lt;hyyoon@mz.co.kr
  */
  
  /**
  * See (http://jquery.com/)
  * @name jQuery
  * @class
  * See the jQuery Library (http://jquery.com/) for full details. This just
  * documents the function and classes that are added to jQuery by this plug-in.
  */
  
  /**
  * See (http://jquery.com/)
  * @name fn
  * @class
  * See the jQuery Library (http://jquery.com/) for full details. This just
  * documents the function and classes that are added to jQuery by this plug-in.
  * @memberOf jQuery
  */
  
  /**
  * imageSliderRotate Plugin - image slide sub module for rotate.
  *
  * @class imageSliderRotate
  * @membarOf jQuery.fn
  */
  $.fn.imageSliderRotate = function(options){
    var self = $(this);
    var $slide = self.find('.slide');
    var $nav = self.find('.slide-nav');
    var $li = $slide.find('li');
    var len = $li.length;
    var interValTime = null;
    $li.each(function(index){
      var $this = $(this);
      if(index === 0 ){
        $this.addClass('active');
      }
      if(index + 1 === len){
        $this.css('left', -1 * options.width);
      } else {
        $this.css('left', index * options.width);
      }
      $this.data('index', index + 1);
      if(options.type === 'image'){
        $this.find('img').css({
          'width' : options.width,
          'height' : options.height
        });
      }
    });
    
    return {
      rotate : function(page){
        var _this = this;
        var index = $slide.find('li.active').data('index');
        var position = '';
        if( page && typeof page === 'number'){
          position = ( page && index > page ? '+=' : '-=') + options.width;
        } else if(page && typeof page === 'string'){
          position = page === 'N' ? '-=' + options.width : '+=' + options.width;
        } else {
          position = '-=' + options.width;
        }
        $li.animate({
          //'left' : ( page && index > page ? '+=' : '-=') + options.width
          'left' : position
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
            if( left  <  -1 * options.width ){
              $this.css('left' , ((len - 1) * options.width) + ( -1 * options.width ) + 'px');
            }
            if( left >= (len - 1 ) * options.width ) {
              $this.css('left' , -1 * options.width + 'px');
            }
            if($this.hasClass('active')){
              var _index = $this.data('index');
              $nav.find('a').each(function(){
                var index = $(this).data('index');
                if(index == _index){
                  $(this).addClass('active').siblings().removeClass('active');
                }
              });
              if(page && typeof page === 'number') {
                if(_index == page){
                    return;
                } else {
                    _this.rotate(page);
                }
              }
            }
          }
        });
      },
      resume : function(){
        var _this = this;
        if(interValTime){
          clearInterval(interValTime);
        }
        self.find('.slide-controller').find('.pause').addClass('active').siblings().removeClass('active');
        interValTime = setInterval(function(){
          _this.rotate();
        }, options.slideTime);
      },
      pause : function(){
        self.find('.slide-controller').find('.resume').addClass('active').siblings().removeClass('active');
        clearInterval(interValTime);
      },
      moveTo : function(pageNum){
        var _this = this;
        _this.pause();
        _this.rotate(pageNum);
      },
      next : function(){
        var _this = this;
        var index = $nav.find('a.active').data('index');
        var pageNum = index + 1 > len ? 1 : index + 1;
        _this.pause();
        if(!options.isLoof && index === len){
          _this.moveTo(pageNum);
        } else {
          _this.moveTo('N');
        }
      },
      prev : function(){
        var _this = this;
        var index = $nav.find('a.active').data('index');
        var pageNum = index - 1 < 1 ? len : index - 1;
        _this.pause();
        if(!options.isLoop && index === 1){
          _this.moveTo(pageNum);
        } else {
          _this.moveTo('P');
        }
      }
    };
  };
})(window, jQuery);
