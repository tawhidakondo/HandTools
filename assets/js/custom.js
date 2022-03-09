    /*--------------------------------
	 	1. Reveloution Slider
	----------------------------------*/
    var tpj = jQuery;
    var revapi1078;
    if (tpj("#artistika_home_page").revolution == undefined) {
        revslider_showDoubleJqueryError("#artistika_home_page");
    } else {
        revapi1078 = tpj("#artistika_home_page").show().revolution({
            sliderType: "standard",
            jsFileLocation: "revolution/js/",
            sliderLayout: "auto",
            dottedOverlay: "none",
            delay: 9000,
            navigation: {
                keyboardNavigation: "off",
                keyboard_direction: "horizontal",
                mouseScrollNavigation: "off",
                mouseScrollReverse: "default",
                onHoverStop: "off",
                touch: {
                    touchenabled: "on",
                    swipe_threshold: 75,
                    swipe_min_touches: 1,
                    swipe_direction: "horizontal",
                    drag_block_vertical: false
                },


            },
            viewPort: {
                enable: true,
                outof: "pause",
                visible_area: "80%",
                presize: false
            },
            responsiveLevels: [1240, 1024, 778, 480],
            visibilityLevels: [1240, 1024, 778, 480],
            gridwidth: [1240, 1024, 778, 480],
            gridheight: [840, 600, 500, 400],
            lazyType: "none",
            parallax: {
                type: "mouse",
                origo: "slidercenter",
                speed: 2000,
                levels: [2, 3, 4, 5, 6, 7, 12, 16, 10, 50, 46, 47, 48, 49, 50, 55],
            },
            shadow: 0,
            spinner: "off",
            stopLoop: "off",
            stopAfterLoops: -1,
            stopAtSlide: -1,
            shuffle: "off",
            autoHeight: "off",
            hideThumbsOnMobile: "off",
            hideSliderAtLimit: 0,
            hideCaptionAtLimit: 0,
            hideAllCaptionAtLilmit: 0,
            debugMode: false,
            fallbacks: {
                simplifyAll: "off",
                nextSlideOnWindowFocus: "off",
                disableFocusListener: false,
            }
        });
    }
		var project = setInterval(projectDone, 10)
		var awards = setInterval(awardsDone, 10)
		var trophy = setInterval(trophyDone, 10)
		var connect = setInterval(connectDone, 10)
		
			let count1 = 1;
			let count2 = 1;
			let count3 = 1;
			let count4 = 1;
			
				function projectDone(){
					count1++;
					document.querySelector(".counter").innerHTML= count1;
					if (count1 == 1100){
						clearInterval(project);
					}
				}
				function awardsDone(){
					count2++;
					document.querySelector(".counter2").innerHTML= count2;
					if (count2 == 900){
						clearInterval(awards);
					}
				}
				function trophyDone(){
					count3++;
					document.querySelector(".counter3").innerHTML= count3;
					if (count3 == 1000){
						clearInterval(trophy);
					}
				}
				function connectDone(){
					count4++;
					document.querySelector(".counter4").innerHTML= count4;
					if (count4 == 1050){
						clearInterval(connect);
					}
				}
var $grid = $('.grid').isotope({
  // set itemSelector so .grid-sizer is not used in layout
  itemSelector: '.grid-item',
  percentPosition: true,
  masonry: {
    // use element for option
    columnWidth: '.grid-sizer'
  }
})
$('.filter-button-group').on( 'click', 'button', function() {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});				
$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
	  items:4,
	  loop:true,
	  autoplay:true,
  });
});
$(window).scroll(function () {
    var scroll = $(window).scrollTop();

    if (scroll > 850) {
        $(".navbar").css({
            "background": "rgba(35,35,35,1)",
            "transition": ".7s"
        });
    } else {
        $(".navbar").css("background", "transparent");
    }

    if (scroll > 480) {
        $(".navbar-blog").css({
            "background": "rgba(255,212,85, .8)",
            "transition": ".7s"
        });
    } else {
        $(".navbar-blog").css("background", "transparent");
    }

});






















				