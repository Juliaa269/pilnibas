$(document).ready(function(){
    $('a[href^="#"]').click(function(){
      if(document.getElementById($(this).attr('href').substr(1)) != null) { 
         $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top }, 2000);
      }     
      return false;
    });
});
$(document).ready(function(){
    $('a[href^="#"]').click(function(){ 
      var $element = $('a[name=' + $(this).attr('href').substr(1) + ']');
      if($element.length == 1) { 
         $('html, body').animate({ scrollTop: $element.offset().top }, 2000); 
      }     
      return false;
    });
});

AOS.init({
  // Global settings:
  disable: 'phone, tablet', // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  
  offset: 100, // offset (in px) from the original trigger point
  delay: 500, // values from 0 to 3000, with step 50ms
  duration: 3000, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
});
