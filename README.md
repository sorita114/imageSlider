# ImageSlider  
> image slider plugin 개발  
  
## 1. jquery version  
> [jQuery](http://jquery.com) plug-in type  
  
  
## 2. javascript version  
> javascript type  
> Default options  
```` javascript  
  {
    rotateTime : 1000,//이미지 전환 속도  
    slideTime : 3000,//슬라이드 전환 속도  
    width : 850,//슬라이드 크기  
    height : 500,//슬라이드 높이
    hover : true, //slide pause on mouse over of slide  
    usedButton : true,//use controller  
    usedButtonNext : true,//use controller next button  
    usedButtonPrev : true,//use controller prev button  
    usedButtonPause : true,//use controller Pause button  
    usedButtonResume : true//use controller resume button
  }  
````  
  
## 3. change log  
> - ** 2014-10-14 **  
  1. make project  
  2. jquery plug-in dev  
  3. 프로젝트 구성 - html 샘플 페이지 작성, 스타일시트 작성 등등  
> - ** 2014-10-15 **  
  1. 모듈 분리 -> rotate 함수 분리  
  2. pause / resume 기능 생성  
  3. branch 생성 -> v0.0.2  
> - ** 2014-10-16 **  
  1. 네이게이션 페이지 클릭 ( moveTo ) 시 슬라이더 페이지 전환 구현  
  2. version 1.0 발행  
> - ** 2014-10-20 **  
  1. stop, pause 이벤트 생성  
  2. hover 이벤트 생성  
  3. grunt package ( uglify, concat, plato )  
  4. bower package 적용 ( jquery, mocha , should )  
> - ** 2014-10-21 **  
  1. version up -> v1.0.1  
  2. option 추가  
  3. 문서화  
> - ** 2014-10-22 **  
  1. modify example index.html  
  2. bower install bootstrap  
  3. bower install html5shiv  
  4. modify option name  
  5. add bower highlight.js  
  
## 4. licence  
MIT
