window.onload = function () {
  const myPeag = document.querySelector("#sub-menu > #my-page");
  console.log(myPeag);
  const myPeagSub = document.querySelector("#my-peag-sub");

  myPeag.addEventListener("mouseenter", function() {
    myPeagSub.style.display = "block";
  });
  myPeagSub.addEventListener("mouseleave", function() {
    myPeagSub.style.display = "";
  });

  
  const slider = document.querySelector("#best ul");
  const slideritems = document.querySelectorAll("#best ul li");
  const prve = document.querySelector("#but-paeg #prve");
  const next = document.querySelector("#but-paeg #next");
  console.log(prve);

  let marginleft = 23;
  console.log(marginleft);
  let clickcount = 0; 
  next.addEventListener("click", function() {
    if(clickcount < 3) {
      slider.style.marginLeft = -marginleft + "vw";
      marginleft = marginleft + 23;
      console.log(marginleft);
      clickcount++;
    }
  });
}