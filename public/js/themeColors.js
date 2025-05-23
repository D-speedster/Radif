
'use strict'

//
const handleThemeUpdate = (cssVars) => {
	const root = document.querySelector(':root');
	const keys = Object.keys(cssVars);
	keys.forEach(key => {
		root.style.setProperty(key, cssVars[key]);
	});
}

function dynamicPrimaryColor(primaryColor) {
	primaryColor.forEach((item) => {
		item.addEventListener('input', (e) => {
			const cssPropName = `--primary-${e.target.getAttribute('data-id')}`;
			const cssPropName1 = `--primary-${e.target.getAttribute('data-id1')}`;
			const cssPropName2 = `--primary-${e.target.getAttribute('data-id2')}`;
			const cssPropName7 = `--primary-${e.target.getAttribute('data-id7')}`;
			const cssPropName8 = `--darkprimary-${e.target.getAttribute('data-id8')}`;
			const cssPropName3 = `--dark-${e.target.getAttribute('data-id3')}`;
			handleThemeUpdate({
				[cssPropName]: e.target.value,
				// 95 is used as the opacity 0.95
				[cssPropName1]: e.target.value + 95,
				[cssPropName2]: e.target.value,
				[cssPropName3]: e.target.value,
				[cssPropName7]: e.target.value + 20,
				[cssPropName8]: e.target.value + 20,
			});
		});
	});
}

$(function () {
	// Light theme color picker
	const dynamicPrimaryLight = document.querySelectorAll('input.color-primary-light');
	dynamicPrimaryColor(dynamicPrimaryLight);

	// dark theme color picker
	const DarkDynamicPrimaryLight = document.querySelectorAll('input.color-primary-dark');
	dynamicPrimaryColor(DarkDynamicPrimaryLight);

	localStorageBackup();

	$('#myonoffswitch1').on('click', function () {
		document.querySelector('body')?.classList.remove('dark-theme');
		$('#myonoffswitch1').prop('checked', true);

		localStorage.setItem('spruhalightMode', true);
		localStorage.removeItem('spruhadarkMode');
	})
	$('#myonoffswitch2').on('click', function () {
		document.querySelector('body')?.classList.remove('light-theme');
		$('#myonoffswitch2').prop('checked', true);

		localStorage.setItem('spruhadarkMode', true);
		localStorage.removeItem('spruhalightMode');
	})
});

function localStorageBackup() {
	'use strict'
	// if there is a value stored, update color picker and background color
	// Used to retrive the data from local storage
	if (localStorage.spruhaprimaryColor) {
		if(document.getElementById('colorID')){
			document.getElementById('colorID').value = localStorage.spruhaprimaryColor;
		}
		document.querySelector('html').style.setProperty('--primary-bg-color', localStorage.spruhaprimaryColor);
		document.querySelector('html').style.setProperty('--primary-bg-hover', localStorage.spruhaprimaryHoverColor);
		document.querySelector('html').style.setProperty('--primary-bg-border', localStorage.spruhaprimaryBorderColor);
		document.querySelector('html').style.setProperty('--primary-transparentcolor', localStorage.spruhaprimaryTransparent);
		document.querySelector('body')?.classList.add('light-theme');
		document.querySelector('body')?.classList.remove('dark-theme');
		document.querySelector('body')?.classList.remove('transparent-theme');

		
	}

	if (localStorage.spruhadarkPrimary) {
		if(document.getElementById('darkPrimaryColorID')){
			document.getElementById('darkPrimaryColorID').value = localStorage.spruhadarkPrimary;
		}
		document.querySelector('html').style.setProperty('--primary-bg-color', localStorage.spruhadarkPrimary);
		document.querySelector('html').style.setProperty('--primary-bg-hover', localStorage.spruhadarkPrimary);
		document.querySelector('html').style.setProperty('--primary-bg-border', localStorage.spruhadarkPrimary);
		document.querySelector('html').style.setProperty('--dark-primary', localStorage.spruhadarkPrimary);
		document.querySelector('html').style.setProperty('--darkprimary-transparentcolor', localStorage.spruhadarkprimaryTransparent);
		document.querySelector('body')?.classList.add('dark-theme');
		document.querySelector('body')?.classList.remove('light-theme');
		document.querySelector('body')?.classList.remove('transparent-theme');

		$('#myonoffswitch2').prop('checked', true);
		$('#myonoffswitch5').prop('checked', true);
		$('#myonoffswitch8').prop('checked', true);
	}

	if (localStorage.spruhalightMode) {
		document.querySelector('body')?.classList.add('light-theme');
		document.querySelector('body')?.classList.remove('dark-theme');
		document.querySelector('body')?.classList.remove('transparent-theme');
		$('#myonoffswitch1').prop('checked', true);
		$('#myonoffswitch5').prop('checked', true);
		$('#myonoffswitch6').prop('checked', true);
	}

	if (localStorage.spruhadarkMode) {
		document.querySelector('body')?.classList.remove('light-theme');
		document.querySelector('body')?.classList.add('dark-theme');
		document.querySelector('body')?.classList.remove('transparent-theme');
		$('#myonoffswitch2').prop('checked', true);
		$('#myonoffswitch5').prop('checked', true);
		$('#myonoffswitch8').prop('checked', true);
	}

	if (localStorage.spruhartl) {
		$('body').addClass('rtl');
		$('#myonoffswitch20').prop('checked', true);
	}
	if (localStorage.spruhahorizontalmenu) {
		$('body').addClass('horizontalmenu');
		$('#myonoffswitch02').prop('checked', true);
	}
	if (localStorage.spruhahorizontalmenuhover) {
		$('body').addClass('horizontalmenu-hover');
		$('#myonoffswitch03').prop('checked', true);
	}
	if (localStorage.spruhalightmenu) {
		$('body').addClass('light-menu');
		$('#myonoffswitch3').prop('checked', true);
	}
	if (localStorage.spruhadarkmenu) {
		$('body').addClass('dark-menu');
		$('#myonoffswitch5').prop('checked', true);
	}
	if (localStorage.spruhacolormenu) {
		$('body').addClass('color-menu');
		$('#myonoffswitch4').prop('checked', true);
	}
	if (localStorage.spruhalightheader) {
		$('body').addClass('header-light');
		$('#myonoffswitch6').prop('checked', true);
	}
	if (localStorage.spruhadarkheader) {
		$('body').addClass('header-dark');
		$('#myonoffswitch8').prop('checked', true);
	}
	if (localStorage.spruhacolorheader) {
		$('body').addClass('color-header');
		$('#myonoffswitch7').prop('checked', true);
	}
	if (localStorage.spruhaboxed) {
		$('body').addClass('layout-boxed');
		$('#myonoffswitch10').prop('checked', true);
	}
	if (localStorage.spruhafullwidth) {
		$('body').addClass('layout-fullwidth');
		$('#myonoffswitch9').prop('checked', true);
	}
	if (localStorage.spruhafixed) {
		$('body').addClass('fixed-layout');
		$('#myonoffswitch11').prop('checked', true);
	}
	if (localStorage.spruhascrollable) {
		$('body').addClass('scrollable-layout');
		$('#myonoffswitch12').prop('checked', true);
		$('body').addClass('main-sidebar-hide');
	}
	if (localStorage.spruhadefaultmenu) {
		$('body').addClass('default-menu');
		$('#myonoffswitch13').prop('checked', true);
	}
	if (localStorage.spruhaicontext) {
		$('body').addClass('icontext-menu');
		$('#myonoffswitch14').prop('checked', true);
	}
	if (localStorage.spruhaiconoverlay) {
		$('body').addClass('icon-overlay');
		$('#myonoffswitch15').prop('checked', true);
		$('body').addClass('main-sidebar-hide');
	}
	if (localStorage.spruhaclosed) {
		$('body').addClass('closed-leftmenu');
		$('#myonoffswitch16').prop('checked', true);
		$('body').addClass('main-sidebar-hide');
	}
	if (localStorage.spruhahoversubmenu) {
		$('body').addClass('hover-submenu');
		$('#myonoffswitch17').prop('checked', true);
		$('body').addClass('main-sidebar-hide');
	}
	if (localStorage.spruhahoversubmenustyle1) {
		$('body').addClass('hover-submenu1');
		$('#myonoffswitch18').prop('checked', true);
		$('body').addClass('main-sidebar-hide');
	}
}


// triggers on changing the color picker
function changePrimaryColor() {
	'use strict'
	$('#myonoffswitch3').prop('checked', true);
	$('#myonoffswitch6').prop('checked', true);

	var userColor = document.getElementById('colorID').value;
	localStorage.setItem('spruhaprimaryColor', userColor);
	// to store value as opacity 0.95 we use 95
	localStorage.setItem('spruhaprimaryHoverColor', userColor + 95);
	localStorage.setItem('spruhaprimaryBorderColor', userColor);
	localStorage.setItem('spruhaprimaryTransparent', userColor + 20);

	// removing dark theme properties
	localStorage.removeItem('spruhadarkPrimary')
	localStorage.removeItem('spruhatransparentBgColor');
	localStorage.removeItem('spruhatransparentThemeColor');
	localStorage.removeItem('spruhatransparentPrimary');
	localStorage.removeItem('spruhatransparentprimaryTransparent');
	localStorage.removeItem('spruhadarkprimaryTransparent');
	document.querySelector('body')?.classList.add('light-theme');
	document.querySelector('body')?.classList.remove('dark-theme');
	document.querySelector('body')?.classList.remove('transparent-theme');
	localStorage.removeItem('spruhaBgImage');
	document.querySelector('body')?.classList.add('dark-menu');

	$('#myonoffswitch1').prop('checked', true);

	names()

	localStorage.setItem('spruhalightMode', true);
	localStorage.removeItem('spruhadarkMode');
	localStorage.removeItem('spruhatransparentMode');

}

function darkPrimaryColor() {
	'use strict'
	var userColor = document.getElementById('darkPrimaryColorID').value;
	localStorage.setItem('spruhadarkPrimary', userColor);
	localStorage.setItem('spruhadarkprimaryTransparent', userColor + 20);
	$('#myonoffswitch5').prop('checked', true);
	$('#myonoffswitch8').prop('checked', true);


	// removing light theme data
	localStorage.removeItem('spruhaprimaryColor')
	localStorage.removeItem('spruhaprimaryHoverColor')
	localStorage.removeItem('spruhaprimaryBorderColor')
	localStorage.removeItem('spruhaprimaryTransparent');

	localStorage.removeItem('spruhatransparentBgColor');
	localStorage.removeItem('spruhatransparentThemeColor');
	localStorage.removeItem('spruhatransparentPrimary');
	localStorage.removeItem('spruhatransparentprimaryTransparent');
	localStorage.removeItem('spruhatransparentBgImgPrimary');
	localStorage.removeItem('spruhatransparentBgImgprimaryTransparent');
	localStorage.removeItem('spruhaBgImage');

	document.querySelector('body')?.classList.remove('light-theme');
	document.querySelector('body')?.classList.add('dark-theme');
	document.querySelector('body')?.classList.remove('transparent-theme');

	$('#myonoffswitch2').prop('checked', true);
	names()
	localStorage.setItem('spruhadarkMode', true);
	localStorage.removeItem('spruhalightMode');
	localStorage.removeItem('spruhatransparentMode');
}

// to check the value is hexa or not
const isValidHex = (hexValue) => /^#([A-Fa-f0-9]{3,4}){1,2}$/.test(hexValue)

const getChunksFromString = (st, chunkSize) => st.match(new RegExp(`.{${chunkSize}}`, "g"))
// convert hex value to 256
const convertHexUnitTo256 = (hexStr) => parseInt(hexStr.repeat(2 / hexStr.length), 16)
// get alpha value is equla to 1 if there was no value is asigned to alpha in function
const getAlphafloat = (a, alpha) => {
	if (typeof a !== "undefined") { return a / 255 }
	if ((typeof alpha != "number") || alpha < 0 || alpha > 1) {
		return 1
	}
	return alpha
}
// convertion of hex code to rgba code
function hexToRgba(hexValue, alpha) {
	if (!isValidHex(hexValue)) { return null }
	const chunkSize = Math.floor((hexValue.length - 1) / 3)
	const hexArr = getChunksFromString(hexValue.slice(1), chunkSize)
	const [r, g, b, a] = hexArr.map(convertHexUnitTo256)
	return `rgba(${r}, ${g}, ${b}, ${getAlphafloat(a, alpha)})`
}

let myVarVal, primaryColorVal;
function names() {

	let docStyle = getComputedStyle(document.documentElement);
	primaryColorVal = getComputedStyle(document.documentElement).getPropertyValue('--primary-bg-color').trim();

	//get variable
	myVarVal = localStorage.getItem("spruhaprimaryColor") || localStorage.getItem("spruhadarkPrimary") || primaryColorVal;





	let colorData = hexToRgba(myVarVal || primaryColorVal, 0.05)
	document.querySelector('html').style.setProperty('--primary005', colorData);

	let colorData1 = hexToRgba(myVarVal || primaryColorVal, 0.2)
	document.querySelector('html').style.setProperty('--primary02', colorData1);

	let colorData2 = hexToRgba(myVarVal || primaryColorVal, 0.3)
	document.querySelector('html').style.setProperty('--primary03', colorData2);

	let colorData5 = hexToRgba(myVarVal || primaryColorVal, 0.5)
	document.querySelector('html').style.setProperty('--primary05', colorData5);

	let colorData3 = hexToRgba(myVarVal || primaryColorVal, 0.7)
	document.querySelector('html').style.setProperty('--primary07', colorData3);

	let colorData4 = hexToRgba(myVarVal || primaryColorVal, 0.8)
	document.querySelector('html').style.setProperty('--primary08', colorData4);

	let colorData6 = hexToRgba(myVarVal || primaryColorVal, 0.1)
	document.querySelector('html').style.setProperty('--primary01', colorData6);


}
names()