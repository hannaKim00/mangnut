// header, slider 영역  **************
const header = document.querySelector("header");
const img = document.querySelector("#slider img");
// 사이트가 로드 되었을 때 이미지 크기를 줄여줌, 헤더의 투명도를 서서히 높어줌
window.addEventListener("load", function() {
  img.style.transform =  "scale(1)";
  img.classList.add('transition-1_5');
  header.style.opacity = "1";
  setTimeout(() => {
    img.classList.remove('transition-1_5');
  }, 1000);
});

// 햄버거 클릭시 네비 나옴 **************
const hamburger = document.querySelector('#hamburger');
const hamburgerList = document.querySelectorAll('#hamburger > span');
const ul = document.querySelector('nav ul');

let on = true;
hamburger.addEventListener('click', () => {
  if(on) {
    ul.style.width = '45vw';
    hamburgerList[0].style.transform = 'translateY(12px) rotate(-45deg)';
    hamburgerList[1].style.opacity = '0';
    hamburgerList[2].style.transform = 'translateY(-11px) rotate(45deg)';
    on = false;
  } else {
    ul.style.width = '0';
    ul.style.width = '0';
    hamburgerList[0].style.transform = 'translateY(0) rotate(0)';
    hamburgerList[1].style.opacity = '1';
    hamburgerList[2].style.transform = 'translateY(0) rotate(0)';
    on = true;
  }
});

// best 슬라이더 영역 ***********
const bestSlider = document.querySelector("#best ul");
const sliderList = document.querySelectorAll("#best ul li");
const sliderCount = sliderList.length; // 전체 슬라이더(li) 갯수
const prve = document.querySelector("#but-paeg #prve");
const next = document.querySelector("#but-paeg #next");
let click = 0; 

// marginLeft 값을 바꿔주는 함수
function moveSlider(slidername, num, marginleft) {
  slidername.style.marginLeft = -num * marginleft + "px";
}

// next 버튼을 클릭했을 때 발생 이벤트
// count 값이 6-3=3 보다 작을 경우에만 실행되고 count에 + 1
let marginWidth = sliderList[0].offsetWidth;
next.addEventListener("click", function() {
  if(click < sliderCount-3) {
    click++;
    moveSlider(bestSlider, click, marginWidth);
    prve.style.background = "url(images/main/prev.png)"
  }
  // 활성, 비활성 이미지 변경
  if(click == 3) {
    next.style.background = "url(images/main/next-hover.png)"
  }
});
// prve 버튼을 클릭했을 때 발생 이벤트
// count 값이 0 보다 클 경우에만 실행되고 count에 - 1 
// => next를 클릭하면 count값은 증가하기 때문에 next버튼을 클릭 했을 때 활성화됨
prve.addEventListener("click", function() {
  if(click > 0) {
    click--;
    moveSlider(bestSlider, click, marginWidth);
    next.style.background = "url(images/main/next.png)"
  }
  // 활성, 비활성 이미지 변경
  if(click == 0) {
    prve.style.background = "url(images/main/prev-hover.png)"
  }
});

// 해상도 1024미만일 때 터치 이벤트
const bestUl = document.querySelector("#best ul") 
const bestUlLi = document.querySelectorAll("#best ul li") 
let curPos = 0;
let postion = 1;
let start_x, end_x;
let liLength =  bestUlLi.length;
let imgWidth = bestUlLi[0].offsetWidth;

if (matchMedia("screen and (max-width:1024px)").matches) { 
  bestUl.addEventListener('touchstart', touch_start);
  bestUl.addEventListener('touchend', touch_end);
}

function touch_start(event) {
  start_x = event.touches[0].pageX;
}

function touch_end(event) {
  end_x = event.changedTouches[0].pageX;
  if(start_x > end_x){
    if(curPos < liLength-2) {
      postion -= imgWidth;
      bestUl.style.transform = `translateX(${postion}px)`;
      curPos = curPos + 1;
    }
  } else{
      if(curPos > 0) {
        postion += imgWidth;
        bestUl.style.transform = `translateX(${postion}px)`;
        curPos = curPos - 1;
      }
    }
}


// instagram *************
const instagram = document.querySelector('#instagram-wrap ul');
const reviewlist = instagram.children; // instagram 자식요소들

// 첫번째 요소를 마지막 요소로 보내주는 함수 생성
function slider() {
  instagram.insertBefore(reviewlist[0],reviewlist.lastChild);
};

// 2초마다 이미지가 바뀜
let times = setInterval(slider, 2000);

// 마우스를 올렸을 경우 멈춤
instagram.addEventListener("mouseover", function() {
  clearInterval(times);
});

// 마우스가 아웃되면 다시 실행
instagram.addEventListener("mouseout", function() {
  times = setInterval(slider, 2000);
});
