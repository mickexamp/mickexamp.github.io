$(document).ready(function(){
        $('.hide-link').hide();
        $('.content').click(function(){
            $(this).children(":first").not(':hidden').hide(700);
            $(this).children(":first").not(':visible').show(700);
        });
});




function mobileScript() {
                    /* accordeon */
        $('.hide-link').hide();
        $('.content').click(function(){
            $('.hide-link').not($(this).next()).not( ':hidden' ).hide( "blind",{direction: 'vertical'},700 );
            $(this).next().not(':visible').show("blind",{direction: 'vertical'},700);
        });
}
    
