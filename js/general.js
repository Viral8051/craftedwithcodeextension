$(document).ready(function() {
    $('#hamburger1').click(function() {
        $('.main-menu').toggleClass('active');
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
                slidesToShow: 1,
                arrows: false
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
                    slidesToShow: 1,
                    arrows: false
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

});