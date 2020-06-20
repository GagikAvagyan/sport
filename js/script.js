$(document).ready(function () {


	var fullPageHome = null;

	//	Menu
	var openMenu = function () {
		if ($("html").hasClass("fp-enabled")) {
			$.fn.fullpage.setMouseWheelScrolling(false);
			$.fn.fullpage.setAllowScrolling(false);
		}
		$("body").addClass("overflow");
		$(".menu-overlay").addClass("visible");
		$(".menu-wrap").addClass("opened");
	};

	var closeMenu = function () {
		if ($("html").hasClass("fp-enabled")) {
			$.fn.fullpage.setMouseWheelScrolling(true);
			$.fn.fullpage.setAllowScrolling(true);
		}
		$("body").removeClass("overflow");
		$(".menu-overlay").removeClass("visible");
		$(".menu-wrap").removeClass("opened");
		$(".menu-wrap .menu-list").removeClass("translated");
	};

	$(".drop-menu").on("click", function (e) {
		e.preventDefault();
		openMenu();
	});

	$(".menu-wrap .close").on("click", function (e) {
		e.preventDefault();
		closeMenu();
	});

	$(".menu-overlay").on("click", function (e) {
		e.preventDefault();
		closeMenu();
	});

	$(".about-assosiation").on("click", function (e) {
		e.preventDefault();
		$(".menu-wrap .menu-list").addClass("translated");
	});

	$(".back-to-main-menu").on("click", function (e) {
		e.preventDefault();
		$(".menu-wrap .menu-list").removeClass("translated");
	});

});

function initHomeSliderAnimation() {
	if ($('body').hasClass('pace-done')) {
		$(".home-slider .text-wrap").addClass("animated");
	}
}

function initNewsAnimation() {
	if ($('body').hasClass('pace-done')) {
		$(".news-slider-wrap .news-slider .news-item .bg").addClass("animated");
		$(".news-slider-wrap .news-slider .news-item .news-text-wrap").addClass("animated");
	}
}

function initDirectionsAnimation() {
	if ($('body').hasClass('pace-done')) {
		$(".directions-item .border").velocity({
			height: '100%'
		}, {
			complete: function (elements) {
				$(".directions-item .img-wrap").addClass("animated");
				$(".directions-item .img-wrap-2").addClass("animated");
				$(".directions-item p").addClass("animated");
				$(".directions-item .more").addClass("animated");
				$(".directions h2").addClass("animated");
			}
		}, 400, "easeOut");
	}
}

function posterAnimateion() {
	if ($('body').hasClass('pace-done')) {
		$(".news-slider-wrap .news-slider .news-item .bg").addClass("animated");
		$(".poster-slider-wrap .poster-slider .poster-item").addClass("animated");
	}
}

function galleryAnimateion() {
	if ($('body').hasClass('pace-done')) {
		$(".gallery-container h3").addClass("animated");
		$(".gallery-tab-wrap .gallery-tab-menu-wrap h2").addClass("animated");
		$(".gallery-tab-wrap .gallery-tab-menu-wrap .tab-menu li a").addClass("animated");
	}
}

function partnersAnimateion() {
	if ($('body').hasClass('pace-done')) {
		$(".partners-logo-list").addClass("animated");
	}
}

function footersAnimateion() {
	if ($('body').hasClass('pace-done')) {
		$(".container-footer .contact-info").addClass("animated");
		$("#map").addClass("animated");
	}
}





// Preloader
paceOptions = {
	ajax: true,
	document: true,
	eventLag: false
};



Pace.on('done', function () {


	setTimeout(function () {
		$(document).trigger('scroll');
	}, 300);


	$('#preloader').fadeOut(800);
	// $(window).scrollTop() == 0   ||
	if ($('#homeAnimation.fp-section').hasClass('active')) {
		setTimeout(function () {
			initHomeSliderAnimation()
		}, 700);
	}


	setTimeout(function () {
		$(".fixed-left .logo").addClass('animated');
		$(".fixed-right .drop-menu").addClass('animated');
		$(".fixed-left .fixed-left-info").addClass('animated');
		$(".fixed-right .fixed-right-info").addClass('animated');
	}, 1000);

});


var Index = Barba.BaseView.extend({
	namespace: 'index',
	onEnter: function () {

	},
	onEnterCompleted: function () {

		var initFullgape = function () {
			// full page slider init
			if (!$("html").hasClass("fp-enabled")) {
				$('#fullpage').fullpage({
					navigation: false,
					responsiveWidth: 1024,
					menu: '#main-menu',
					anchors: ['home', 'directions', 'news', 'posters', 'gallery', 'partners', 'contact'],
					onLeave: function (anchorLink, index) {
						if ($("html").hasClass("fp-enabled")) {
							$.fn.fullpage.setMouseWheelScrolling(true);
							$.fn.fullpage.setAllowScrolling(true);
						}
						$("body").removeClass("overflow");
						$(".menu-overlay").removeClass("visible");
						$(".menu-wrap").removeClass("opened");
						$(".menu-wrap .menu-list").removeClass("translated");
					},
					afterRender: function () {

					},
					afterLoad: function (origin, destination, direction) {
						var loadedSection = this;

						if (origin == "home") {

							// $('.home-slider').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
							// 	$(".home-slider .text-wrap").removeClass("animated");
							// });

							$(document).on("click", ".home-slider .slick-dots li button", function () {
								console.log('click');
								$(".home-slider .bg").removeClass("animated");
								var index = $(this).closest("li").index();
								$(".home-slider .item").eq(index).find(".bg").addClass("animated");
								$(".home-slider .item").eq(index).find(".text-wrap").addClass("animated");
							});

							initHomeSliderAnimation();

						}

						if (origin == "directions") {
							setTimeout(function () {
								initDirectionsAnimation();
							}, 200);
						}

						if (origin == "news") {
							setTimeout(function () {
								initNewsAnimation();
							}, 200);
						}

						if (origin == "posters") {
							setTimeout(function () {
								posterAnimateion();
							}, 200);

						}

						if (origin == "gallery") {
							setTimeout(function () {
								galleryAnimateion();
							}, 200);

						}

						if (origin == "partners") {
							setTimeout(function () {
								partnersAnimateion();
							}, 200);

						}

						if (origin == "contact") {
							setTimeout(function () {
								footersAnimateion();
							}, 200);

						}
					},
				});
			}
		}

		initFullgape();


		$('.home-slider').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
			$(".home-slider .text-wrap").removeClass("animated");
		});

		$(document).on("click", ".home-slider .slick-dots li button", function () {
			$(".home-slider .bg").removeClass("animated");
			var index = $(this).closest("li").index();
			$(".home-slider .item").eq(index).find(".bg").addClass("animated");
			$(".home-slider .item").eq(index).find(".text-wrap").addClass("animated");
		});


		var number = 200;

		if ($(window).width() <= 768) {
			number = 50;
		}

		$(document).on('scroll', function () {

			if ($('.barba-container[data-namespace=index]').length == 0) return;
			if ($(this).scrollTop() >= $('#directionsAnimation').position().top - number) {
				initDirectionsAnimation();
			}

			if ($(this).scrollTop() >= $('#newsAnimation').position().top - number) {
				initNewsAnimation();
			}

			if ($(this).scrollTop() >= $('#postersAnimation').position().top - number) {
				posterAnimateion();
			}

			if ($(this).scrollTop() >= $('#galleryAnimation').position().top - number) {
				galleryAnimateion();
			}

			if ($(this).scrollTop() >= $('#partnersAnimation').position().top - number) {
				partnersAnimateion();
			}

			if ($(this).scrollTop() >= $('#footerAnimation').position().top - number) {
				footersAnimateion();
			}
		});


		// home slider init
		$('.home-slider').slick({
			infinite: false,
			dots: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			speed: 500,
			draggable: false,
			fade: true,
			cssEase: 'linear',
			arrows: false,
			customPaging: function (slider, i) {
				return '<button class="tab">' + $(slider.$slides[i]).attr('title') + '</button>';
			},
		});

		// news slider init
		$('.news-slider').slick({
			slidesToShow: 2,
			slidesToScroll: 1,
			dots: false,
			infinite: true,
			draggable: false,
			cssEase: 'linear',
			prevArrow: $('.news-slider-wrap .slider-navigation .slick-prev'),
			nextArrow: $('.news-slider-wrap .slider-navigation .slick-next'),
			responsive: [
				{
					breakpoint: 1200,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
					}
				},
			  ]
		});

		// poster slider init
		$('.poster-slider').slick({
			slidesToShow: 4,
			slidesToScroll: 1,
			dots: false,
			infinite: true,
			draggable: false,
			cssEase: 'linear',
			prevArrow: $('.poster-slider-wrap .slider-navigation .slick-prev'),
			nextArrow: $('.poster-slider-wrap .slider-navigation .slick-next'),
			responsive: [
				{
					breakpoint: 1700,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 1,
					}
				},
				{
					breakpoint: 1300,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 1,
					}
				},
				{
					breakpoint: 768,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
					}
				},
			  ]
		});

		// gallery tabs
		$(".tab-menu li a").on("click", function (e) {
			e.preventDefault();
			$(this).closest(".tab-menu").find("li").removeClass("active");
			$(this).closest("li").addClass("active");
			var index = $(this).closest("li").index();
			$(this).closest(".gallery-tab-wrap").find(".tab-content-item").removeClass("animated");
			$(this).closest(".gallery-tab-wrap").find(".tab-content-item").eq(index).addClass("animated");

			// custom scroll init
			$(".gallery-tab-wrap .custom-scroll .video-blocks").mCustomScrollbar({
				scrollInertia: 100,
				theme: "dark"
			});
		});

		// video popup init
		$('.popup-video').magnificPopup({
			disableOn: 0,
			type: 'iframe',
			mainClass: 'mfp-fade',
			removalDelay: 160,
			preloader: false,
			fixedContentPos: true
		});

		// input floating label init
		$('.ffl-wrapper').floatingFormLabels();

		// disable fullpage scroll on video section scroll
		$(".gallery-tab-wrap .video-blocks").on("mouseenter", function (e) {
			$.fn.fullpage.setMouseWheelScrolling(false);
			$.fn.fullpage.setAllowScrolling(false);
		});

		// enable fullpage scroll on video section scroll
		$(".gallery-tab-wrap .video-blocks").on("mouseleave", function (e) {
			$.fn.fullpage.setMouseWheelScrolling(true);
			$.fn.fullpage.setAllowScrolling(true);
		});

	},
	onLeave: function () {
		if ($("html").hasClass("fp-enabled")) {
			$('#fullpage').fullpage.destroy('all');
		}
	},
	onLeaveCompleted: function () {}
});

Index.init();


var AllNews = Barba.BaseView.extend({
	namespace: 'all-news',
	onEnter: function () {

	},
	onEnterCompleted: function () {
		setTimeout(function () {
			$(".all-news-list").addClass("animated");
		}, 200);

		$(".breadcrumbs-wrap .back").on('click', function (e) {
			e.preventDefault();
			history.back();
			return false;
		});

	},
	onLeave: function () {

	},
	onLeaveCompleted: function () {

	}
});

AllNews.init();


var AllNewsIn = Barba.BaseView.extend({
	namespace: 'all-news-in',
	onEnter: function () {

	},
	onEnterCompleted: function () {
		var $status = $('.pagingInfo');
		var $slickElement = $('.news-in-slider');

		$slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
			var i = (currentSlide ? currentSlide : 0) + 1;
			$status.text(i + '/' + slick.slideCount);
		});

		$slickElement.slick({
			dots: false,
			slidesToShow: 1,
			arrows: true,
			infinite: true,
			fade: true,
			cssEase: 'ease-out',
			prevArrow: $('.news-in-slider-wrap .slider-arrows .slick-prev'),
			nextArrow: $('.news-in-slider-wrap .slider-arrows .slick-next'),
			responsive: [
				{
					breakpoint: 768,
					settings: {
						arrows: false,
					}
					},
				  ]
		});

		setTimeout(function () {
			$(".all-news-in").addClass("animated");
		}, 200);
	},
	onLeave: function () {

	},
	onLeaveCompleted: function () {

	}
});

AllNewsIn.init();


var AssociationHistory = Barba.BaseView.extend({
	namespace: 'association-history',
	onEnter: function () {

	},
	onEnterCompleted: function () {
		setTimeout(function () {
			$(".association-container").addClass("animated");
		}, 200);
	},
	onLeave: function () {

	},
	onLeaveCompleted: function () {}
});

AssociationHistory.init();


var AssociationMembers = Barba.BaseView.extend({
	namespace: 'association-members',
	onEnter: function () {

	},
	onEnterCompleted: function () {
		setTimeout(function () {
			$(".presidents-word").addClass("animated");
		}, 200);
	},
	onLeave: function () {

	},
	onLeaveCompleted: function () {

	}
});

AssociationMembers.init();


var DirectionIn = Barba.BaseView.extend({
	namespace: 'direction-in',
	onEnter: function () {

	},
	onEnterCompleted: function () {
		setTimeout(function () {
			$(".direction-in-wrap h2").velocity("transition.slideRightBigIn", {
				complete: function (elements) {
					$(".direction-in .breadcrumbs-wrap").addClass("animated");
					$(".direction-in-blocks").addClass("animated");
				}
			}).delay(800);
		}, 200);

		$(".breadcrumbs-wrap .back").on('click', function (e) {
			e.preventDefault();
			history.back();
			return false;
		});
	},
	onLeave: function () {

	},
	onLeaveCompleted: function () {

	}
});

DirectionIn.init();


var GreedyFurnishingsIn = Barba.BaseView.extend({
	namespace: 'greedy-furnishings-in',
	onEnter: function () {

	},
	onEnterCompleted: function () {
		$('.popup-video').magnificPopup({
			disableOn: 0,
			type: 'iframe',
			mainClass: 'mfp-fade',
			removalDelay: 160,
			preloader: false,
			fixedContentPos: true
		});

		$(".tab-menu li a").on("click", function (e) {
			e.preventDefault();
			$(this).closest(".tab-menu").find("li").removeClass("active");
			$(this).closest("li").addClass("active");
			var index = $(this).closest("li").index();
			$(this).closest(".tab-wrap").find(".tab-content-item").removeClass("active");
			$(this).closest(".tab-wrap").find(".tab-content-item").eq(index).addClass("active");
		});

		$('.menu li a').smoothScroll({
			speed: 600,
		});

		setTimeout(function () {
			$(".greedy-container").addClass("animated");
		}, 200);

	},
	onLeave: function () {

	},
	onLeaveCompleted: function () {

	}
});

GreedyFurnishingsIn.init();


var ManagersWord = Barba.BaseView.extend({
	namespace: 'managers-word',
	onEnter: function () {

	},
	onEnterCompleted: function () {
		setTimeout(function () {
			$(".presidents-word").addClass("animated");
		}, 200);
	},
	onLeave: function () {

	},
	onLeaveCompleted: function () {

	}
});

ManagersWord.init();


var Manual = Barba.BaseView.extend({
	namespace: 'manual',
	onEnter: function () {

	},
	onEnterCompleted: function () {
		setTimeout(function () {
			$(".manual-container").addClass("animated");
		}, 200);
	},
	onLeave: function () {

	},
	onLeaveCompleted: function () {

	}
});

Manual.init();


var Poster = Barba.BaseView.extend({
	namespace: 'poster',
	onEnter: function () {

	},
	onEnterCompleted: function () {
		setTimeout(function () {
			$(".poster").addClass("animated");
		}, 200);

		$(".breadcrumbs-wrap .back").on('click', function (e) {
			e.preventDefault();
			history.back();
			return false;
		});
	},
	onLeave: function () {

	},
	onLeaveCompleted: function () {

	}
});

Poster.init();


var PosterIn = Barba.BaseView.extend({
	namespace: 'poster-in',
	onEnter: function () {

	},
	onEnterCompleted: function () {
		setTimeout(function () {
			$(".poster-in").addClass("animated");
		}, 200);
	},
	onLeave: function () {

	},
	onLeaveCompleted: function () {

	}
});

PosterIn.init();


var PresidentsWord = Barba.BaseView.extend({
	namespace: 'presidents-word',
	onEnter: function () {

	},
	onEnterCompleted: function () {
		setTimeout(function () {
			$(".presidents-word").addClass("animated");
		}, 200);
	},
	onLeave: function () {

	},
	onLeaveCompleted: function () {

	}
});

PresidentsWord.init();


Barba.Pjax.start();

Barba.Prefetch.init();


Barba.Dispatcher.on('newPageReady', function (current, prev, container) {

	// Close menu
	if ($("html").hasClass("fp-enabled")) {
		$.fn.fullpage.setMouseWheelScrolling(true);
		$.fn.fullpage.setAllowScrolling(true);
	}
	$("body").removeClass("overflow");
	$(".menu-overlay").removeClass("visible");
	$(".menu-wrap").removeClass("opened");
	$(".menu-wrap .menu-list").removeClass("translated");
});