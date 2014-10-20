/*! imageSlider -v1.0.0 - 2014-10-20 */(function(window, $){
  'use strict';
  
  $.fn.imageSlider = function(options){
    var defaults = {
      $this : self,
      hover : true,
      userNav : true,
      rotateTime : 1000,
      slideTime : 3000,
      slideWidth : 200,
      easing : 'slide'
    };
    
    return this.each(function(){
      var settings = $.extend(true, defaults, options || {});
      var _this = $(this);
      
      //rotae
      var rotate = _this.imageSliderRotate(settings);
      //navigtion
      _this.imageSliderNavigation(options);
      
      //init
      rotate.resume();
      
      //events
      _this.find('.slide-nav').on('click','a:not(".active")', function(e){
        var pageNum = $(this).data('index');
        e.preventDefault();
        rotate.moveTo(pageNum);
      });
      _this.find('.slide-controller').on('click', '.controller', function(e){
        e.preventDefault();
        var type = $(this).data('type');
        rotate[type]();
      });
      if(settings.hover){
        _this.find('.slide li').one('mouseover', function(e){
          e.preventDefault();
          rotate.pause();
        }).one('mouseout', function(e){
          e.preventDefault();
          rotate.resume();
        });
      }
    });
  };
})(window, jQuery);

(function(window, $){
  'use strict';
  
  $.fn.imageSliderNavigation = function navigation(){
    var len = $(this).find('.slide').find('li').length;
    var $a = '';
    for(var i = 1; i <= len ;i++){
      $a = $a + '<a href="#page=' + i +'" data-index="' + i + '" class="'+ (i === 1 ? 'active' : '') +'"><span class="bland">' + i + '</span></a>';
    }
    $(this).find('.slide-nav').html($a);    
  };
  
})(window, jQuery);

(function(window, $){
  'use strict';
  
  $.fn.imageSliderRotate = function(options){
    var self = $(this);
    var $slide = self.find('.slide');
    var $nav = self.find('.slide-nav');
    var $li = $slide.find('li');
    var len = $li.length;
    var interValTime = null;
    
    //init
    $li.each(function(index){
      if(index === 0 ){
        $(this).addClass('active');
      }
      $(this).css({
        'left': index * options.slideWidth
      });
      $(this).data('index', index + 1);
    });
    
    return {
      rotate : function(page){
        var _this = this;
        var index = $slide.find('li.active').data('index');
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
            if($this.hasClass('active')){
              var _index = $this.data('index');
              $nav.find('a').each(function(){
                var index = $(this).data('index');
                if(index == _index){
                  $(this).addClass('active').siblings().removeClass('active');
                }
              });
              if(page) {
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
      },
      next : function(){
        var _this = this;
        var index = $nav.find('a.active').data('index');
        var pageNum = index + 1 > len ? 1 : index + 1;
        _this.pause();
        _this.moveTo(pageNum);
      },
      prev : function(){
        var _this = this;
        var index = $nav.find('a.active').data('index');
        var pageNum = index - 1 < 1 ? len : index - 1;
        _this.pause();
        _this.moveTo(pageNum);
      }
    };
  };
})(window, jQuery);
