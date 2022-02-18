let tabButton = document.querySelectorAll('.tab-button')
let tabsItem = document.querySelectorAll('.tabs-item')
let box = document.querySelector('.box')
let resultText = document.querySelector('.resultText')
let burgerMenu = document.querySelector('.burgerMenu')
let open = document.querySelector('.open')
let close = document.querySelector('.close')
let burgerCont = document.querySelector('.burgerCont')

burgerMenu.addEventListener('click',()=>{
	burgerMenu.classList.remove('burgerAcitve')
})
burgerCont.addEventListener('click',(e)=>{
	e.stopPropagation();
})
open.addEventListener('click', ()=>{
	burgerMenu.classList.add('burgerAcitve')


})
close.addEventListener('click',()=>{
	burgerMenu.classList.remove('burgerAcitve')

})



tabButton.forEach(function (e) {
	e.addEventListener('click', function () {
		let currentBtn = e
	
		let tabId = currentBtn.getAttribute('data-tab')
		let currentTab = document.querySelector(tabId)
		console.log(tabId);
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

function border(params) {
	let borderSize = document.querySelector('.borderSize').value
	let borderType = document.querySelector('.borderType').value
	let colorBorder = document.querySelector('.colorBorder').value
	console.log(borderSize.textContent)	;
    let $border = document.querySelector('.border')
	if (borderSize > 50) {
		borderSize = 50
	}
	box.style.border = `${borderSize}px ${borderType} ${colorBorder} `
	$border.textContent = `border: ${borderSize}px ${borderType} ${colorBorder}`
}

function borderRadius(params) {


	let rtl = document.querySelector(".rtl").value;
	let rtr = document.querySelector(".rtr").value;
	let rbr = document.querySelector(".rbr").value;
	let rbl = document.querySelector(".rbl").value;
    let $borderRadius = document.querySelector('.borderRadius')
	box.style.borderRadius = `${rtl}px ${rtr}px ${rbr}px ${rbl}px `
	$borderRadius.textContent = `border-radius:${rtl}px ${rtr}px ${rbr}px ${rbl}px; `
}

function textShadow(params) {
	let ShadowTextX = document.querySelector('.ShadowTextX').value
	let ShadowTextY = document.querySelector('.ShadowTextY').value
	let ShadowTextBlur = document.querySelector('.ShadowTextBlur').value
	let ShadowTextColor = document.querySelector('.ShadowTextColor').value
	let shadowText = document.querySelector('.shadowText')
	let TextShadow = document.querySelector('.TextShadow')
	TextShadow.style.textShadow = `${ShadowTextX}px ${ShadowTextY}px ${ShadowTextBlur}px ${ShadowTextColor}`
	shadowText.textContent = `text-shadow: ${ShadowTextX}px ${ShadowTextY}px ${ShadowTextBlur}px ${ShadowTextColor} `
	console.log(`${ShadowTextX}px ${ShadowTextY}px ${ShadowTextBlur}px ${ShadowTextColor}`);
}

function boxShadow(params) {
	let ShadowBoxX = document.querySelector('.ShadowBoxX').value
	let ShadowBoxY = document.querySelector('.ShadowBoxY').value
	let ShadowBoxBlur = document.querySelector('.ShadowBoxBlur').value
	let ShadowBoxColor = document.querySelector('.ShadowBoxColor').value
	let boxShadowType = document.querySelector('.boxShadowType').value
	let shadowBox = document.querySelector('.shadowBox')
	box.style.boxShadow = ` ${boxShadowType} ${ShadowBoxX}px ${ShadowBoxY}px ${ShadowBoxBlur}px ${ShadowBoxColor } `
	shadowBox.textContent = `box-shadow: ${boxShadowType}  ${ShadowBoxX}px ${ShadowBoxY}px ${ShadowBoxBlur}px ${ShadowBoxColor } `
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
let gradient = document.querySelector('.gradient')
	if (gradientType === 'radial') {
		box.style.background = `radial-gradient(circle, ${gradientFirstColor} ${gradientFirstPoint}%, ${gradientSecondColor} ${gradientSecondPoint}%, ${gradientThirdColor} ${gradientThirdPoint}%)`
		gradient.textContent = `background : radial-gradient(circle, ${gradientFirstColor} ${gradientFirstPoint}%, ${gradientSecondColor} ${gradientSecondPoint}%, ${gradientThirdColor} ${gradientThirdPoint}%)`
	} else {
		box.style.background = `linear-gradient(${gradientDeg}deg, ${gradientFirstColor} ${gradientFirstPoint}%, ${gradientSecondColor} ${gradientSecondPoint}%, ${gradientThirdColor} ${gradientThirdPoint}%)`
		gradient.textContent = `background : linear-gradient(${gradientDeg}deg, ${gradientFirstColor} ${gradientFirstPoint}%, ${gradientSecondColor} ${gradientSecondPoint}%, ${gradientThirdColor} ${gradientThirdPoint}%)`
	}
}
function transform(params) {
    let scale = document.querySelector('.scale').value/ 10
    let rotate= document.querySelector('.rotate').value
    let translateX = document.querySelector('.translateX').value
    let translateY = document.querySelector('.translateY').value
    let skewX = document.querySelector('.skewX').value
    let skewY = document.querySelector('.skewY').value
	let transform = document.querySelector('.transform')
    transform.textContent = `transform: scale(${scale}) rotate(${rotate}deg) translate(${translateX}px, ${translateY}px) skew(${skewX}deg, ${skewY}deg)`
    box.style.transform =` scale(${scale}) rotate(${rotate}deg) translate(${translateX}px, ${translateY}px) skew(${skewX}deg, ${skewY}deg)`
}
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };
let vasya = { name: "Вася", age: 25 };
let arr = [ petya,vasya,  masha  ];
console.log(`arr`,arr);
let q = arr.sort((a,b)=>a.age - b.age)

