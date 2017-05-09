$(document).ready(function(){

	$('body').css('opacity','1');

	function header_sticky (){
		var position = $('.menu_stick').offset().top;
		if ( position > 150) {
			$('.menu_stick').addClass('stick');
		} else {
			$('.menu_stick').removeClass('stick');
		}
	}
	var slider_project = $('.js_carousel_project');
	slider_project.owlCarousel({items:1,margin:0,autoWidth:true,loop:true,responsive:true,autoplay:true});

	$('.carousel_project .js_controls a').on('click', function(event){
		event.preventDefault();
		if ($(this).attr('data-direction') == 'next'){
			slider_project.trigger('next.owl.carousel');
		} else {
			slider_project.trigger('prev.owl.carousel');
		}
	});


	$('.js_btn_menu').click(function(event){
		event.preventDefault();
		$(this).toggleClass('active');
		$('header').toggleClass('active');
	})

	var slider_principal = $('.owl_slide');
	slider_principal.owlCarousel({items:1,margin:0,responsive:true,autoplay:true,loop:true})
	$('.btn_slider').on('click', function(event){
		event.preventDefault();
		if ($(this).attr('data-direction') == 'next'){
			slider_principal.trigger('next.owl.carousel');
		} else {
			slider_principal.trigger('prev.owl.carousel');
		}
	});
	
	$(document).scroll(function(event) {
		header_sticky();
	});
});

