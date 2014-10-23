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
  };
  
})(window, jQuery);
