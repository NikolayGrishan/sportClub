$(document).ready(function(){
		$('.slider').slick({
				arrows:true,
				slidesToShow:3,
				slidesToScroll:1,
				speed:1000,
				easing:'lenear',
				infinite:true,
				initialSlide:1,
				autoplay:true,
				autoplaySpeed:3000,
				pauseOnFocus:true,
				pauseOnHover:true,
				draggable:false,
				swipe:true,
				touchThreshold:15,
				waitForAnimate:false,
				variableWidth:true,
				appendArrows:$('.match__arrows'),

								responsive: [
					{
						breakpoint: 768,
						settings: {
							slidesToShow: 2,
							arrows:false,
							dots: true,
						}
					},{
						breakpoint: 500,
						settings: {
							slidesToShow: 1,
							variableWidth:false,
							arrows:false,
							dots: true,
						}
					}
				]
		});
});

$(document).ready(function(){
	$('.slider--n').slick({
			arrows:true,
			slidesToShow:1.25,
			slidesToScroll:1,
			speed:1000,
			easing:'lenear',
			appendArrows:$('.news__arrows'),
			draggable:false,
			infinite:true,
			initialSlide:1,					
	});
});