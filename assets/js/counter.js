var Counter = (function () {

    var display = $(".counter-items:nth-child(1) span:first-child");

    /* =================== private methods ================= */
    // start elements
    function start() {
        var number = {param:0};
        var duration = 1;
        
        function count() {
          TweenLite.to(number, duration, {param:"+=20", roundProps:"param",
          onUpdate:update, onComplete:complete, ease:Linear.easeNone});
          
        }
        
        function update() {
          display.innerHTML = number.param;
        }
        
        function complete() {
          //alert("Complete");
        }
        
        count();
    }
    
  
    /* =================== public methods ================== */
    // main init method
    function init() {
        start();
    }
  
    /* =============== export public methods =============== */
    return {
      init: init
    };
  }());


