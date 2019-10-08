(function ($) {
	"use strict";

    jQuery(document).ready(function($){
        
     // -- start work -- //
     $(".homepage_slides").owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        dots: false,
        nav:false,
    });

    $(".listing_carousel").owlCarousel({
        items: 4,
        margin: 30,
        loop: true,
        nav: true,
        dots: false,
        autoplay: true,
        navText: ["<i class='fa fa-long-arrow-left'></i>", "<i class='fa fa-long-arrow-right'></i>"],
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:4,
                nav:false
            },
            1000:{
                items:4,
                nav:true,
                loop:true
            }
        }
    });

    $(".new_arrivals_sides").owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        dots: false,
        nav:true,
        navText: ["<i class='fa fa-long-arrow-left'></i>", "<i class='fa fa-long-arrow-right'></i>"]
    });

    $(".deal_slides").owlCarousel({
        items: 1,
        loop: true,
        nav: true,
        dots: false,
        autoplay: false,
        navText: ["<i class='fa fa-long-arrow-left'></i>", "<i class='fa fa-long-arrow-right'></i>"]
    });

    $(".listing_carousel2").owlCarousel({
        items: 4,
        loop: true,
        margin:30,
        nav: true,
        dots: false,
        autoplay: true,
        navText: ["<i class='fa fa-long-arrow-left'></i>", "<i class='fa fa-long-arrow-right'></i>"],
        responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:4,
            nav:false
        },
        1000:{
            items:4,
            nav:true,
            loop:true
        }
    }
    });

    $(".large_image").magnificPopup({
        type: 'image',
        gallery: {
            enabled: true,
        },
    });

    $(".testimonial_carousel").owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        nav: true,
        dots: false,
        navText: ["<i class='fa fa-long-arrow-left'></i>", "<i class='fa fa-long-arrow-right'></i>"]
    });

    $(".special_carousel").owlCarousel({
        items: 6,
        loop: true,
        margin:30,
        autoplay: false,
        nav: true,
        dots: false,
        navText: ["<i class='fa fa-long-arrow-left'></i>", "<i class='fa fa-long-arrow-right'></i>"]
    });

    // comedown 
    
     // -- End work -- //
            
    });

   jQuery(window).load(function(){



    
   });

}(jQuery));	