function hideEye() {
  $("#eye").css("display", "none");
  document.getElementById("namedata").style.display = "flex";
  document.getElementById("namedata").style.animation = "animate 0.5s 1";
  // document.getElementById("navbar").style.display = "flex";
  // document.getElementsByClassName("navlist").style.display = flex;
  // document.getElementByTagName("footer").style.display = "flex";
}

//Navigation highlights onscroll and onclick
const buttons = document.querySelectorAll(".button-atag");
const pages = document.querySelectorAll(".scroll-menu");

buttons.forEach((element) => {
  element.addEventListener("click", () => {
    removeActive(buttons);
    if (element.classList.contains("active")) {
      return;
    } else {
      element.classList.add("active");
    }
  });
});

function changeLinkState() {
  let index = pages.length;
  while (index-- && window.scrollY - 650 < pages[index].offsetTop) {
    removeActive(buttons);
    buttons[index].classList.add("active");
  }
}

changeLinkState();
window.addEventListener("scroll", changeLinkState);

function removeActive(arr) {
  arr.forEach((element) => {
    element.classList.remove("active");
  });
}

// Setup for image slideshow functionality
const arrImages = [];
let i = 0;
const timeChange = 3000;
arrImages[0] = "./img/web1.png";
arrImages[1] = "./img/web2.png";
arrImages[2] = "./img/web3.png";
arrImages[3] = "./img/home1.png";

// console.log(arrImages);
// Function for the images to swap to make slideshow
function slideShow() {
  document.getElementById("img1").src = arrImages[i];

  if (i < arrImages.length - 1) {
    i++;
  } else {
    i = 0;
  }

  setTimeout(slideShow, timeChange);
}
slideShow();
