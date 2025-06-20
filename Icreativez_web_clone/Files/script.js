const navbarToggle = document.querySelector(".navbar_toggle");
const un_list = document.querySelector(".ul");
navbarToggle.addEventListener("click", () => {
  navbarToggle.classList.toggle("active");
  un_list.classList.toggle("active");
});
