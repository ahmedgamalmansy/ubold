$(window).load(function(){
    $(".preloader").fadeOut(1000);
    $("nav").css({
       display: "block"
    });
});
$(document).ready(function()
{
	
    $("html").niceScroll({
        cursorborder: '1px solid #eee',
        cursorspeed: '80',
        mousescrollstep: '40'
    });
    
    /*===================================
        change active links on scroll
    ====================================
    
    var sections = $('section')
        , nav = $('nav')
        , home = $('header')
        , nav_height = nav.outerHeight();
    
    $(window).on('scroll', function () {
        var cur_pos = $(this).scrollTop();
        console.log(cur_pos);
        sections.each(function() {
            var top = $(this).offset().top - nav_height,
                bottom = top + $(this).outerHeight();

            if (cur_pos >= top && cur_pos <= bottom) {
                var x = nav.find('a');
                console.log("x: "+x);
                nav.find('a').removeClass('active');
                var id = $(this).attr('id');
                console.log("the section id is : "+id);
                
                nav.find('a[href="#'+id+'"]').addClass('active');
            }
        });
    });
    
    /*===================================
     navbar background change on scroll
    ====================================*/
    var nav_height = $('nav').outerHeight();
    $(window).on('scroll',function(){
        var cur_pos = $(this).scrollTop();
        if (cur_pos >300){
            $('nav').css({
                background:'#5d9cec',
                opacity: '1'
            });
        } else {
            $('nav').css({
                background: 'rgba(16, 22, 54, 0.2)'
            });
        }
    });
    
    
    /*===================================
            scroll btn event
    ====================================*/
    $("#home").click(function() {
        $('html, body').animate({
            scrollTop: $("#slider").offset().top,
        }, 1000);
        $(this).addClass("active");
    });
    
    $("#features-li ").click(function() {
        $('html, body').animate({
            scrollTop: $("#features").offset().top - nav_height,
        }, 1000);
        $(this).addClass("active");
    });
    
    $("#works_li").click(function() {
        $('html, body').animate({
            scrollTop: $("#work").offset().top - nav_height,
        }, 1000);
        $(this).addClass("active");
    });
    
    $("#team-li").click(function() {
        $('html, body').animate({
            scrollTop: $("#team").offset().top - nav_height,
        }, 1000);
        $(this).addClass("active");
    });
    
    $("#contact-li").click(function() {
        $('html, body').animate({
            scrollTop: $("#contacts").offset().top - nav_height,
        }, 1000);
        $(this).addClass("active");
    });
    
    
    
    
    $('.count').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 5000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
        });
    });
    
});