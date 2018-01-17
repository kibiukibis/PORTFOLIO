$(document).ready(function() {
    $('.slider-box').slick({
        arrows: true,
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        responsive: [{
                breakpoint: 900,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: false,

                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,

                }
            }
        ]
    });

    $('.fade').slick({
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 4000,
        responsive: [{
            breakpoint: 900,
            settings: {

                arrows: false,
            }
        }]
    });
    $('.blog-slider-box').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [{
            breakpoint: 900,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }]
    });

});