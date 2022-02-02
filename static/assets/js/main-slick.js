$(document).ready(function() {
    $('.com-slick').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        rows: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        dots: false,
        pauseOnHover: true,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 4,
                navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
            }
        }, {
            breakpoint: 992,
            settings: {
                slidesToShow: 4,
            }
        }, {
            breakpoint: 576,
            settings: {
                slidesToShow: 3,
                margin: 10,
                navText: [],
            }

        }]
    });
});


$(document).ready(function() {
    $('.product-all-slide').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        rows: 2,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: false,
        navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
        pauseOnHover: true,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 5
            }
        }, {
            breakpoint: 992,
            settings: {
                slidesToShow: 5
            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 2
            }

        }]
    });
});


$(document).ready(function() {
    $('.idea-all-slide').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        rows: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: false,
        navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
        pauseOnHover: true,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 1
            }
        }, {
            breakpoint: 992,
            settings: {
                slidesToShow: 1
            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 1
            }

        }]
    });
});