$(document).ready(function() {
    $('#hamburger1').click(function() {
        $('.main-nav').toggleClass('active');
        $('.main-menu-inner').toggleClass('active');

    })


    $('.fea-project-rigth-vid-btn').click(function(e) {
        e.preventDefault();
        $('#fea-project-vid').trigger('play');
    })

    $('.wordpress-slider').slick({
        infinite: true,
        arrows: true, // Adds arrows to sides of slider 
        dots: false, // Adds the dots on the bottom
        prevArrow: '<div class="class-to-style prev-btn"><i class="fas fa-chevron-left"></i><span class="sr-only">Prev</span></div>',
        nextArrow: '<div class="class-to-style next-btn"><i class="fas fa-chevron-right"></i><span class="sr-only">Next</span></div>',
        mobilefirst: true,
        responsive: [{
            breakpoint: 767,
            settings: {
                slidesToShow: 1

            }
        }]
    });

    $('.wordpresslast-slider').slick({
        infinite: true,
        arrows: true, // Adds arrows to sides of slider 
        dots: false, // Adds the dots on the bottom
        prevArrow: '<div class="class-to-style prev-btn"><i class="fas fa-chevron-left"></i><span class="sr-only">Prev</span></div>',
        nextArrow: '<div class="class-to-style next-btn"><i class="fas fa-chevron-right"></i><span class="sr-only">Next</span></div>',
        mobilefirst: true,
        responsive: [{
                breakpoint: 767,
                settings: {
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2
                }
            }
        ]
    });

    // $('.wordpress-slider').slick({
    //     dots: true,
    //     infinite: true,
    //     speed: 300,
    //     slidesToShow: 1,
    //     centerMode: true,
    //     variableWidth: true
    // });
    $(window).bind('scroll', function() {
        if ($(window).scrollTop() > 50) {
            $('.staticheader').addClass('fixed');
        } else {
            $('.staticheader').removeClass('fixed');
        }
    });


    $('.main-nav-tabs').click(function(e) {
        e.preventDefault();
        $('.main-nav-tabs').removeClass('active');
        $(this).addClass('active');


        if ($('#menu-tab-1').hasClass('active')) {
            $('.main-tab-inner-content2').removeClass('active');
            $('.main-tab-inner-content3').removeClass('active');
            $('.main-tab-inner-content4').removeClass('active');
            $('.main-tab-inner-content5').removeClass('active');
            $('.main-tab-inner-content1').addClass('active');
        } else if ($('#menu-tab-2').hasClass('active')) {
            $('.main-tab-inner-content1').removeClass('active');
            $('.main-tab-inner-content3').removeClass('active');
            $('.main-tab-inner-content4').removeClass('active');
            $('.main-tab-inner-content5').removeClass('active');
            $('.main-tab-inner-content2').addClass('active');
        } else if ($('#menu-tab-3').hasClass('active')) {
            $('.main-tab-inner-content1').removeClass('active');
            $('.main-tab-inner-content2').removeClass('active');
            $('.main-tab-inner-content4').removeClass('active');
            $('.main-tab-inner-content5').removeClass('active');
            $('.main-tab-inner-content3').addClass('active');
        } else if ($('#menu-tab-4').hasClass('active')) {
            $('.main-tab-inner-content1').removeClass('active');
            $('.main-tab-inner-content2').removeClass('active');
            $('.main-tab-inner-content3').removeClass('active');
            $('.main-tab-inner-content5').removeClass('active');
            $('.main-tab-inner-content4').addClass('active');
        } else if ($('#menu-tab-5').hasClass('active')) {
            $('.main-tab-inner-content1').removeClass('active');
            $('.main-tab-inner-content2').removeClass('active');
            $('.main-tab-inner-content3').removeClass('active');
            $('.main-tab-inner-content4').removeClass('active');
            $('.main-tab-inner-content5').addClass('active');
        }
    })

    $('#menu-tab-5').unbind('click');


});