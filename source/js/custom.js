// JavaScript Document


/*!
 * Start Bootstrap - Freelancer Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('body').on('click', '.page-scroll a', function(event) {
        var $anchor = $(this);
		var $anchorHtml = $anchor.html();
		var offsetObj = $($anchor.attr('href')).offset().top ;
		if($anchorHtml == "Contact"){		
			var offsetObj = offsetObj - 100 ;
			 $('html, body').stop().animate({
            scrollTop: offsetObj 
        }, 1500, 'easeInOutExpo');
        event.preventDefault();		
			}
		else
		{
        $('html, body').stop().animate({
            scrollTop: offsetObj 
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
		}
    });
});

// Floating label headings for the contact form
$(function() {
    $("body").on("input propertychange", ".floating-label-form-group", function(e) {
        $(this).toggleClass("floating-label-form-group-with-value", !! $(e.target).val());
    }).on("focus", ".floating-label-form-group", function() {
        $(this).addClass("floating-label-form-group-with-focus");
    }).on("blur", ".floating-label-form-group", function() {
        $(this).removeClass("floating-label-form-group-with-focus");
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});
