import Glide from '@glidejs/glide';

const sliders = document.querySelectorAll('.glide');

for (let i = 0; i < sliders.length; i++) {
  const glide = new Glide(sliders[i], {
    autoplay: 4000
  });

  glide.mount()
}


