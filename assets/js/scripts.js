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

    //====== FadeIn sample
    //ScrollEffect.fadeInOnScroll('img', 1500, 100);
    //====== any effect sample
    //ScrollEffect.anyEffectOnScroll('img', 1500, 100, {'opacity': '1', 'margin-top':'100px'});

    //.intro__container 
    ScrollEffect.anyEffectOnScroll('.intro__container .row >div:nth-child(1)', 500, 200, {'opacity': '1', 'margin-top':'0px'});
    ScrollEffect.anyEffectOnScroll('.intro__container .row >div:nth-child(2)', 1000, 200, {'opacity': '1', 'margin-top':'0px'});
    ScrollEffect.anyEffectOnScroll('.intro__container .row >div:nth-child(3)', 1500, 200, {'opacity': '1', 'margin-top':'0px'});
    
    //.contentslider__container ul li .contentslider-text > div
    ScrollEffect.fadeInOnScroll('.contentslider__container', 1500, 100);
    ScrollEffect.anyEffectOnScroll('.contentslider__container .contentslider-text >:last-child', 1000, 1500,{'margin-right': '0px'}, 'easeOutBack');

    //.portfolio__container
    ScrollEffect.anyEffectOnScroll('.portfolio__container', 1500, 100, {'opacity': '1', 'margin-top':'0px'});
    ScrollEffect.anyEffectOnScroll('.portfolio__container .container div', 1500, 0, {'opacity': '1', 'margin-top': '0px'}, 'easeInOutCirc');

    //.counter__container
    ScrollEffect.anyEffectOnScroll('.counter__container .counter-items > div', 4000, 200, {'margin-top': '0px'});

    //.tabletslider__container
    ScrollEffect.anyEffectOnScroll('.tabletslider__container', 1500, 200,{'opacity': '1', 'margin-right': '0px'});

    //.aroundimage__container
    ScrollEffect.anyEffectOnScroll('.aroundimage__container', 1500, 200,{'opacity': '1', 'margin-top': '0px'});
    ScrollEffect.anyEffectOnScroll('.aroundimage__container .aroundimage-cols >div', 1500, 200, {'opacity': '1'}, 'easeOutBack');

    //.steps__container
    ScrollEffect.anyEffectOnScroll('.steps__container', 1500, 300, {'opacity': '1', 'margin-top': '0px'}, 'easeOutBack');

    //.ourteam__container .ourteam-cols div
    ScrollEffect.anyEffectOnScroll('.ourteam__container .ourteam-cols div:nth-child(1)', 1500, 200, {'opacity': '1', 'margin-top': '0px'});
    ScrollEffect.anyEffectOnScroll('.ourteam__container .ourteam-cols div:nth-child(2)', 500, 300, {'opacity': '1', 'margin-top': '0px'}, 'easeOutBack');
    ScrollEffect.anyEffectOnScroll('.ourteam__container .ourteam-cols div:nth-child(3)', 1000, 300, {'opacity': '1', 'margin-top': '0px'}, 'easeOutBack');
    ScrollEffect.anyEffectOnScroll('.ourteam__container .ourteam-cols div:nth-child(4)', 1500, 300, {'opacity': '1', 'margin-top': '0px'}, 'easeOutBack');
    ScrollEffect.anyEffectOnScroll('.ourteam__container .ourteam-cols div:nth-child(5)', 2000, 300, {'opacity': '1', 'margin-top': '0px'}, 'easeOutBack');

    
});