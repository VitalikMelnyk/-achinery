$(function() {
    // Declaration

    var headerHeight = $('.header-information').innerHeight(),
        navigation = $('#nav'),
        scrollOffSet = $(window).scrollTop();  
        checkScroll(scrollOffSet);      



    // Fixed navigation
    $(window).on('scroll', function() {
        scrollOffSet = $(this).scrollTop();
        checkScroll(scrollOffSet);  
    })

    function checkScroll(scrollOffSet) {
        if(scrollOffSet >= headerHeight) {
            navigation.addClass('fixed');
        }
        else {
            navigation.removeClass('fixed');
        }
    }
    // ------------------- //



    // Add active class on navigation-link




    // ------------------- //


    // Burger menu
    $('#nav-toggle').on('click', function(event) {
        $('.header-nav').toggleClass('active');
    })
    // ------------------- //





})