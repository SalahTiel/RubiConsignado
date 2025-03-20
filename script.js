function toggleList (list) {
    const govList = document.querySelector('ul.govList')
    const govBtn = document.querySelector('.govBtn')
    const prefList = document.querySelector('ul.prefList')
    const prefBtn = document.querySelector('.prefBtn')
    const map1 = document.querySelector('img.map1')
    const map2 = document.querySelector('img.map2')




    if(list === 'gov'){
        govList.style.display = 'block'
        govBtn.style.backgroundColor = 'var(--red)'
        govBtn.style.fontWeight = '700'
        
        prefList.style.display = 'none'
        prefBtn.style.backgroundColor = 'transparent'
        prefBtn.style.fontWeight = '400'
        
        if(screen.width >= 1280){
          map1.style.display = "block"
          map2.style.display = "none"
        }

    }else{
        govList.style.display = 'none'
        govBtn.style.backgroundColor = 'transparent'
        govBtn.style.fontWeight = '400'

        prefList.style.display = 'block'
        prefBtn.style.backgroundColor = 'var(--red)'
        prefBtn.style.fontWeight = '700'

        if(screen.width >= 1280){
          map1.style.display = "none"
          map2.style.display = "block"
        }
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



const carouselContent2 = document.querySelector('.carousel-content2');
const card2 = document.querySelectorAll('.product');
const prevBtn2 = document.querySelector('.prev-btn2');
const nextBtn2 = document.querySelector('.next-btn2');

let currentIndex2 = 0;

function updateCarousel2() {
  if(screen.width >= 1280){
    const offset2 = -currentIndex2 * 23.74;
    carouselContent2.style.transform = `translateX(${offset2}vw)`;
  }else{
    const offset2 = -currentIndex2 * 90;
    carouselContent2.style.transform = `translateX(${offset2}vw)`;
  }
}

prevBtn2.addEventListener('click', () => {
  currentIndex2 = (currentIndex2 === 0) ? card2.length - 1 : currentIndex2 - 1;
  updateCarousel2();
});

nextBtn2.addEventListener('click', () => {
  currentIndex2 = (currentIndex2 === card2.length - 1) ? 0 : currentIndex2 + 1;
  updateCarousel2();
});



function animateNumbers() {
  const counters = document.querySelectorAll(".counter");

  counters.forEach((counter) => {
    const target = +counter.getAttribute("data-value");
    let current = 0;
    const increment = target / 100;

    function updateCount() {
      current += increment;
      if (current < target) {
        counter.innerText = Math.floor(current);
        requestAnimationFrame(updateCount);
      } else {
        counter.innerText = target;
      }
    }

    updateCount();
  });
}
window.addEventListener("load", animateNumbers);



document.addEventListener("DOMContentLoaded", function () {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible"); 
      } else {
        entry.target.classList.remove("visible");
      }
    });
  }, { threshold: 0.15 });

  const elements = document.querySelectorAll(".animated-item");
  elements.forEach((el) => observer.observe(el));
});