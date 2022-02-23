//Табы
let tabButton = document.querySelectorAll('.tab-button')
let tabsItem = document.querySelectorAll('.tabs-item')

//Бургер Меню 
let open = document.querySelector('.open')
let close = document.querySelector('.close')
let burgerCont = document.querySelector('.burger-cont')
let burgerMenu = document.querySelector('.burger-menu')
let $body = document.querySelector('body')

// Результать 
let $border = document.querySelector('.border')
let $borderRadius = document.querySelector('.border-radius')
let $gradient = document.querySelector('.gradient')
let $shadowText = document.querySelector('.shadow-text')
let $TextShadow = document.querySelector('.text-shadow')
let $shadowBox = document.querySelector('.shadow-box')
let $transform = document.querySelector('.transform')
let $transition = document.querySelector('.transition')
let $hoverButton = document.querySelector('.hover-button')
let $bacdropFilter = document.querySelector('.backdrop-filter')


// Тест бокс
let $box = document.querySelector('.box')
let $boxTest = document.querySelector('.box-test')
// Кнопка сбрасывание 
let reset = document.querySelector('.reset')

// Функции Бургер Меню 
burgerMenu.addEventListener('click',()=>{
	burgerMenu.classList.remove('burger-acitve')
	$body.classList.remove('block-scrool')
})
burgerCont.addEventListener('click',(e)=>{
	e.stopPropagation();
})
open.addEventListener('click', ()=>{
	burgerMenu.classList.add('burger-acitve')
	$body.classList.add('block-scrool')
})
close.addEventListener('click',()=>{
	burgerMenu.classList.remove('burger-acitve')
	$body.classList.remove('block-scrool')
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
	let borderSize = document.querySelector('.border-size').value
	let borderType = document.querySelector('.border-type').value
	let colorBorder = document.querySelector('.color-border').value
	
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
	let ShadowTextX = document.querySelector('.shadow-text-X').value
	let ShadowTextY = document.querySelector('.shadow-text-Y').value
	let ShadowTextBlur = document.querySelector('.shadow-text-blur').value
	let ShadowTextColor = document.querySelector('.shadow-text-color').value

	$TextShadow.style.textShadow = `${ShadowTextX}px ${ShadowTextY}px ${ShadowTextBlur}px ${ShadowTextColor}`
	$shadowText.textContent = `text-shadow: ${ShadowTextX}px ${ShadowTextY}px ${ShadowTextBlur}px ${ShadowTextColor} `
}

function boxShadow(params) {
	let ShadowBoxX = document.querySelector('.shadow-box-X').value
	let ShadowBoxY = document.querySelector('.shadow-box-Y').value
	let ShadowBoxBlur = document.querySelector('.shadow-box-blur').value
	let ShadowBoxColor = document.querySelector('.shadow-box-color').value
	let boxShadowType = document.querySelector('.box-shadow-type').value

	$box.style.boxShadow = ` ${boxShadowType} ${ShadowBoxX}px ${ShadowBoxY}px ${ShadowBoxBlur}px ${ShadowBoxColor } `
	$shadowBox.textContent = `box-shadow: ${boxShadowType}  ${ShadowBoxX}px ${ShadowBoxY}px ${ShadowBoxBlur}px ${ShadowBoxColor } `
}

function gradient(params) {
	let gradientDeg = document.querySelector('.gradient-deg').value
	let gradientFirstColor = document.querySelector('.gradient-first-color').value
	let gradientFirstPoint = document.querySelector('.gradient-first-point').value
	let gradientSecondColor = document.querySelector('.gradient-second-color').value
	let gradientSecondPoint = document.querySelector('.gradient-second-point').value
	let gradientThirdColor = document.querySelector('.gradient-third-color').value
	let gradientThirdPoint = document.querySelector('.gradient-third-point').value
	let gradientType = document.querySelector('.gradient-type').value

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
    let translateX = document.querySelector('.translate-X').value
    let translateY = document.querySelector('.translate-Y').value
    let skewX = document.querySelector('.skew-X').value
    let skewY = document.querySelector('.skew-Y').value

    $transform.textContent = `transform: scale(${scale}) rotate(${rotate}deg) translate(${translateX}px, ${translateY}px) skew(${skewX}deg, ${skewY}deg)`
    $box.style.transform =` scale(${scale}) rotate(${rotate}deg) translate(${translateX}px, ${translateY}px) skew(${skewX}deg, ${skewY}deg)`
}


function transition(params) {
	let transitionTime = document.querySelector('.transition-time').value

	$hoverButton.style.transition = `${transitionTime}s`
	$transition.textContent = `transition: ${transitionTime}s`
}

