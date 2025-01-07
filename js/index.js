window.addEventListener("load", start);

function start() {
  console.log("fall");

  document.querySelector(".box").classList.add("fall");
  console.log("slide");
  document.querySelector(".h1_index").classList.add("slide");
}
