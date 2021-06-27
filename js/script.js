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



// Multi language
let select = document.querySelector('select'),
	allLang = ['en', 'ru', 'uz']
select.addEventListener('change', changeURLLanguage)

// Function that changes url of languages
function changeURLLanguage() {
    let lang = select.value
    location.href = window.location.pathname + '#' + lang
    location.reload()
}

function changeLanguage() {
    let hash = window.location.hash,
        footerLang = document.querySelector('.footer-lang')
    hash = hash.substr(1)
    console.log(hash)
    if (!allLang.includes(hash)) {
        location.href = window.location.pathname + '#en'
        location.reload()
    }
    select.value = hash
    document.querySelector('title').innerHTML = langArr['unit'][hash]
	document.getElementsByName('Email')[0].placeholder= langArr['input-email'][hash]
	document.getElementsByName('Name')[0].placeholder= langArr['input-name'][hash]
    // document.querySelector('.lng-chip').innerHTML = langArr['chip'][hash];
    for (let key in langArr) {
        let elem = document.querySelector('.lng-' + key)
        if (elem) {
            elem.innerHTML = langArr[key][hash]
        }

    }
    footerLang.innerHTML = hash.toUpperCase()
    
}

changeLanguage()


// Modal code


// Get the modal
let modal = document.querySelector(`.modal${i+1}`),
    btn = document.querySelectorAll('.box'),
    span = document.querySelectorAll(".close")


for(let i = 0; i < btn.length; i++){
    btn[i].addEventListener('click', () => {
        document.querySelector(`.modal${i+1}`).style.display = 'block'
        console.log(i);
        
    })
    span[i].addEventListener('click', () => {
        document.querySelector(`.modal${i+1}`).style.display = 'none'
        console.log(i);
    })
    
}


