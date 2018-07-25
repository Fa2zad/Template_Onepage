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


//------------------------------------//
//---------- window scroll -----------//
//------------------------------------//
$(window).scroll(function () {

    //====== FadeIn
    //ScrollEffect.fadeInOnScroll('img', 1500, 100);
    ScrollEffect.anyEffectOnScroll('img', 1500, 100,{'opacity': '1', 'background':'red'});
    
    
});