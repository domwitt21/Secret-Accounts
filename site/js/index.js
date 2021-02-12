var heroCarousel = $("#heroCarousel");

heroCarousel.on('slid.bs.carousel', function (e) {
    $(this).find('h2').addClass('animated fadeInDown');
    $(this).find('p').addClass('animated fadeInUp');
    $(this).find('.btn-get-started').addClass('animated fadeInUp');
});

// jQuery counterUp
$('[data-toggle="counter-up"]').counterUp({
    delay: 10,
    time: 1000
});

// Testimonials carousel (uses the Owl Carousel library)
$(".testimonials-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    items: 1
});

// Initi AOS
AOS.init({
    duration: 1000,
    easing: "ease-in-out-back"
});
