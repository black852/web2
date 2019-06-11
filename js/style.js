$(document).ready(function() {

    $('.BEAUTY_PROJECT_LIST_1_TITLE').click(function() {
        $('.BEAUTY_PROJECT_LIST_1_ITEM').toggle(600);
        $('.BEAUTY_PROJECT_BG').css('background-image', 'url(image/bg1-1.jpg)');
        $('.BEAUTY_PROJECT_LIST_2_ITEM').hide(600);
        $('.BEAUTY_PROJECT_LIST_3_ITEM').hide(600);
        $('.BEAUTY_PROJECT_LIST_4_ITEM').hide(600);
    });
    $('.BEAUTY_PROJECT_LIST_1_1').click(function() {
        $('.BEAUTY_PROJECT_BG').css('background-image', 'url(image/bg6.jpg)');
    });
    $('.BEAUTY_PROJECT_LIST_1_2').click(function() {
        $('.BEAUTY_PROJECT_BG').css('background-image', 'url(image/bg8.jpg)');
    });

    $('.BEAUTY_PROJECT_LIST_2_TITLE').click(function() {
        $('.BEAUTY_PROJECT_LIST_2_ITEM').toggle(600);
        $('.BEAUTY_PROJECT_BG').css('background-image', 'url(image/bg2-5.jpg)');
        $('.BEAUTY_PROJECT_LIST_1_ITEM').hide(600);
        $('.BEAUTY_PROJECT_LIST_3_ITEM').hide(600);
        $('.BEAUTY_PROJECT_LIST_4_ITEM').hide(600);
    });
    $('.BEAUTY_PROJECT_LIST_2_1').click(function() {
        $('.BEAUTY_PROJECT_BG').css('background-image', 'url(image/bg9.jpg)');
    });
    $('.BEAUTY_PROJECT_LIST_2_2').click(function() {
        $('.BEAUTY_PROJECT_BG').css('background-image', 'url(image/bg10.jpg)');
    });
    $('.BEAUTY_PROJECT_LIST_3_TITLE').click(function() {
        $('.BEAUTY_PROJECT_LIST_3_ITEM').toggle(600);
        $('.BEAUTY_PROJECT_BG').css('background-image', 'url(image/bg5.jpg)');
        $('.BEAUTY_PROJECT_LIST_1_ITEM').hide(600);
        $('.BEAUTY_PROJECT_LIST_2_ITEM').hide(600);
        $('.BEAUTY_PROJECT_LIST_4_ITEM').hide(600);
    });
    $('.BEAUTY_PROJECT_LIST_3_1').click(function() {
        $('.BEAUTY_PROJECT_BG').css('background-image', 'url(image/bg7.jpg)');
    });
    $('.BEAUTY_PROJECT_LIST_4_TITLE').click(function() {
        $('.BEAUTY_PROJECT_LIST_4_ITEM').toggle(600);
        $('.BEAUTY_PROJECT_BG').css('background-image', 'url(image/bg4.jpg)');
        $('.BEAUTY_PROJECT_LIST_1_ITEM').hide(600);
        $('.BEAUTY_PROJECT_LIST_2_ITEM').hide(600);
        $('.BEAUTY_PROJECT_LIST_3_ITEM').hide(600);
    });




    $('.WEEK1').click(function() {
        $('.MINI_LIST').css('display', 'block');
        $('.DOCTOR1').css('display', 'block');
        $('.DOCTOR2').css('display', 'none');
        $('.DOCTOR4').css('display', 'none');
        $('.DOCTOR5').css('display', 'none');
    });
    $('.WEEK3').click(function() {
        $('.MINI_LIST').css('display', 'block');
        $('.DOCTOR2').css('display', 'block');
        $('.DOCTOR1').css('display', 'none');
        $('.DOCTOR4').css('display', 'none');
        $('.DOCTOR5').css('display', 'none');
    });
    $('.WEEK4').click(function() {
        $('.MINI_LIST').css('display', 'block');
        $('.DOCTOR4').css('display', 'block');
        $('.DOCTOR1').css('display', 'none');
        $('.DOCTOR2').css('display', 'none');
        $('.DOCTOR5').css('display', 'none');
    });
    $('.WEEK5').click(function() {
        $('.MINI_LIST').css('display', 'block');
        $('.DOCTOR5').css('display', 'block');
        $('.DOCTOR4').css('display', 'none');
        $('.DOCTOR1').css('display', 'none');
        $('.DOCTOR2').css('display', 'none');
    });
    $('.LIST_CLOSE').click(function() {
        $('.MINI_LIST').css('display', 'none');
    });

    $('.TOTOP').click(function() {
        $('html,body').animate({ scrollTop: 0 }, 1500);
        return false;
    });


    $(window).scroll(function() {
        last = $("body").height() - $(window).height() - 157;
        if ($(window).scrollTop() <= last) {

            $('.test').css({
                'position': 'fixed',
                'top': 'auto',
                'bottom': '0',
                'opacity': '1'
            });
            /*$('.test').css({'position': 'absolute',
                            'bottom':'0px'})*/
            ;
        } else {
            $('.test').css({
                'position': 'absolute',
                'left': '0',
                'top': '-215px'
            })
        }

    })



    $('.DOT:eq(0)').click(function() {
        i = 0
        BANNER_AUTOPLAY()

    })
    $('.DOT:eq(1)').click(function() {
        i = 1
        BANNER_AUTOPLAY()
    })
    $('.DOT:eq(2)').click(function() {
        i = 2
        BANNER_AUTOPLAY()
    })
    $('.DOT:eq(3)').click(function() {
        i = 3
        BANNER_AUTOPLAY()
    })
    $('.DOT:eq(4)').click(function() {
        i = 4
        BANNER_AUTOPLAY()
    })


    setInterval(BANNER_AUTOPLAY, 3000)
    var i = 0;

    function BANNER_AUTOPLAY() {


        $('.BANNER').fadeOut(400, function() {
            $('.BANNER').attr('src', 'image/banner/banner' + i + '.jpg')
            $('.BANNER').fadeIn()
            $('.DOT').css({ 'background-color': 'rgba(192, 192, 192, 0.7)' })
            $('.DOT:eq(' + i + ')').css({ 'background-color': 'rgb(255, 0, 149)' })
            i++;
            if (i > 4) { i = 0 }
        })


    }


    /*$('.DOT:eq(0)').click(function(){
        n=0
        change()
    })

    $('.DOT:eq(1)').click(function(){
        n=1
        change()
    })

    $('.DOT:eq(2)').click(function(){
        n=2
        change()
    })

    $('.DOT:eq(3)').click(function(){
        n=3
        change()
    })


    var n=0;
    setInterval(play,5000)
    function play(){
        n++;
        if(n>3){n=0;}
        change()
     }


    function change(){
        $('.BANNER').fadeOut(400,function(){
            $('.BANNER').attr('src','image/banner/banner'+n+'.jpg')
            $('.BANNER').fadeIn() 
        })
        $('.DOT').css({'background-color':'rgba(192, 192, 192, 0.7)'})
        $('.DOT:eq('+n+')').css({'background-color':'rgb(255, 0, 149)'})
    }*/

















})