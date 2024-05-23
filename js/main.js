
const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', () => {
  searchInputEl.focus();
});


searchInputEl.addEventListener('focus', () => {
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색');
});

searchInputEl.addEventListener('blur', () => {
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');
  // searchInputEl.textContent = '';
});

const badgeEL = document.querySelector('header .badges');

// _.throttle(함수, 함수 실행 시간)
/* lodash.js 를 통해 함수의 실행을 컨트롤할 수 있음.
   스크롤 이벤트가 너무 반복적으로 실행되는 것을 방지*/
window.addEventListener('scroll', _.throttle(() => {
  if(window.scrollY > 500) {
    // 배지 숨기기
    // badgeEL.style.display = 'none';
    gsap.to(badgeEL, .6, {
      opacity: 0,
      display: 'none'
    });
    // ToTop 버튼 보이기
    gsap.to('#to-top', .2, {
      x: 0
    });
  } else {
    // 배지 보이기
    // badgeEL.style.display = 'block';
    gsap.to(badgeEL, .6, {
      opacity: 1,
      display: 'block'
    });
    // ToTop 버튼 숨기기
    gsap.to('#to-top', .2, {
      x: 100
    });
  }
}, 300));

const toTopEl = document.querySelector('#to-top');
toTopEl.addEventListener('click', () => {
  gsap.to(window, .7, {
    scrollTo: 0
  })
});

const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach((fedeEl, index) => {
  gsap.to(fedeEl, 1, {
    delay: (index+1) * .7,  // 0.7,  1.4,  2.1,  2.7
    opacity: 1
  });
});

const swiper1 = new Swiper('.notice-line .swiper', {
  // Optional parameters
  direction: 'vertical',
  autoplay: true, // 자동 넘김
  loop: true, // 반복 여부
});

const swiper2 = new Swiper('.promotion .swiper', {
  // Optional parameters
  // direction: 'horizental'  디폴트 옵션
  slidesPerView: 3,  // 한번에 보여줄 슬라이드 개수
  spaceBetween: 10, // 슬라이드 사이 여백
  centeredSlides: true,
  autoplay: {
    delay : 5000
  }, // 자동 넘김
  loop: true, // 반복 여부
  pagination: {
    el: '.promotion .swiper-pagination', // 페이지 번호요소 선택자
    clickable: true // 사용자의 페이지 번호 요소 제어 여부
  },
  navigation: {
    prevEl: '.promotion .swiper-prev',
    nextEl: '.promotion .swiper-next',
  }
});

const swiper3 = new Swiper('.awards .swiper', {
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5,
  navigation: {
    prevEl: '.awards .swiper-prev',
    nextEl: '.awards .swiper-next',
  }
});

const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;
promotionToggleBtn.addEventListener('click', () => {
  isHidePromotion = !isHidePromotion;
  if(!isHidePromotion) {
    // 숨김 처리
    promotionEl.classList.add('hide');
  } else {
    // 보이기 처리
    promotionEl.classList.remove('hide');
  }
})

// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}

function floatingObject(selector, delay, size) {
  // gsap.to(요소, 시간, 옵션);
  gsap.to(
    selector, 
    random(1.5, 2.5), 
    { // 옵션
      y: size,
      repeat: -1,
      yoyo: true,
      ease: Power1.easeInOut,
      delay: random(0, delay)
  });
}

floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);

const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach((spyEl) => {
  new ScrollMagic
      .Scene({  // 보여짐의 여부를 감시할 요소들
        triggerElement: spyEl,
        triggerHook: .8
      })    
      .setClassToggle(spyEl, 'show')
      .addTo(new ScrollMagic.Controller());  
})

const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();