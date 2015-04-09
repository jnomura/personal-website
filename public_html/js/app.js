/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var main = function(){  
    $(window).ready(function(){
    var win = $(this);
    if (win.width() < 650) {
        $('.title').css("font-size","15px");
        $('#navbar-name').css("max-width","290px");
    }
    else {
        $('.title').css("font-size","24px");
        $('#navbar-name').css("max-width","400px");
    }
    });
    
    $(window).resize(function(){
    var win = $(this);
    if (win.width() < 650) {
        $('.title').css("font-size","15px");
        $('#navbar-name').css("max-width","290px");
        $('#nav').css("margin-top","40%");
    }
    else {
        $('.title').css("font-size","24px");
        $('#navbar-name').css("max-width","400px");
        $('#nav').css("margin-top","25%");
    }
    });
        
    // browser window scroll (in pixels) after which the "back to top" link is shown
    var offset = 300,
            //browser window scroll (in pixels) after which the "back to top" link opacity is reduced
            offset_opacity = 1200,
            //duration of the top scrolling animation (in ms)
            scroll_top_duration = 700,
            //grab the "back to top" link
            $back_to_top = $('.cd-top');

    //hide or show the "back to top" link
    $(window).scroll(function(){
            ( $(this).scrollTop() > offset ) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
            if( $(this).scrollTop() > offset_opacity ) { 
                    $back_to_top.addClass('cd-fade-out');
            }
    });

    //smooth scroll to top
    $back_to_top.on('click', function(event){
            event.preventDefault();
            $('body,html').animate({
                    scrollTop: 0
                    }, scroll_top_duration
            );
    });
};

$(document).ready(main);