function toggleList (list) {

    const govList = document.querySelector('ul.govList')
    const govBtn = document.querySelector('.govBtn')
    const prefList = document.querySelector('ul.prefList')
    const prefBtn = document.querySelector('.prefBtn')


    if(list === 'gov'){
        govList.style.display = 'block'
        govBtn.style.backgroundColor = 'var(--red)'
        govBtn.style.fontWeight = '700'

        prefList.style.display = 'none'
        prefBtn.style.backgroundColor = 'transparent'
        prefBtn.style.fontWeight = '400'
    }else{
        govList.style.display = 'none'
        govBtn.style.backgroundColor = 'transparent'
        govBtn.style.fontWeight = '400'

        prefList.style.display = 'block'
        prefBtn.style.backgroundColor = 'var(--red)'
        prefBtn.style.fontWeight = '700'
    }

}



const carouselContent = document.querySelector('.carousel-content');
const card = document.querySelectorAll('.card-comment');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentIndex = 0;

function updateCarousel() {
  if(screen.width >= 1280){
    const offset = -currentIndex * 23.74;
    carouselContent.style.transform = `translateX(${offset}vw)`;
  }else{
    const offset = -currentIndex * 90;
    carouselContent.style.transform = `translateX(${offset}vw)`;
  }
}

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex === 0) ? card.length - 1 : currentIndex - 1;
  updateCarousel();
});

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex === card.length - 1) ? 0 : currentIndex + 1;
  updateCarousel();
});