/*! imageSlider -v1.0.1 - 2014-10-23 */(function(window, $){
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
  * imageSlider Plugin - image slide jQuery plug-in.
  *
  * @class imageSlider
  * @membarOf jQuery.fn
  */
  $.fn.imageSlider = function(options){
    var defaults = {
      width : 850,
      height : 500,
      type : 'image',
      $this : self,
      hover : true,
      userNav : true,
      rotateTime : 1000,
      slideTime : 3000,
      easing : 'slide',
      usedButton : true,
      usedButtonNext : true,
      usedButtonPrev : true,
      usedButtonResume : true,
      usedButtonPause : true
    };
    return this.each(function(){
      var settings = $.extend(true, defaults, options || {});
      var _this = $(this);
      var rotate = _this.imageSliderRotate(settings);
      _this.imageSliderNavigation(settings);
      _this.imageSliderController(settings);
      _this.css('width', settings.width + 'px');
      _this.find('.slide').css('height', settings.height + 'px');
      _this.find('.slide-nav').on('click','a:not(".active")', function(e){
        var pageNum = $(this).data('index');
        e.preventDefault();
        rotate.moveTo(pageNum);
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
      
      rotate.resume();
    });
  };
})(window, jQuery);

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
  * imageSliderController Plugin - image slide sub module for navigation.
  *
  * @class imageSliderController
  * @membarOf jQuery.fn
  */
  $.fn.imageSliderController = function controller(options){
    var $this = $(this),
        $controller = $this.find('.slide-controller');
        
    if(!options.usedButton){
      $controller.find('button').attr('disabled', 'disabled');
    } else {
      $controller.find('button').each(function(){
        var type = $(this).data('type');
        if(!options.usedButtonPrev && type === 'prev'){
          $(this).attr('disabled', 'disabeld');
        }
        if(!options.usedButtonNext && type === 'next'){
          $(this).attr('disabled', 'disabeld');
        }
        if(!options.usedButtonPause && type === 'pause'){
          $(this).attr('disabled', 'disabeld');
        }
        if(!options.usedButtonResume && type === 'resume'){
          $(this).attr('disabled', 'disabeld');
        }
      });
    }
    //event
    $this.find('.slide-controller').on('click', 'button:not("disabled")','.controller', function(e){
      e.preventDefault();
      var type = $(this).data('type');
      rotate[type]();
    });
  };
  
})(window, jQuery);

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
  * imageSliderNavigation Plugin - image slide sub module for navigation.
  *
  * @class imageSliderNavigation
  * @membarOf jQuery.fn
  */
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
      $this.css({
        'left': index * options.width
      });
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
        $li.animate({
          'left' : ( page && index > page ? '+=' : '-=') + options.width
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
