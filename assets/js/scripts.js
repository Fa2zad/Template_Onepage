//------------------------------------//
//--------- document ready -----------//
//------------------------------------//
$(document).ready(function(){

    //====== Menu
    Menu.init();

    //====== Portfolio
    Portfolio.init();
    // Counter.init();

});

//------------------------------------//
//---------- window resize -----------//
//------------------------------------//
$(window).resize(function () {

    //====== Portfolio
    Portfolio.init();
});