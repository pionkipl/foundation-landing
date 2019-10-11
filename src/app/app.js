const burgerBtn = document.querySelector('.burger-btn');
const navMob = document.querySelector('.header__nav-mob');
const navMobLink = document.querySelectorAll('.nav-mob-link')

const containerContent = document.querySelector('.container-content');

burgerBtn.addEventListener('click', () => {
  navMob.classList.toggle('navigation');
  if (navMob.classList.contains('navigation')) {
    containerContent.classList.add('menu-navigation');
  } else {
    containerContent.classList.remove('menu-navigation');
  }
})

for (let i = 0; i < navMobLink.length; i++) {
  navMobLink[i].addEventListener('click', () => {
    containerContent.classList.remove('menu-navigation');
    navMob.classList.remove('navigation');
  })
}