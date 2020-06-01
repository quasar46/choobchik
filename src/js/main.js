// burger
document.addEventListener('DOMContentLoaded', function () {
	var burger = document.querySelector('.burger');
	var menu = document.querySelector('.mobile-menu');
	burger.addEventListener('click', function () {
		burger.classList.toggle('active');
		menu.classList.toggle('active');
	})
	window.addEventListener('scroll', function () {
		burger.classList.remove('active');
		menu.classList.remove('active');
	})
	window.addEventListener('touchmove', function () {
		burger.classList.remove('active');
		menu.classList.remove('active');
	})
});



// sliders initial
// sales-slider
$(document).ready(function () {

	$('.sales-slider').slick({
		dots: true,
		slidesToShow: 2,
		arrows: false,
		responsive: [
			{
				breakpoint: 524,
				settings: {
					slidesToShow: 1,
				}
			}
		]
	});

	$(".sales-slider .slick-dots").wrap('<div class="slick-dots-wrap"></div>')

	var next = $('<button class="arrowNext"></button>')
	next.on("click", (function () { $(".sales-slider").slick("slickNext") }))
	$(".sales-slider .slick-dots-wrap").append(next)

	var prev = $('<button class="arrowPrev"></button>')
	prev.on("click", (function () { $(".sales-slider").slick("slickPrev") }))
	$(".sales-slider .slick-dots-wrap").prepend(prev)

});





// results-slider
$(document).ready(function () {
	$('.results-slider').slick({
		slidesToShow: 2,
		dots: true,
		arrows: false,
		responsive: [
			{
				breakpoint: 524,
				settings: {
					slidesToShow: 1,
				}
			}
		]
	});

	$(".results-slider .slick-dots").wrap('<div class="slick-dots-wrap"></div>')

	var next = $('<button class="arrowNext"></button>')
	next.on("click", (function () { $(".results-slider").slick("slickNext") }))
	$(".results-slider .slick-dots-wrap").append(next)

	var prev = $('<button class="arrowPrev"></button>')
	prev.on("click", (function () { $(".results-slider").slick("slickPrev") }))
	$(".results-slider .slick-dots-wrap").prepend(prev)
});

// say-slider
$(document).ready(function () {
	$('.say-slider').slick({
		mobileFirst: true,
		dots: true,
		responsive: [
			{
				breakpoint: 768,
				settings: 'unslick',
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 0,
				settings: {
					slidesToShow: 1,
				}
			}
		]
	});
	$(".say-slider .slick-dots").wrap('<div class="slick-dots-wrap"></div>')

	var next = $('<button class="arrowNext"></button>')
	next.on("click", (function () { $(".say-slider").slick("slickNext") }))
	$(".say-slider .slick-dots-wrap").append(next)

	var prev = $('<button class="arrowPrev"></button>')
	prev.on("click", (function () { $(".say-slider").slick("slickPrev") }))
	$(".say-slider .slick-dots-wrap").prepend(prev)
});

// services-slider
$(document).ready(function () {
	$('.services-slider').slick({
		dots: true,
		mobileFirst: true,
		responsive: [
			{
				breakpoint: 768,
				settings: 'unslick',
			},
			{
				breakpoints: 0,
				settings: {
					slidesToShow: 1,
				}
			}
		]
	});

	$(".services-slider .slick-dots").wrap('<div class="slick-dots-wrap"></div>')

	var next = $('<button class="arrowNext"></button>')
	next.on("click", (function () { $(".services-slider").slick("slickNext") }))
	$(".services-slider .slick-dots-wrap").append(next)

	var prev = $('<button class="arrowPrev"></button>')
	prev.on("click", (function () { $(".services-slider").slick("slickPrev") }))
	$(".services-slider .slick-dots-wrap").prepend(prev)
});

// why-slider
$(document).ready(function () {
	$('.why-slider').slick({
		dots: true,
		mobileFirst: true,
		responsive: [
			{
				breakpoint: 768,
				settings: 'unslick',
			},
			{
				breakpoints: 0,
				settings: {
					dots: true,
					slidesToShow: 1,
				}
			}
		]
	});
	$(".why-slider .slick-dots").wrap('<div class="slick-dots-wrap"></div>')

	var next = $('<button class="arrowNext"></button>')
	next.on("click", (function () { $(".why-slider").slick("slickNext") }))
	$(".why-slider .slick-dots-wrap").append(next)

	var prev = $('<button class="arrowPrev"></button>')
	prev.on("click", (function () { $(".why-slider").slick("slickPrev") }))
	$(".why-slider .slick-dots-wrap").prepend(prev)
});
// end slider-initial

// tabs
$(document).ready(function () {
	$('h3.item__tab').on('click', function () {
		$(this).next().slideToggle();
		$(this).toggleClass('show');
	})
})


// anchor
$(document).ready(function () {
	$("a.scroll-to").click(function () {
		var elementClick = $(this).attr("href")
		var destination = $(elementClick).offset().top;
		jQuery("html:not(:animated),body:not(:animated)").animate({
			scrollTop: destination
		}, 800);
		return false;
	});
});