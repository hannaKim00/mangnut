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

  next.addEventListener("click", function() {
    slider.style.marginLeft = "calc(-270px + -8.9vw)";
  });
}