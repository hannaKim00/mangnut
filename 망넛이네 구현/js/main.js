// header, slider 영역  **************
const header = document.querySelector("header");
const img = document.querySelector("#slider img");
// 사이트가 로드 되었을 때 이미지 크기를 줄여줌, 헤더의 투명도를 서서히 높어줌
window.addEventListener("load", function() {
  img.style.transform =  "scale(1)";
  header.style.opacity = "1";
});


// 스크롤 이벤트 영역
const introduction = document.querySelector("#introduction");
const bestWrap = document.querySelector("#best-wrap");
const newWrap = document.querySelector("#new-wrap");
const eventBanner = document.querySelector("#event-banner");
const instagramWrap = document.querySelector("#instagram");
// 스크롤이 해당값을 초과하면 내용이 나타남
function scroll(name, num) {
  window.addEventListener('scroll', function(){
    if(window.scrollY > num) {
      name.style.opacity = "1";
      name.style.bottom = "0";
    };
  });
}
scroll(introduction,400);
scroll(bestWrap,1200);
scroll(newWrap,2080);
scroll(eventBanner,2500);
scroll(instagramWrap,2900);


// best 슬라이더 영역 ***********
const bestSlider = document.querySelector("#best ul");
const sliderList = document.querySelectorAll("#best ul li");
const sliderCount = sliderList.length; // 전체 슬라이더(li) 갯수
const prve = document.querySelector("#but-paeg #prve");
const next = document.querySelector("#but-paeg #next");
let click = 0; 

// marginLeft 값을 바꿔주는 함수
function moveSlider(slidername, num, marginleft) {
  slidername.style.marginLeft = -num * marginleft + "vw";
}

// next 버튼을 클릭했을 때 발생 이벤트
// count 값이 6-3=3 보다 작을 경우에만 실행되고 count에 + 1
next.addEventListener("click", function() {
  if(click < sliderCount-3) {
    click++;
    moveSlider(bestSlider, click, 23);
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
    moveSlider(bestSlider, click, 23);
    next.style.background = "url(images/main/next.png)"
  }
  // 활성, 비활성 이미지 변경
  if(click == 0) {
    prve.style.background = "url(images/main/prev-hover.png)"
  }
});


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
