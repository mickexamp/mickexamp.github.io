/* scr - screen */
$(document).ready(function(){
    
    var scr_w = $(window).width();
    var scr_h = $(window).height();
    var scr_h_px = scr_h + "px";
    
    
    if (scr_w > 470) { desctopScript()} else { mobileScript() }
        
    function desctopScript() {
                    // section height 
            $('[full-height]').css('height', scr_h  + "px" );
                        // accordeon width 
  //          var accordeonFirst_w = ( a ) => {
			 var accordeonFirst_w = function( a ){
                var w = (a > 1000) ? a / 2.5 :
                    (a > 800) ? a / 3 :
                    (a > 600) ? a / 4 :
                    (a > 470) ? a / 10:
                    location.reload(false);
                return w;
            }
            $('.accordeon-first').css('width', accordeonFirst_w(scr_w) + 'px' );
            $('.accordeon-first').next().click(function(){
                $('body').css('width','100%');
            }); 
            $('.accordeon').not($('.accordeon-first')).next().click(function(){
                $('body').css('width','170%');
            })
                        /* accordeon */
            $('.accordeon').not($('.accordeon-first')).hide();
            $('.accordeon').next().click(function(){
                $('.accordeon').not($(this).prev()).not( ':hidden' ).hide( "blind",{direction: 'horizontal'},500 );
                $(this).prev().not(':visible').show("blind",{direction: 'horizontal'},500);
            });
        //** if screen resize 
            $(window).resize(function(){
                var scr_w = $(window).width();
                var scr_h = $(window).height();
                        /* section height */
                $('[full-height]').css('height', scr_h + "px" );
                        /* accordeon width */
                $('.accordeon-first').css('width', accordeonFirst_w(scr_w) + 'px' );
            });
        //** end resize **
    }//* end desctopScript *
    
    function mobileScript() {
                        /* accordeon */
            $('.accordeon').not($('.accordeon-first')).hide();
            $('.accordeon').next().click(function(){
                $('.accordeon').not($(this).prev()).not( ':hidden' ).hide( "blind",{direction: 'vertical'},700 );
                $(this).prev().not(':visible').show("blind",{direction: 'vertical'},700);
            });
        //** if screen resize
            $(window).resize(function(){
                if ( $(window).width() > 470) { location.reload(false) }
            });
        //**end resize    
    }
    
});