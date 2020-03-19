const NAVI = document.getElementById('header__navigation__menu');
const TAGS_MENU = document.getElementById('portfolio-buttons-container');
const TAG = [...TAGS_MENU.querySelectorAll('.portfolio__button')];
const GALLERY = document.querySelector('.portfolio-images-container');
const PICTURE = [...GALLERY.querySelectorAll('.portfolio-container__image')];
const SBMBUTTON = document.getElementById('submit-button');
const CLSBUTTON = document.getElementById('cls-btn');
const BASE = document.getElementById('base__vert');
const BASEHOR = document.getElementById('base__hor');
const FORM = document.querySelector('.form');
const BTNPREV = document.getElementById('prev__button');
const BTNNEXT = document.getElementById('next__button');
const SLIDEIMG = document.querySelectorAll('.phone__container');
////// Header
NAVI.addEventListener('click' , function(event) {
  NAVI.querySelectorAll('a').forEach(el => el.classList.remove('active'));
  event.target.classList.add('active');
});

////// Phone Display
BASE.addEventListener('click' , (event) => {
  document.getElementById('layer__vert').classList.toggle('hidden')
});

BASEHOR.addEventListener('click' , (event) => {
    document.getElementById('layer__hor').classList.toggle('hidden')
});

////// Portfolio
TAGS_MENU.addEventListener('click', (e) => {
  TAG.forEach(tag => tag.classList.remove('active'));
  e.target.classList.add('active');
  PICTURE.forEach(pic => pic.style.order = Math.floor((Math.random()*PICTURE.length)).toString());
});

GALLERY.addEventListener('click' , (event) => {
  GALLERY.querySelectorAll('img').forEach(el =>el.classList.remove('active'));
  event.target.classList.add('active'); 
});

/////// Form

function formPost() {
  SBMBUTTON.addEventListener('click', (event) => {
      const subject = document.getElementById('subject').value.toString();
      const project = document.getElementById('describe').value.toString();
      if(document.getElementById('name').value && document.getElementById('email').value) {
          event.preventDefault();
      document.getElementById('result').innerText = 'Letter is Sent';
  
      if(subject) {
          document.getElementById('result-subject').innerText = 'Subject: ' + subject;
      } else {
          document.getElementById('result-subject').innerText = 'Without subject';
      }
      if(project) {
          document.getElementById('result-describe').innerText = 'Describe: ' + project;
      } else {
          document.getElementById('result-describe').innerText = 'Without Describe';
      }
  
      document.getElementById('message-block').classList.remove('hidden');
      }
  });
  
  CLSBUTTON.addEventListener('click', () => {
      document.getElementById('message-block').classList.add('hidden');
  
      document.querySelector("form").reset();
  });
  }
  formPost();

  ///////////Slider
let items = document.querySelectorAll('.carousel .item');
let currentItem = 0;
let isEnabled = true;

function changeCurrentItem(n) {
	currentItem = (n + items.length) % items.length;
}

function hideItem(direction) {
	isEnabled = false;
	items[currentItem].classList.add(direction);
	items[currentItem].addEventListener('animationend', function() {
		this.classList.remove('active', direction);
	});
}

function showItem(direction) {
	items[currentItem].classList.add('next', direction);
	items[currentItem].addEventListener('animationend', function() {
		this.classList.remove('next', direction);
		this.classList.add('active');
		isEnabled = true;
	});
}

function nextItem(n) {
	hideItem('to-left');
	changeCurrentItem(n + 1);
	showItem('from-right');
}

function previousItem(n) {
	hideItem('to-right');
	changeCurrentItem(n - 1);
	showItem('from-left');
}

document.querySelector('.control.left').addEventListener('click', function() {
	if (isEnabled) {
		previousItem(currentItem);
	}
});

document.querySelector('.control.right').addEventListener('click', function() {
	if (isEnabled) {
		nextItem(currentItem);
	}
});
////////////////Scroll not work why?
document.addEventListener('scroll', onScroll);

function onScroll(event) {
    const CurPos = window.scrollY;
    const SECTIONS = document.querySelectorAll('body>.navi-anchor');
    const LINKS = document.querySelectorAll('#header__navigation__menu a');
    
    SECTIONS.forEach((el) => {
  if (el.offsetTop <= curPos && (el.offsetTop + el.offsetHeight) > CurPos) {
    LINKS.forEach((a) => {
      a.classList.remove('active');
        if(el.el.getAttribute('id') === a.getAttribute('href').substring(1)) {
          a.classList.add('active');}
        })
        }
      })
    }
