/** @format */

/*
	Trigger the Tab
	*/
let tabViewImage = document.querySelector('.tab-view-image');
function openPage(pageName, elmnt, color) {
	let i, tabcontent, tablinks;
	//Get all the tab contents
	tabcontent = document.getElementsByClassName('tabcontent');
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = 'none';
	}
	//Get all the tab headers
	tablinks = document.getElementsByClassName('tablink');
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].style.backgroundColor = '';
		tablinks[i].style.color = '#596377';
	}

	document.getElementById(pageName).style.display = 'block';
	if (pageName == 'View-1') {
		tabViewImage.src = 'assets/view-1-image.png';
	} else if (pageName == 'View-2') {
		tabViewImage.src = 'assets/view-2-image.png';
	} else if (pageName == 'View-3') {
		tabViewImage.src = 'assets/view-3-image.png';
	} else {
		tabViewImage.src = 'assets/view-4-image.png';
	}
	elmnt.style.backgroundColor = color;
	elmnt.style.color = '#fff';
}
document.getElementById('defaultOpen').click();

/*
	Trigger the Accordian
	*/
//Get all the accordian elements
let acc = document.getElementsByClassName('accordion');
let i;

for (i = 0; i < acc.length; i++) {
	acc[i].addEventListener('click', function () {
		this.classList.toggle('active-acc');
		//Select the next sibling panel of accordian button
		let panel = this.nextElementSibling;
		if (panel.style.display === 'flex') {
			panel.style.display = 'none';
		} else {
			panel.style.display = 'flex';
			//A little fade in transition of the accordian content
			setTimeout(function () {
				panel.style.opacity = '1';
			}, 10);
		}
	});
}

//Append click listener on the navbar icon on bottom of screen
document.querySelector('.toggle-side-nav').addEventListener('click', () => {
	let sideNav = document.querySelector('.navbar-side');
	if (sideNav.style.opacity == 0) {
		sideNav.style.opacity = 1;
	} else {
		sideNav.style.opacity = 0;
	}
	console.log(sideNav);
});
