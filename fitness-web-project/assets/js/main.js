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

     // -- End work -- //
            
    });

   jQuery(window).load(function(){

   });

}(jQuery));	