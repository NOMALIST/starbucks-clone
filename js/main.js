
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

window.addEventListener('scroll', _.throttle(() => {
  if(window.scrollY > 500) {
    // 배지 숨기기
    // badgeEL.style.display = 'none';
    gsap.to(badgeEL, .6, {
      opacity: 0,
      display: 'none'
    });
  } else {
    // 배지 보이기
    // badgeEL.style.display = 'block';
    gsap.to(badgeEL, .6, {
      opacity: 1,
      display: 'block'
    });
  }
}, 300));
// _.throttle(함수, 함수 실행 시간)
/* lodash.js 를 통해 함수의 실행을 컨트롤할 수 있음.
   스크롤 이벤트가 너무 반복적으로 실행되는 것을 방지*/

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