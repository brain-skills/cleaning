(function ($) {
	"use strict";

		// Preloader start
		$(window).on('load', function () {
			$(".preloder_part").fadeOut();
			$(".spinner").delay(1000).fadeOut("slow");
		});
		// preloader end

	// back to top start
	$(window).scroll(function() {
		if ($(this).scrollTop() > 200) {
		$('.backtotop:hidden').stop(true, true).fadeIn();
		} else {
		$('.backtotop').stop(true, true).fadeOut();
		}
	});
	$(function() {
		$(".scroll").on('click', function() {
		$("html,body").animate({scrollTop: 0}, "slow");
		return false
		});
	});

	// mobile menu start
	$('#mobile-menu-active').metisMenu();

	$('#mobile-menu-active .dropdown > a').on('click', function (e) {
		e.preventDefault();
	});

	$(".hamburger_menu > a").on("click", function (e) {
		e.preventDefault();
		$(".slide-bar").toggleClass("show");
		$("body").addClass("on-side");
		$('.body-overlay').addClass('active');
		$(this).addClass('active');
	});

	$(".close-mobile-menu > a").on("click", function (e) {
		e.preventDefault();
		$(".slide-bar").removeClass("show");
		$("body").removeClass("on-side");
		$('.body-overlay').removeClass('active');
		$('.hamburger_menu > a').removeClass('active');
	});

	$('.body-overlay').on('click', function () {
		$(this).removeClass('active');
		$(".slide-bar").removeClass("show");
		$("body").removeClass("on-side");
		$('.hamburger-menu > a').removeClass('active');
	});
	// mobile menu end

	// brand slide
    $('.brand__slide').slick({
		infinite: true,
		speed: 500,
		slidesToShow: 5,
		autoplay: true,
  		autoplaySpeed: 3000,
		slidesToScroll: 1,
		dots: false,
		arrows: false,
		responsive: [
			{
			  breakpoint: 1024,
			  settings: {
				slidesToShow: 4,
			  }
			},
			{
			  breakpoint: 600,
			  settings: {
				slidesToShow: 3,
			  }
			},
			{
			  breakpoint: 480,
			  settings: {
				slidesToShow: 2,
			  }
			}
		  ]
	});

	// service slide
    $('.service__slide').slick({
		infinite: true,
		speed: 500,
		slidesToShow: 4,
		autoplay: true,
  		autoplaySpeed: 3000,
		slidesToScroll: 1,
		dots: false,
		arrows: true,
		prevArrow: '<i class="service-arrow service-prev far fa-long-arrow-left"></i>',
		nextArrow: '<i class="service-arrow service-next far fa-long-arrow-right"></i>',
		responsive: [
			{
			  breakpoint: 1025,
			  settings: {
				slidesToShow: 3,
			  }
			},
			{
			  breakpoint: 769,
			  settings: {
				slidesToShow: 2,
			  }
			},
			{
			  breakpoint: 480,
			  settings: {
				slidesToShow: 1,
			  }
			}
		  ]
	});
    
	$('.project__slider').slick({
		infinite: true,
		dots: false,
		arrows: false,
		slidesToShow: 3,
		slidesToScroll: 1,
		centerMode: true,
		centerPadding:'0',
	});
	$('.testimonial__slide').slick({
		infinite: true,
		dots: true,
		arrows: false,
		slidesToShow: 1,
		slidesToScroll: 1,
	});
	$('.testimonial__slide-two').slick({
		infinite: true,
		dots: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		prevArrow: '<i class="testimonial__arrow testimonial-prev"></i>',
		nextArrow: '<i class="testimonial__arrow testimonial-next"></i>',
	});

	// service slide
    $('.blog__slide').slick({
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		autoplay: true,
  		autoplaySpeed: 3000,
		slidesToScroll: 1,
		dots: false,
		arrows: true,
		prevArrow: '<i class="blog-arrow blog-prev far fa-long-arrow-left"></i>',
		nextArrow: '<i class="blog-arrow blog-next far fa-long-arrow-right"></i>',
		responsive: [
			{
			  breakpoint: 1024,
			  settings: {
				slidesToShow: 3,
			  }
			},
			{
			  breakpoint: 769,
			  settings: {
				slidesToShow: 2,
			  }
			},
			{
			  breakpoint: 480,
			  settings: {
				slidesToShow: 1,
			  }
			}
		  ]
	});

	/* magnificPopup video view */
	$('.popup-video').magnificPopup({
		type: 'iframe'
	});

	
	// Accordion Box start
	if ($(".accordion_box").length) {
		$(".accordion_box").on("click", ".acc-btn", function () {
			var outerBox = $(this).parents(".accordion_box");
			var target = $(this).parents(".accordion");

			if ($(this).next(".acc_body").is(":visible")) {
				$(this).removeClass("active");
				$(this).next(".acc_body").slideUp(300);
				$(outerBox).children(".accordion").removeClass("active-block");
			} else {
				$(outerBox).find(".accordion .acc-btn").removeClass("active");
				$(this).addClass("active");
				$(outerBox).children(".accordion").removeClass("active-block");
				$(outerBox).find(".accordion").children(".acc_body").slideUp(300);
				target.addClass("active-block");
				$(this).next(".acc_body").slideDown(300);
			}
		});
	}
	// Accordion Box end

	// inhover active start
	$(".tab-service__item").on('mouseenter', function () {
		$(".tab-service__item").removeClass("active");
		$(this).addClass("active");
	});
	// nhover active start

	if ($("#beforeafter").length) {
		$(window).load(function() {
			$("#beforeafter").twentytwenty();
		});
	}
	if ($(".beforeafter-wrap").length) {
		$(window).load(function() {
			$(".beforeafter-wrap").twentytwenty();
		});
	}
	$('a[data-toggle="pill"]').on('shown.bs.tab', function (e) {
		$(".beforeafter-wrap[data-orientation!='vertical']").trigger('resize')
	});

	// odometer counter start
	jQuery('.odometer').appear(function (e) {
		var odo = jQuery(".odometer");
		odo.each(function () {
			var countNumber = jQuery(this).attr("data-count");
			jQuery(this).html(countNumber);
		});
	});
	// odometer counter end


})(jQuery);