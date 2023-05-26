const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const back_icon = document.querySelector(".back-icon");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
  back_icon.classList.add("active");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
  back_icon.classList.remove("active");
});