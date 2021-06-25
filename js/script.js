let burger = document.querySelector('.header__burger')
let menu = document.querySelector('.header__menu')

burger.addEventListener('click', () => {
    burger.classList.toggle('active')
    menu.classList.toggle('active')

})


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



let prev = document.querySelector('.prev'),
    next = document.querySelector('.next'),
    item1 = document.querySelector('.item-1'),
    item2 = document.querySelector('.item-2'),
    item3 = document.querySelector('.item-3'),
    i = 0,
    k = 0

next.addEventListener('click', () => {
    item1.style.transform = 'translateX(-1600px)'
    item2.style.transform = 'translateX(-200px)'
    item3.style.transform = 'translateX(800px)'
    i += 1
    if(i >= 2){
        
        item1.style.transform = 'translateX(-3200px)'
        item2.style.transform = 'translateX(-1600px)'
        item3.style.transform = 'translateX(-200px)'
        i = 2
    }
    if(i == 2){
        prev.style.right = '70px'
    }
})

prev.addEventListener('click', () => {
    i = 0
    item1.style.transform = 'translateX(-200px)'
    item2.style.transform = 'translateX(800px)'
    item3.style.transform = 'translateX(1600px)'
    prev.style.right = '-1600px'
})


// INITIALIZE AOS

AOS.init();