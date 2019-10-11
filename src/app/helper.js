
document.addEventListener('DOMContentLoaded', () => {
const breakpoint = document.querySelector('.break');

  window.addEventListener('resize', () => {
    if (window.innerWidth >= 0) {
      breakpoint.innerText = 'XS - 0';
    }

    if (window.innerWidth >= 576) {
      breakpoint.innerText = 'SM - 576';
    }

    if (window.innerWidth >= 768) {
      breakpoint.innerText = 'MD - 768';
    }

    if (window.innerWidth >= 1000) {
      breakpoint.innerText = 'LG - 1000';
    }

    if (window.innerWidth >= 1280) {
      breakpoint.innerText = 'XL - 1280';
    }
  })
})



