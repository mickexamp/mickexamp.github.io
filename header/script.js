$(document).ready(function(){
    function close() {
        $('.fade').css('color','rgb(170,170,170)');
        $('#cs-burger').removeClass('cs-burger-open');
        $('.cs-arrow').removeClass('cs-arrow-hidden');
    }
    function burger() {
        if ($('.cs-collapse-menu').hasClass('visible-menu')){
           $('#cs-burger').addClass('cs-burger-open'); 
            $('.cs-arrow').addClass('cs-arrow-hidden');
        } else {
            close();
        }
    }
    $(".fade").click(function(){
        var show = $(this).attr('cs-show');
        var hide = $(this).attr('cs-hide');
        $(hide).removeClass('visible-menu');
        $(show).delay(400).toggleClass('visible-menu');
        $(this).css('color','rgb(255,255,255)');
        $('.fade').not(this).css('color','rgb(170,170,170)');
        burger();
    });
    $('#cs-burger').click(function(){
        close();
        $('.cs-collapse-menu').removeClass('visible-menu');
    });
});
