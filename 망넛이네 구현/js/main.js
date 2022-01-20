
// 서브메뉴 마이페이지 
const myPeag = document.querySelector("#sub-menu > #my-page");
const myPeagSub = document.querySelector("#my-peag-sub");

// 마이페이지에 mouseenter 하면 서브 메뉴가 나타난다
myPeag.addEventListener("mouseenter", function() {
  myPeagSub.style.display = "block";
});
// 서브메뉴에서 mouseleave 하면 사라진다
myPeagSub.addEventListener("mouseleave", function() {
  myPeagSub.style.display = "";
});


// best 슬라이더 영역
const slider = document.querySelector("#best ul");
const sliderList = document.querySelectorAll("#best ul li");
const sliderCount = sliderList.length; // 전체 슬라이더(li) 갯수
const prve = document.querySelector("#but-paeg #prve");
const next = document.querySelector("#but-paeg #next");
let count = 0; 
console.dir(prve);

// marginLeft 값을 바꿔주는 함수
function moveSlider(num) {
  slider.style.marginLeft = -num * 23 + "vw";
  count = num;
}

// next 버튼을 클릭했을 때 발생 이벤트
// count 값이 6-3=3 보다 작을 경우에만 실행되고 count에 + 1
next.addEventListener("click", function() {
  if(count < sliderCount -3) {
    moveSlider(count + 1);
    prve.style.backgroundImage= "url(../images/main/prev.png)"
  }
});

// prve 버튼을 클릭했을 때 발생 이벤트
// count 값이 0 보다 클 경우에만 실행되고 count에 - 1 
// => next를 클릭하면 count값은 증가하기 때문에 next버튼을 클릭 했을 때만 실행가능
prve.addEventListener("click", function() {
  if(count > 0) {
    moveSlider(count - 1);
  }
});
