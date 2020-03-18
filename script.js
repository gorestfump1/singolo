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
  var i = 0;

  BTNPREV.addEventListener('click', () => {
  SLIDEIMG[i].style.display = 'none';
  i--;
  if(i < 0){
    i = 0;
  }
  SLIDEIMG[i].style.display = 'block';
    })

    BTNNEXT.addEventListener('click', () => {
      SLIDEIMG[i].style.display = 'none';
      i++;
      if (i >= SLIDEIMG.length){
        i = 0;
      }
      SLIDEIMG[i].style.display = 'block';
        })
    
