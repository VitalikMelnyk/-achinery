$(function() {
    //   $('[data-slider]').slick({
    //     infinity: true,
    //     fade: false,
    //     slidesToShow: 1,
    //     slidesToScroll: 1
    // })
    
    $('#nav-toggle').on('click', function(event) {
        $('.header-nav').toggleClass('active');
    })

})