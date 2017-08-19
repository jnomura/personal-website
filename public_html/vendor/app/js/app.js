var mainScroll = function(){  
    $(window).ready(function(){
        var win = $(this);
        if (win.width() <550) {
            $('.title').css({"font-size":"3vw","margin-top":"70px"});
            $('h3').css("font-size","3.5vw");
            $('#email-link').css("font-size","11px");
        } else if (win.width() < 650) {
            $('.title').css({"font-size":"4.5vw","margin-top":"10px"});
            $('h3').css("font-size","4.5vw");
            $('.navbar-center').css("width","290px");
            $('.center').css("width","290px");
            $('.navbar-name-left').css({"width":"190px","margin-top":"-4px"});
            $('#email-link').css("font-size","13px");
        } else if (win.width() < 900) {
            $('.title').css({"font-size":"24px","margin-top":"70px"});
        } else {
            $('.title').css({"font-size":"24px","margin-top":"10px"});
            $('h3').css("font-size","16px");
            $('.navbar-center').css("width","400px");
            $('.center').css("width","400px");
            $('.navbar-name-left').css({"width":"230px","margin-top":"10px"});
            $('#email-link').css("font-size","13px");
        }
    });
    
    $(window).resize(function(){
        var win = $(this);
        if (win.width() < 550) {
            $('.title').css({"font-size":"3vw","margin-top":"70px"});
            $('#email-link').css("font-size","11px");
            $('h3').css("font-size","3.5vw");
        } else if (win.width() < 650) {
            $('.title').css({"font-size":"4.5vw","margin-top":"10px"});
            $('h3').css("font-size","4.5vw");
            $('.navbar-center').css("width","290px");
            $('.center').css("width","290px");
            $('#nav').css("margin-top","40%");
            $('.navbar-name-left').css({"width":"190px","margin-top":"-4px"});
            $('#email-link').css("font-size","13px");
        } else if (win.width() < 900) {
            $('.title').css({"font-size":"24px","margin-top":"70px"});
        } else {
            $('.title').css({"font-size":"24px","margin-top":"10px"});
            $('h3').css("font-size","16px");
            $('.navbar-center').css("width","400px");
            $('.center').css("width","400px");
            $('#nav').css("margin-top","25%");
            $('.navbar-name-left').css({"width":"230px","margin-top":"10px"});
            $('#email-link').css("font-size","13px");
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

$(document).ready(mainScroll);