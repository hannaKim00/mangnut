window.onload = function () {
  const myPeag = document.querySelector("#sub-menu > li:nth-child(1)");
  const myPeagSub = document.querySelector("#my-peag-sub");

  myPeag.addEventListener("mouseenter", function() {
    console.dir(myPeagSub);
    if(myPeagSub.style.display == "") {
      myPeagSub.style.display = "block";
    }
  });
  myPeagSub.addEventListener("mouseleave", function() {
    myPeagSub.style.display = "";
  });
}