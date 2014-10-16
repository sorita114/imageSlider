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