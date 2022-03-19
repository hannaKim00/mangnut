// 스크롤 이벤트 영역  **************
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
scroll(introduction,200);
scroll(bestWrap,600);
scroll(newWrap,1200);
scroll(eventBanner,1600);
scroll(instagramWrap,1800);