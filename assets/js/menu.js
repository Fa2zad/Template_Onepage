var Menu = (function () {

    var searchInput = $(".header__container .header-search form .form-group input");
    var searchIcon = $(".header__container .header-search form a");
    var headerUser = $(".header__container .header-user");
    var headerMenu = $(".header__container .header-menu");
  
    /* =================== private methods ================= */
    // cache DOM elements
    function searchIconClick() {
      searchIcon.on("click", function () {
        alert('ok');
        searchInput.css({"width": "100%", "opacity": 1});
        headerUser.css({"opacity": 0, "width": 0});
        headerMenu.css({"opacity": 0, "width": 0});

      });
    }
    
  
    /* =================== public methods ================== */
    // main init method
    function init() {
        searchIconClick();
    }
  
    /* =============== export public methods =============== */
    return {
      init: init
    };
  }());