var Menu = (function () {
    var searchHeader = $(".header__container .header-search");
    var form = $(".header__container .header-search form");
    var formGroup = $(".header__container .header-search form .form-group");
    var searchInput = $(".header__container .header-search form .form-group input");
    var searchIcon = $(".header__container .header-search form a");
    var headerUser = $(".header__container .header-user");
    var headerMenu = $(".header__container .header-menu");
    var headerLogo = $(".header__container .header-logo");
    var toggleSearch = false;
    
  
    /* =================== private methods ================= */
    // searchIconClick elements
    
    function searchIconClick() {
      searchIcon.on("click", function () {
        if (toggleSearch == false) {
          searchHeader.css({"width": "96%"});
          form.css({"width": "100%"});
          formGroup.css({"width": "95%"});
          searchInput.css({"width": "100%", "opacity": 1});
          headerUser.css({"opacity": 0, "width": 0});
          headerMenu.css({"opacity": 0, "width": 0});
          headerLogo.css({"opacity": 0, "width": 0});
          toggleSearch = true;
        } else{
          searchHeader.css({"width": "unset"});
          form.css({"width": "unset"});
          formGroup.css({"width": "unset"});
          searchInput.css({"width": "0", "opacity": 0});
          headerUser.css({"opacity": 1, "width": "unset"});
          headerMenu.css({"opacity": 1, "width": "unset"});
          headerLogo.css({"opacity": 1, "width": "unset"});
          toggleSearch = false;
        }
        
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