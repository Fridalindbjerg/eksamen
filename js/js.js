document.querySelectorAll(".header_nav li").forEach((li) => {
  li.addEventListener("mouseenter", () => li.classList.add("home_button"));
  li.addEventListener("mouseleave", () => li.classList.remove("home_button"));
});

function btns() {
  console.log("btn");
  document.querySelector(".header_nav li").classList.add("home_button");
}

function btns_remove() {
  console.log("remove_btn");
  document.querySelector(".btn_home").classList.remove("home_button");
}
