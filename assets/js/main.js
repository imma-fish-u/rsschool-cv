/*==================== MENU SHOW AND HIDDEN ====================*/

const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu') 
  })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu')
  })
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
  const navMenu = document.getElementById('nav-menu')
  navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== ACCORDION SKILLS ====================*/
const skillsContent = document.getElementsByClassName('skills__content'),
      skillsHeader = document.querySelectorAll('.skills__header')

function toggleSkills() {
  let itemClass = this.parentNode.className

  for (i = 0; i < skillsContent.length; i++) {
    skillsContent[i].className = 'skills__content skills__close'
  }
  if (itemClass === 'skills__content skills__close') {
    this.parentNode.className = 'skills__content skills__open'
  }
}      

skillsHeader.forEach((el) => {
  el.addEventListener('click', toggleSkills)
})

/*==================== QUALIFICATION TABS ====================*/
const tabs = document.querySelectorAll('[data-target]'),
      tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.target)

    tabContents.forEach(tabContent => {
      tabContent.classList.remove('qualification__active')
    })
    target.classList.add('qualification__active')

    tabs.forEach(tab => {
      tab.classList.remove('qualification__active')
    })
    tab.classList.add('qualification__active')
    displayNoneLastLine()
  })
})

/*==================== PORTFOLIO SWIPER  ====================*/
let swiper = new Swiper('.swiper-container', {
  cssMode: true,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive() {
  const scrollY = window.pageYOffset

  sections.forEach(curr => {
    const sectionHeight = curr.offsetHeight
    const sectionTop = curr.offsetTop - 50;
    sectionId = curr.getAttribute('id')

    if((scrollY > sectionTop) && (scrollY <= sectionTop + sectionHeight)) {
      document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
    } else {
      document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
    }
  })
}

window.addEventListener('scroll', scrollActive)

/*==================== ADD SHADOW HEADER ====================*/ 
function scrollHeader() {
  const nav = document.getElementById('header')
  if (this.scrollY >= 80) {
    nav.classList.add('scroll-header')
  } else {
    nav.classList.remove('scroll-header')
  }
}

window.addEventListener('scroll', scrollHeader)

/*==================== SHOW SCROLL UP ====================*/ 
function scrollUp() {
  const scrollUp = document.getElementById('scroll-up');

  if (this.scrollY >= 560) {
    scrollUp.classList.add('show-scroll')
  } else {
    scrollUp.classList.remove('show-scroll')
  }
}

window.addEventListener('scroll', scrollUp)

/*==================== DARK LIGHT THEME ====================*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

if (selectedTheme) {
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  document.body.classList[selectedTheme === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

themeButton.addEventListener('click', () => {
  document.body.classList.toggle(darkTheme)
  themeButton.classList.toggle(iconTheme)

  localStorage.setItem('selected-theme', getCurrentTheme())
  localStorage.setItem('selected-icon', getCurrentIcon())
})

console.log(`

1. вёрстка валидная +10
2. вёрстка семантическая +20 (в коде присутствуют теги: h1, h2, h3, h4, header, nav, main, section, footer)
3. для оформления СV используются css-стили +10
4. контент размещается в блоке, который горизонтально центрируется на странице. Фоновый цвет тянется во всю ширину страницы +10
5. вёрстка адаптивная: ни на одном из разрешений экрана до 320px включительно не появляется горизонтальная полоса прокрутки, при этом всё содержание страницы сохраняется +10
6. есть адаптивное бургер-меню. Ссылки в пунктах меню ведут на основные разделы CV. При кликах по пунктам меню реализована плавная прокрутка по якорям. При уменьшении ширины экрана меню становится адаптивным +10
(для экранов больше 768px реализовано горизонтальное меню, для экранов меньше - бургер меню)
7. на странице СV присутствует изображение - фото автора CV, пропорции изображения не искажены, у изображения есть атрибут alt +10
8. контакты для связи и перечень навыков оформлены в виде списка ul > li +10
9. CV содержит контакты для связи, краткую информацию о себе, перечень навыков, информацию об образовании и уровне английского +10
10. CV содержит пример кода (решение задачи с codewars) с подсветкой кода. Для подсветки кода используется js-библиотека highlight.js +10
11. CV содержит изображения-ссылки на выполненные проекты. При клике по изображению страница проекта открывается в новой вкладке. У каждого проекта есть название, небольшое описание, указан перечень используемых технологий +10
(на данный момент у меня только один проект - markdown cv, но функцию я реализовал)
12. CV выполнено на английском языке +10
13. выполнены требования к Pull Request: есть ссылка на задание, скриншот страницы СV, ссылка на деплой страницы CV на GitHub Pages, выполнена самооценка +10
14. есть видеорезюме на английском языке. Видеорезюме встроено в страницу CV как видео. Продолжительность видео 3-5 минут (±15 секунд). В описание видео на YouTube добавлена ссылка на его транскрипцию на английском языке +10
15. дизайн, оформление, качество выполнения CV не ниже чем в примерах CV, приведённых в материалах к заданию +10

Итого: 160 баллов.
`);