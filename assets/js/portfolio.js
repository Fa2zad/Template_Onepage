var Portfolio = (function () {

    var li = $(".portfolio__container figure ul li");
    var image = $(".portfolio__container figure ul li a img");
  
    /* =================== private methods ================= */
    // setImagesHeight elements
    
    
  
    /* =================== public methods ================== */
    // main init method
    function init() {
      setListItemHeight();
    }
    function setListItemHeight() {
      li.css({"height": image.height()});
    }
  
    /* =============== export public methods =============== */
    return {
      init: init,
    };
  }());