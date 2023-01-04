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
				appendArrows:$('.match__arrows'),

								responsive: [
					{
						breakpoint: 1000,
					}
				]
		});
});