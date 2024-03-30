
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