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
        navText: ["<i class='fa fa-long-arrow-left'></i>", "<i class='fa fa-long-arrow-right'></i>"]
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
        nav: false,
        dots: false,
        autoplay: false,
        navText: ["<i class='fa fa-long-arrow-left'></i>", "<i class='fa fa-long-arrow-right'></i>"]
    });

    // comedown 
    
     // -- End work -- //
            
    });

   jQuery(window).load(function(){



    
   });

}(jQuery));	