$(window).scroll(function(){
    $('#video').css({'top': -$(window).scrollTop()/1.5});
    $('.scroll-bg-img').css({'top': -$(window).scrollTop()/5}).css({'left': -$(window).scrollTop()/30})
}).scroll();