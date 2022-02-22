//Табы
let tabButton = document.querySelectorAll('.tab-button')
let tabsItem = document.querySelectorAll('.tabs-item')

//Бургер Меню 
let open = document.querySelector('.open')
let close = document.querySelector('.close')
let burgerCont = document.querySelector('.burgerCont')
let burgerMenu = document.querySelector('.burgerMenu')
let $body = document.querySelector('body')

// Результать 
let $border = document.querySelector('.border')
let $borderRadius = document.querySelector('.borderRadius')
let $gradient = document.querySelector('.gradient')
let $shadowText = document.querySelector('.shadowText')
let $TextShadow = document.querySelector('.TextShadow')
let $shadowBox = document.querySelector('.shadowBox')
let $transform = document.querySelector('.transform')
let $transition = document.querySelector('.transition')
let $hoverButton = document.querySelector('.hoverButton')
let $bacdropFilter = document.querySelector('.backdrop-filter')


// Тест бокс
let $box = document.querySelector('.box')
let $boxTest = document.querySelector('.boxTest')
// Кнопка сбрасывание 
let reset = document.querySelector('.reset')

// Функции Бургер Меню 
burgerMenu.addEventListener('click',()=>{
	burgerMenu.classList.remove('burgerAcitve')
	$body.classList.remove('blockScrool')
})
burgerCont.addEventListener('click',(e)=>{
	e.stopPropagation();
})
open.addEventListener('click', ()=>{
	burgerMenu.classList.add('burgerAcitve')
	$body.classList.add('blockScrool')
})
close.addEventListener('click',()=>{
	burgerMenu.classList.remove('burgerAcitve')
	$body.classList.remove('blockScrool')
})

// Функция Табов
tabButton.forEach(function (e) {
	e.addEventListener('click', function () {
		let currentBtn = e
		let tabId = currentBtn.getAttribute('data-tab')
		let currentTab = document.querySelector(tabId)
		tabButton.forEach(function (e) {
			e.classList.remove('btb')
		})
		tabsItem.forEach(function (e) {
			e.classList.remove('active')
		})
		currentBtn.classList.add('btb')
		currentTab.classList.add('active')
	})
})

// Сбрасывание 
reset.addEventListener('click',()=>{
	$box.style.border = `0px solid black`
	$border.textContent = `border: `

	$box.style.borderRadius= '0px 0px 0px 0px '
	$borderRadius.textContent = 'border-radius:'

	$TextShadow.style.textShadow  = '0px 0px 0px '
	$shadowText.textContent = 'text-shadow: '
	
	$box.style.boxShadow = '0px 0px 0px '
	$shadowBox.textContent = 'box-shadow'

	$box.style.background = 'steelblue'
	$gradient.textContent = 'gradient:'

	$box.style.transform =` scale(1) rotate(0deg) translate(0px, 0px) skew(0deg, 0deg)`
	$transform.textContent = 'transform:'

	$hoverButton.style.transition = '0s'
	$transition.textContent = 'transition:'
})

function border(params) {
	let borderSize = document.querySelector('.borderSize').value
	let borderType = document.querySelector('.borderType').value
	let colorBorder = document.querySelector('.colorBorder').value
	
	if (borderSize > 50) {
		borderSize = 50
	}
	$box.style.border = `${borderSize}px ${borderType} ${colorBorder} `
	$border.textContent = `border: ${borderSize}px ${borderType} ${colorBorder}`
}

function borderRadius(params) {
	let rtl = document.querySelector(".rtl").value;
	let rtr = document.querySelector(".rtr").value;
	let rbr = document.querySelector(".rbr").value;
	let rbl = document.querySelector(".rbl").value;

	$box.style.borderRadius = `${rtl}px ${rtr}px ${rbr}px ${rbl}px `
	$borderRadius.textContent = `border-radius:${rtl}px ${rtr}px ${rbr}px ${rbl}px; `
}

function textShadow(params) {
	let ShadowTextX = document.querySelector('.ShadowTextX').value
	let ShadowTextY = document.querySelector('.ShadowTextY').value
	let ShadowTextBlur = document.querySelector('.ShadowTextBlur').value
	let ShadowTextColor = document.querySelector('.ShadowTextColor').value

	$TextShadow.style.textShadow = `${ShadowTextX}px ${ShadowTextY}px ${ShadowTextBlur}px ${ShadowTextColor}`
	$shadowText.textContent = `text-shadow: ${ShadowTextX}px ${ShadowTextY}px ${ShadowTextBlur}px ${ShadowTextColor} `
}

function boxShadow(params) {
	let ShadowBoxX = document.querySelector('.ShadowBoxX').value
	let ShadowBoxY = document.querySelector('.ShadowBoxY').value
	let ShadowBoxBlur = document.querySelector('.ShadowBoxBlur').value
	let ShadowBoxColor = document.querySelector('.ShadowBoxColor').value
	let boxShadowType = document.querySelector('.boxShadowType').value

	$box.style.boxShadow = ` ${boxShadowType} ${ShadowBoxX}px ${ShadowBoxY}px ${ShadowBoxBlur}px ${ShadowBoxColor } `
	$shadowBox.textContent = `box-shadow: ${boxShadowType}  ${ShadowBoxX}px ${ShadowBoxY}px ${ShadowBoxBlur}px ${ShadowBoxColor } `
}

function gradient(params) {
	let gradientDeg = document.querySelector('.gradientDeg').value
	let gradientFirstColor = document.querySelector('.gradientFirstColor').value
	let gradientFirstPoint = document.querySelector('.gradientFirstPoint').value
	let gradientSecondColor = document.querySelector('.gradientSecondColor').value
	let gradientSecondPoint = document.querySelector('.gradientSecondPoint').value
	let gradientThirdColor = document.querySelector('.gradientThirdColor').value
	let gradientThirdPoint = document.querySelector('.gradientThirdPoint').value
	let gradientType = document.querySelector('.gradientType').value

	if (gradientType === 'radial') {
		$box.style.background = `radial-gradient(circle, ${gradientFirstColor} ${gradientFirstPoint}%, ${gradientSecondColor} ${gradientSecondPoint}%, ${gradientThirdColor} ${gradientThirdPoint}%)`
		$gradient.textContent = `background: radial-gradient(circle, ${gradientFirstColor} ${gradientFirstPoint}%, ${gradientSecondColor} ${gradientSecondPoint}%, ${gradientThirdColor} ${gradientThirdPoint}%)`
	} else {
		$box.style.background = `linear-gradient(${gradientDeg}deg, ${gradientFirstColor} ${gradientFirstPoint}%, ${gradientSecondColor} ${gradientSecondPoint}%, ${gradientThirdColor} ${gradientThirdPoint}%)`
		$gradient.textContent = `background: linear-gradient(${gradientDeg}deg, ${gradientFirstColor} ${gradientFirstPoint}%, ${gradientSecondColor} ${gradientSecondPoint}%, ${gradientThirdColor} ${gradientThirdPoint}%)`
	}
}
function transform(params) {
    let scale = document.querySelector('.scale').value/ 10
    let rotate= document.querySelector('.rotate').value
    let translateX = document.querySelector('.translateX').value
    let translateY = document.querySelector('.translateY').value
    let skewX = document.querySelector('.skewX').value
    let skewY = document.querySelector('.skewY').value

    $transform.textContent = `transform: scale(${scale}) rotate(${rotate}deg) translate(${translateX}px, ${translateY}px) skew(${skewX}deg, ${skewY}deg)`
    $box.style.transform =` scale(${scale}) rotate(${rotate}deg) translate(${translateX}px, ${translateY}px) skew(${skewX}deg, ${skewY}deg)`
}


function transition(params) {
	let transitionTime = document.querySelector('.transitionTime').value

	$hoverButton.style.transition = `${transitionTime}s`
	$transition.textContent = `transition: ${transitionTime}s`
}

function backdropFilter(params) {
	let blur = document.querySelector('.blur').value
	let resulq = document.querySelector('.result')
let BackdropFilter = documentq.querySelector('.BackdropFilter')
BackdropFilter.style.backdropFilter = `blur(${blur}px)`

}