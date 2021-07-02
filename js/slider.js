$(document).ready(function(){
	$('.slider').slick({
		arrows:true,
		dots:true,
		slidesToShow:1,
		autoplay:true,
		speed:1000,
		autoplaySpeed:3000,
        fade: true,
		responsive:[
			{
				breakpoint: 768,
				settings: {
					slidesToShow:1
				}
			},
			{
				breakpoint: 550,
				settings: {
					slidesToShow:1
				}
			}
		]
	});

    $('.comments-slider').slick({
		arrows:false,
		dots:false,
		slidesToShow: 3,
        slidesToScroll: 1,
        Infinite: true,
        centerMode: false,
		autoplay:true,
		speed:1000,
		autoplaySpeed:3000,
		responsive:[
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 2,
                    slidesToScroll: 1,
                    centerMode: false,
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow:1,
                    slidesToScroll: 1,
                    centerMode: true,
					fade: true
				}
			}
		]
	});
});