//Automation onload
var feedbackbtn = document.querySelector('#feedback');
var reportbtn = document.querySelector('#report');
var welcome1 = document.querySelector('.WelcomeSection--word--1');
var welcome2 = document.querySelector('.WelcomeSection--word--2');
window.onload = function(){
	feedbackbtn.classList.add('moveright');
	reportbtn.classList.add('moveleft');
	welcome1.classList.add('moveup');
	welcome2.classList.add('moveup');
}


//appear section on scroll
window.addEventListener('scroll', show);
function show(){
	var appears = document.querySelectorAll('.appear');

	for(var i = 0; i < appears.length; i++){
		var windowheight = window.innerHeight;
		var revealtop = appears[i].getBoundingClientRect().top;
		var pointappear = 0.1 * windowheight;
		if(revealtop < windowheight - pointappear){
			appears[i].classList.add('active');
		}
		/*else{
			appears[i].classList.remove('active');
		}*/
	}
};


//oncreen-offcreen t0p butt0n
window.addEventListener('scroll', uptop);
function uptop(){
	var topbutton = document.querySelector('.up');
	var gif = document.querySelector('.gif');
	if(window.pageYOffset > 400){
		topbutton.classList.remove('offcreen');
		topbutton.classList.add('oncreen')
	}
	else{
		topbutton.classList.remove('oncreen');
		topbutton.classList.add('offcreen');
	}


	if(window.pageYOffset > 550){
		gif.classList.remove('oncreen');
		gif.classList.add('offcreen');
	}
	
	//console.log(window.pageYOffset);  get address of scroll bar
}



//changes comment section

var cmtchangereturn = document.querySelector('.cmt--return');
cmtchangereturn.addEventListener('click', changecmtback);
var cmtchangenext = document.querySelector('.cmt--next');
cmtchangenext.addEventListener('click', changecmtnext);


const user1 = {
	say : " \"  Thanks for documentary synthesis. Beyond the syllabus and textbook provided from school, I have a library at right home with the completeness of academic major and specific tutorial videos! \" ",
	name : "Author: Elizabeth Olsen",
	photolink : "./asset/Photo/elizabeth-olsen.jpg"
};
const user2 = {
	say : " \"  It was. And it was beautiful. Titan was like most planets. Too many mouths, not enough to go around. And when we faced extinction, I offered a solution. \" ",
	name : "Author: Thanos",
	photolink : "./asset/Photo/thanos.png"
};
const user3 = {
	say : " \"  Thanks for documentary synthesis. Beyond the syllabus and textbook provided from school, I have a library at right home with the completeness of academic major and specific tutorial videos! \" ",
	name : "Author: Doctor Strange",
	photolink : "./asset/Photo/strange.jpg"
};

const user = [user1, user2, user3];

var n = 0;
var cmt = document.querySelector('.Cmt--word');
var author = document.querySelector('.Author--word');
var authorphoto = document.querySelector('#Authorphoto');

cmt.innerText = user[n].say;
author.innerText = user[n].name;
authorphoto.setAttribute('src', user[n].photolink);



function changecmtback(){
	n -= 1;
	if(n < 0){ n = 2; }
	if(n >= 3){ n = 0}
	console.log(n);
	cmt.innerText = user[n].say;
	author.innerText = user[n].name;
	authorphoto.setAttribute('src', user[n].photolink);
}
function changecmtnext(){
	n += 1;
	if(n <= 0){ n = 2; }
	if(n >= 3){ n = 0; }
	console.log(n);
	cmt.innerText = user[n].say;
	author.innerText = user[n].name;
	authorphoto.setAttribute('src', user[n].photolink);
}

setInterval(() => {
	n += 1;
	if(n >= 3){ n = 0; }
	cmt.innerText = user[n].say;
	author.innerText = user[n].name;
	authorphoto.setAttribute('src', user[n].photolink);
}, 3000);


/// redirect to the library
function docDiscover(){
	
}

/// appearance of feedback window
var feed = document.querySelector('.incidentWindow');
function feedback(){
	feed.classList.add('class','incidentWindow__active');
}

/*
setTimeout(() => {
	var home_page = document.querySelector('.Home_page');
	home_page.classList.add('class', 'display_block');
}, 3000);


var Home_page = document.querySelector('.Home_page');
var Tech_page = document.querySelector('.Tech_page');

var btnTech_page = document.querySelector('#nav2');
var btnHome_page = document.querySelector('#nav1');

btnTech_page.addEventListener('click', switch_page);
btnHome_page.addEventListener('click', home_page_switch);

function switch_page(){
	Home_page.classList.add('display_none');
	Tech_page.classList.remove('display_none');
	Tech_page.classList.add('display_block');
}
function home_page_switch(){
	Tech_page.classList.add('display_none');
	Home_page.classList.remove('display_none');
	Home_page.classList.add('display_block');
	Home_page.classList.add('rightmovehalf');
}
*/