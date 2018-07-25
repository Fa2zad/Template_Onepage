var ScrollEffect = (function () {

    
  
    /* =================== private methods ================= */
    // setImagesHeight elements
    
          
      
  
    /* =================== public methods ================== */
    // main fadeInOnScroll method
    /** @description Fade in element. For use first change style of element to ( opacity: 0; )  
     * @param {string} selector The jquery selector with qoutation.
     * @param {number} duration The duration of animation in ms.  
     * @param {number} distance The top distance of element to be scroll to play aniamation in px.  
     */  
    function fadeInOnScroll(selector, duration,  distance) {
        $(selector).each( function(i){
            
          var distance_of_object = $(this).position().top + distance;
          var bottom_of_window = $(window).scrollTop() + $(window).height();
          
          if( bottom_of_window > distance_of_object ){
              $(this).animate({'opacity':'1'},duration);
            }
          
      }); 
    }

    // main anyEffectOnScroll method
    /** @description Animate element to any effect.  
     * @param {string} selector The jquery selector with qoutation.
     * @param {number} duration The duration of animation in ms.  
     * @param {number} distance The top distance of element to be scroll to play aniamation in px.  
     * @param {string} effect multiple CSS properties, use the following syntax: {"propertyname":"value","propertyname":"value",...}
     */  
    function anyEffectOnScroll(selector, duration,  distance, effect) {
      $(selector).each( function(i){
          
        var distance_of_object = $(this).position().top + distance;
        var bottom_of_window = $(window).scrollTop() + $(window).height();
        if( bottom_of_window > distance_of_object ){
        alert(effect.each);

            $(this).animate(effect,duration);
          }
        




          //create a jQuery function named `cssGet`
          //$.fn.cssGet = function (propertyArray) {

          //create an output variable and limit this function to finding info for only the first element passed into the function
          //var output = {},
              //self   = this.eq(0);

          //iterate through the properties passed into the function and add them to the output variable
          //for (var i = 0, len = propertyArray.length; i < len; i++) {
             // output[propertyArray[i]] = this.css(propertyArray[i]);
          //}
          //return output;
};
    }); 
  }
  
    /* =============== export public methods =============== */
    return {
      fadeInOnScroll: fadeInOnScroll,
      anyEffectOnScroll: anyEffectOnScroll
    };
  }());




