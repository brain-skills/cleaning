/* -----------------------------------------------------------------------------



File:           JS Core
Version:        1.0
Last change:    00/00/00 
-------------------------------------------------------------------------------- */
(function() {

	"use strict";

	var clinox = {
		init: function() {
			this.Basic.init();  
		},

		Basic: {
			init: function() {

				this.preloader();
				this.BackgroundImage();
				this.Animation();
				this.StickyHeader();
				this.MobileMenu();
				this.scrollTop();
				this.SkillProgress();
				this.CounterUp();
				this.searchPopUp();
				this.TextAnimation();
				this.CarouselSliderJS();
				this.ProjectFilter();
				this.ShapeScrollImg();
				this.GoogleMap();
				
				
			},
			preloader: function (){
				jQuery(window).on('load', function(){
					jQuery('#preloader').fadeOut('slow',function(){jQuery(this).remove();});
				})
			},
			BackgroundImage: function (){
				$('[data-background]').each(function() {
					$(this).css('background-image', 'url('+ $(this).attr('data-background') + ')');
				});
			},
			Animation: function (){
				if($('.wow').length){
					var wow = new WOW(
					{
						boxClass:     'wow',
						animateClass: 'animated',
						offset:       0,
						mobile:       true,
						live:         true
					}
					);
					wow.init();
				}
			},
			StickyHeader: function (){
				jQuery(window).on('scroll', function() {
					if (jQuery(window).scrollTop() > 250) {
						jQuery('.clinox-header-section').addClass('sticky-on')
					} else {
						jQuery('.clinox-header-section').removeClass('sticky-on')
					}
				})
			},
			searchPopUp: function (){
				if($('.search-box-outer').length) {
					$('.search-box-outer').on('click', function() {
						$('body').addClass('search-active');
					});
					$('.close-search').on('click', function() {
						$('body').removeClass('search-active');
					});
				};
				$('.or-canvas-cart-trigger').on("click", function() {
					$('.or-ofcanvas-cart-wrapper').toggleClass("or-canvas-cart-on");
				});
			},
			MobileMenu: function (){
				$('.open_mobile_menu').on("click", function() {
					$('.mobile_menu_wrap').toggleClass("mobile_menu_on");
				});
				$('.open_mobile_menu').on('click', function () {
					$('body').toggleClass('mobile_menu_overlay_on');
				});
				if($('.mobile_menu li.dropdown ul').length){
					$('.mobile_menu li.dropdown').append('<div class="dropdown-btn"><span class="fas fa-caret-right"></span></div>');
					$('.mobile_menu li.dropdown .dropdown-btn').on('click', function() {
						$(this).prev('ul').slideToggle(500);
					});
				}
				$(".dropdown-btn").on("click", function () {
					$(this).toggleClass("toggle-open");
				});
			},
			TextAnimation: function (){
				var $lat_anim = $('.pr-text-anim');
				var $display = $(window);

				function scroll_addclass() {
					var display_long = $(window).height() - 100;
					var display_aim = $display.scrollTop();
					var display_down = (display_aim + display_long);

					$.each($lat_anim, function () {
						var $item_s = $(this);
						var items_long = $item_s.outerHeight();
						var item_up = $item_s.offset().top;
						var item_down = (item_up + items_long);

						if ((item_down >= display_aim) &&
							(item_up <= display_down)) {
							$item_s.addClass('is_show');
					}
				});
				}

				$display.on('scroll resize', scroll_addclass);
				$display.trigger('scroll');


				var $c_slide_effect = $('.pr-text-in');
				var $display = $(window);
				function c_scroll_addclass() {
					var display_long = $(window).height() - 100;
					var display_aim = $display.scrollTop();
					var display_down = (display_aim + display_long);

					$.each($c_slide_effect, function () {
						var $item_s = $(this);
						var items_long = $item_s.outerHeight();
						var item_up = $item_s.offset().top;
						var item_down = (item_up + items_long);

						if ((item_down >= display_aim) &&
							(item_up <= display_down)) {
							$item_s.addClass('is_shown');
					}
				});
				}

				$display.on('scroll resize', c_scroll_addclass);
				$display.trigger('scroll');
			},
			scrollTop: function (){
				$(window).on("scroll", function() {
					if ($(this).scrollTop() > 200) {
						$('.scrollup').fadeIn();
					} else {
						$('.scrollup').fadeOut();
					}
				});

				$('.scrollup').on("click", function()  {
					$("html, body").animate({
						scrollTop: 0
					}, 800);
					return false;
				});
				$('.zoom-gallery').magnificPopup({
					delegate: 'a',
					type: 'image',
					closeOnContentClick: false,
					closeBtnInside: false,
					mainClass: 'mfp-with-zoom mfp-img-mobile',
					gallery: {
						enabled: true
					},
					zoom: {
						enabled: true,
						duration: 300, 
						opener: function(element) {
							return element.find('img');
						}
					}
				});
			},
			CarouselSliderJS: function (){
				$('.clinox-slider-content').slick({
					arrow: true,
					dots: false,
					infinite: true,
					slidesToShow: 1,
					fade: true,
					autoplay: false,
					slidesToScroll: 1,
					prevArrow: ".main_left_arrow",
					nextArrow: ".main_right_arrow",
				});
				$('.clinox-team-slider-wrap').slick({
					arrow: true,
					dots: false,
					infinite: false,
					slidesToShow: 3,
					slidesToScroll: 1,
					prevArrow: ".team_left_arrow",
					nextArrow: ".team_right_arrow",
					responsive: [
					{
						breakpoint: 1300,
						settings: {
							slidesToShow: 3,
							slidesToScroll: 3,
							infinite: true,
						}
					},
					{
						breakpoint: 1025,
						settings: {
							slidesToShow: 2,
							slidesToScroll: 2,
							infinite: true,
						}
					},
					{
						breakpoint: 800,
						settings: {
							slidesToShow: 2,
							slidesToScroll: 1
						}
					},
					{
						breakpoint: 600,
						settings: {
							slidesToShow: 2,
							slidesToScroll: 1
						}
					},
					{
						breakpoint: 500,
						settings: {
							slidesToShow: 1,
							slidesToScroll: 1
						}
					}

					]
				});
				$('.clinox-testimonial-slider').slick({
					arrow: true,
					dots: false,
					infinite: false,
					slidesToShow: 2,
					slidesToScroll: 1,
					prevArrow: ".testi-left_arrow",
					nextArrow: ".testi-right_arrow",
					responsive: [
					{
						breakpoint: 1024,
						settings: {
							slidesToShow: 2,
							slidesToScroll: 1,
							infinite: true,
						}
					},
					{
						breakpoint: 1000,
						settings: {
							slidesToShow: 1,
							slidesToScroll: 1
						}
					},
					{
						breakpoint: 800,
						settings: {
							slidesToShow: 1,
							slidesToScroll: 1
						}
					},
					{
						breakpoint: 600,
						settings: {
							slidesToShow: 1,
							slidesToScroll: 2
						}
					},
					{
						breakpoint: 500,
						settings: {
							slidesToShow: 1,
							slidesToScroll: 1
						}
					}

					]
				});
				$('.clinox-sponsor-slider').slick({
					arrow: false,
					dots: false,
					infinite: true,
					slidesToShow: 5,
					autoplay: true,
					slidesToScroll: 1,
					responsive: [
					{
						breakpoint: 1024,
						settings: {
							slidesToShow: 3,
							slidesToScroll: 1,
							infinite: true,
							dots: false
						}
					},
					{
						breakpoint: 800,
						settings: {
							slidesToShow: 2,
							slidesToScroll: 1
						}
					},
					{
						breakpoint: 600,
						settings: {
							slidesToShow: 1,
							slidesToScroll: 1
						}
					},
					{
						breakpoint: 400,
						settings: {
							slidesToShow: 1,
							slidesToScroll: 1
						}
					},
					]
				});
				$('.clinox-service-slider-2').slick({
					arrow: false,
					dots: true,
					infinite: true,
					slidesToShow: 3,
					autoplay: false,
					slidesToScroll: 1,
					responsive: [
					{
						breakpoint: 1024,
						settings: {
							slidesToShow: 3,
							slidesToScroll: 1,
							infinite: true,
							dots: false
						}
					},
					{
						breakpoint: 800,
						settings: {
							slidesToShow: 2,
							slidesToScroll: 1
						}
					},
					{
						breakpoint: 600,
						settings: {
							slidesToShow: 1,
							slidesToScroll: 1
						}
					},
					{
						breakpoint: 400,
						settings: {
							slidesToShow: 1,
							slidesToScroll: 1
						}
					},
					]
				});
				$('.clinox-project-slider').slick({
					arrow: false,
					dots: true,
					infinite: true,
					slidesToShow: 4,
					autoplay: false,
					slidesToScroll: 1,
					responsive: [
					{
						breakpoint: 1024,
						settings: {
							slidesToShow: 3,
							slidesToScroll: 1,
							infinite: true,
							dots: false
						}
					},
					{
						breakpoint: 800,
						settings: {
							slidesToShow: 2,
							slidesToScroll: 1
						}
					},
					{
						breakpoint: 600,
						settings: {
							slidesToShow: 1,
							slidesToScroll: 1
						}
					},
					{
						breakpoint: 400,
						settings: {
							slidesToShow: 1,
							slidesToScroll: 1
						}
					},
					]
				});
				$('.clinox-testimonial-slider-2').slick({
					centerMode: true,
					dots: true,
					nav: false,
					slidesToShow: 3,
					responsive: [
					{
						breakpoint: 1450,
						settings: {
							arrows: false,
							centerMode: true,
							slidesToShow: 3
						}
					},
					{
						breakpoint: 1100,
						settings: {
							arrows: false,
							centerMode: true,
							slidesToShow: 1
						}
					},
					{
						breakpoint: 850,
						settings: {
							arrows: false,
							centerMode: true,
							slidesToShow: 1
						}
					},
					{
						breakpoint: 480,
						settings: {
							arrows: false,
							centerMode: true,
							slidesToShow: 1
						}
					}
					]
				});
				$('.project-slider-for').slick({
					slidesToShow: 1,
					slidesToScroll: 1,
					arrows: false,
					asNavFor: '.project-slider-nav'
				});
				$('.project-slider-nav').slick({
					slidesToShow: 5,
					slidesToScroll: 1,
					infinite: true,
					asNavFor: '.project-slider-for',
					dots: true,
					prevArrow: ".pr-nav-left_arrow",
					nextArrow: ".pr-nav-right_arrow",
					focusOnSelect: true
				});
				$('.clinox-service-slider-3').slick({
					arrow: true,
					dots: false,
					infinite: false,
					slidesToShow: 3,
					slidesToScroll: 1,
					prevArrow: ".ser3_left_arrow",
					nextArrow: ".ser3_right_arrow",
					responsive: [
					{
						breakpoint: 1300,
						settings: {
							slidesToShow: 3,
							slidesToScroll: 3,
							infinite: true,
						}
					},
					{
						breakpoint: 1025,
						settings: {
							slidesToShow: 2,
							slidesToScroll: 2,
							infinite: true,
						}
					},
					{
						breakpoint: 800,
						settings: {
							slidesToShow: 2,
							slidesToScroll: 1
						}
					},
					{
						breakpoint: 600,
						settings: {
							slidesToShow: 1,
							slidesToScroll: 1
						}
					},
					{
						breakpoint: 500,
						settings: {
							slidesToShow: 1,
							slidesToScroll: 1
						}
					}

					]
				});
				$('.clinox-project-slider-3').slick({
					arrow: false,
					dots: true,
					infinite: false,
					slidesToShow: 3,
					slidesToScroll: 1,
					responsive: [
					{
						breakpoint: 1300,
						settings: {
							slidesToShow: 3,
							slidesToScroll: 3,
							infinite: true,
						}
					},
					{
						breakpoint: 1025,
						settings: {
							slidesToShow: 2,
							slidesToScroll: 2,
							infinite: true,
						}
					},
					{
						breakpoint: 800,
						settings: {
							slidesToShow: 2,
							slidesToScroll: 1
						}
					},
					{
						breakpoint: 600,
						settings: {
							slidesToShow: 1,
							slidesToScroll: 1
						}
					},
					{
						breakpoint: 500,
						settings: {
							slidesToShow: 1,
							slidesToScroll: 1
						}
					}

					]
				});
				$('.clinox-testimonial-slider-3').slick({
					arrow: false,
					dots: true,
					infinite: false,
					slidesToShow: 1,
					slidesToScroll: 1,
				});
				$('.clinox-sponsor-slider-3').slick({
					arrow: false,
					dots: false,
					infinite: true,
					slidesToShow: 5,
					autoplay: true,
					slidesToScroll: 1,
					responsive: [
					{
						breakpoint: 1024,
						settings: {
							slidesToShow: 3,
							slidesToScroll: 1,
							infinite: true,
							dots: false
						}
					},
					{
						breakpoint: 800,
						settings: {
							slidesToShow: 3,
							slidesToScroll: 1
						}
					},
					{
						breakpoint: 600,
						settings: {
							slidesToShow: 3,
							slidesToScroll: 1
						}
					},
					{
						breakpoint: 500,
						settings: {
							slidesToShow: 2,
							slidesToScroll: 1
						}
					},
					]
				});
			},
			CounterUp: function(){
				$('.counter').counterUp({
					delay: 10,
					time: 1000
				});
			},
			SkillProgress: function (){
				if ($(".progress-bar").length) {
					var $progress_bar = $('.progress-bar');
					$progress_bar.appear();
					$(document.body).on('appear', '.progress-bar', function() {
						var current_item = $(this);
						if (!current_item.hasClass('appeared')) {
							var percent = current_item.data('percent');
							current_item.css('width', percent + '%').addClass('appeared').parent().append('<span>' + percent + '%' + '</span>');
						}
						
					});
				};
			},
			ProjectFilter:  function (){
				jQuery(window).on('load', function(){
					$('.filtr-container').imagesLoaded ( function(){});
					var filterizd = $('.filtr-container');

					if(filterizd.length) {
						filterizd.filterizr({

						});
						$('.filtr-button').on('click', function() {

							$('.filtr-button.filtr-active').removeClass('filtr-active');
							$(this).addClass('filtr-active');
						});
					}
				});
			},
			ShapeScrollImg: function (){
				(function($) {
					$.fn.visible = function(partial) {
						var $t            = $(this),
						$w            = $(window),
						viewTop       = $w.scrollTop(),
						viewBottom    = viewTop + $w.height(),
						_top          = $t.offset().top,
						_bottom       = _top + $t.height(),
						compareTop    = partial === true ? _bottom : _top,
						compareBottom = partial === true ? _top : _bottom;
						return ((compareBottom <= viewBottom) && (compareTop >= viewTop));
					};
				})(jQuery);
				$(window).on('scroll', function() {

					$(".bg-shape, .bg-img-area").each(function(i, el) {
						var el = $(el);
						if (el.visible(true)) {
							el.addClass("view-on"); 
						} else {
							el.removeClass("view-on");
						}
					});
				});
				$(document).on('ready', function() {
					$(".banner-img1, .banner-img2").each(function(i, el) {
						var el = $(el);
						if (el.visible(true)) {
							el.addClass("view-on"); 
						} else {
							el.removeClass("view-on");
						}
					});
				});
				if($('.quantity-input-2').length) {
					$('.quantity-input-2').inputarrow({
						renderNext: function(input) {
							return $('<span class="custom-next">+</span>').insertAfter(input);
						},
						renderPrev: function(input) {
							return $('<span class="custom-prev">-</span>').insertBefore(input);
						},
						disabledClassName: 'custom-disabled'
					});
				};
			},
			GoogleMap: function (){
				function isMobile() { 
					return ('ontouchstart' in document.documentElement);
				}
				function init_gmap() {
					if ( typeof google == 'undefined' ) return;
					var options = {
						center: [40.712784,-74.005941],
						zoom: 10,
						styles: [
						{
							"featureType": "all",
							"elementType": "geometry.fill",
							"stylers": [
							{
								"weight": "2.00"
							}
							]
						},
						{
							"featureType": "all",
							"elementType": "geometry.stroke",
							"stylers": [
							{
								"color": "#9c9c9c"
							}
							]
						},
						{
							"featureType": "all",
							"elementType": "labels.text",
							"stylers": [
							{
								"visibility": "on"
							}
							]
						},
						{
							"featureType": "landscape",
							"elementType": "all",
							"stylers": [
							{
								"color": "#f2f2f2"
							}
							]
						},
						{
							"featureType": "landscape",
							"elementType": "geometry.fill",
							"stylers": [
							{
								"color": "#ffffff"
							}
							]
						},
						{
							"featureType": "landscape.man_made",
							"elementType": "geometry.fill",
							"stylers": [
							{
								"color": "#ffffff"
							}
							]
						},
						{
							"featureType": "poi",
							"elementType": "all",
							"stylers": [
							{
								"visibility": "off"
							}
							]
						},
						{
							"featureType": "road",
							"elementType": "all",
							"stylers": [
							{
								"saturation": -100
							},
							{
								"lightness": 45
							}
							]
						},
						{
							"featureType": "road",
							"elementType": "geometry.fill",
							"stylers": [
							{
								"color": "#eeeeee"
							}
							]
						},
						{
							"featureType": "road",
							"elementType": "labels.text.fill",
							"stylers": [
							{
								"color": "#7b7b7b"
							}
							]
						},
						{
							"featureType": "road",
							"elementType": "labels.text.stroke",
							"stylers": [
							{
								"color": "#ffffff"
							}
							]
						},
						{
							"featureType": "road.highway",
							"elementType": "all",
							"stylers": [
							{
								"visibility": "simplified"
							}
							]
						},
						{
							"featureType": "road.arterial",
							"elementType": "labels.icon",
							"stylers": [
							{
								"visibility": "off"
							}
							]
						},
						{
							"featureType": "transit",
							"elementType": "all",
							"stylers": [
							{
								"visibility": "off"
							}
							]
						},
						{
							"featureType": "water",
							"elementType": "all",
							"stylers": [
							{
								"color": "#46bcec"
							},
							{
								"visibility": "on"
							}
							]
						},
						{
							"featureType": "water",
							"elementType": "geometry.fill",
							"stylers": [
							{
								"color": "#c8d7d4"
							}
							]
						},
						{
							"featureType": "water",
							"elementType": "labels.text.fill",
							"stylers": [
							{
								"color": "#070707"
							}
							]
						},
						{
							"featureType": "water",
							"elementType": "labels.text.stroke",
							"stylers": [
							{
								"color": "#ffffff"
							}
							]
						}
						],
						mapTypeControl: true,
						mapTypeControlOptions: {
							style: google.maps.MapTypeControlStyle.DROPDOWN_MENU
						},
						navigationControl: true,
						scrollwheel: false,
						streetViewControl: true,
					}
					if (isMobile()) {
						options.draggable = false;
					}
					$('#googleMaps').gmap3({
						map: {
							options: options
						},
						marker: {
							latLng: [40.712776,-74.005974],
							options: { icon: 'assets/img/map.png' }

						}
					});
				}
				init_gmap();
			},

		}
	}
	jQuery(document).ready(function (){
		clinox.init();
	});

})();