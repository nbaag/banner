const first_banner = document.querySelector(".first_banner");
const btn = document.querySelectorAll(".btn");

const startAnimation = () => {
  first_banner.classList.add("slide-out-bottom");
};

setTimeout("startAnimation()", 4000);
