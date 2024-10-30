$(function() {

    $('.bg:not(:first-child)').hide();
	setInterval(function() {
		$('.bg:first-child').fadeOut('slow').next('.bg').fadeIn('slow').end().appendTo(".mainvisual");
	},5000);

	$('.han').click(function() {
		$(this).toggleClass('active');
		$('.back').toggleClass('back_active');
		$('.han_menu').slideToggle();
	});

	$('.han_menu a, header a').click(function() {
		$('.han').removeClass('active');
		$('.back').removeClass('back_active');
		$('.han_menu').slideUp();
		let iti = $(this).attr('href');
        let posi = $(iti).offset().top;
        $('html,body').animate({
            'scrollTop':posi,
        },1000,'swing');
	});

	$(window).scroll(function() {
		if($(window).scrollTop() > $('.mainvisual h1').offset().top && window.matchMedia("(min-width:753px)").matches) {
			$('header').addClass('header_fix');
		}else{
			$('header').removeClass('header_fix');
		};
	});

	$(window).resize(function () {
        if($('.han').hasClass('active') && window.matchMedia("(min-width:753px)").matches) {
			$('.han').removeClass('active');
			$('.back').removeClass('back_active');
			$('.han_menu').slideUp();
		};
		if($(window).scrollTop() > $('.mainvisual h1').offset().top && window.matchMedia("(min-width:753px)").matches) {
			$('header').addClass('header_fix');
		}else{
			$('header').removeClass('header_fix');
		};
	});

	$(window).scroll(function(){
		$('.anime').each(function(){
			var pos = $(this).offset().top;
			var scr = $(window).scrollTop();
			var win = $(window).height();
			if (scr > pos - win + 100){
				$(this).addClass('scroll');
			};
		});
	});

	$(window).scroll(function(){
		$('.menu_list').each(function(){
			var pos = $(this).offset().top;
			var scr = $(window).scrollTop();
			var win = $(window).height();
			if (scr > pos - win + 100){
				$(this).addClass('menu_list_after');
			};
		});
	});

});