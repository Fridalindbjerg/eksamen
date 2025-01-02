// document.querySelectorAll(".header_nav li").forEach((li) => {
//   li.addEventListener("mouseenter", () => li.classList.add("home_button"));
//   li.addEventListener("mouseleave", () => li.classList.remove("home_button"));
// });

// function btns() {
//   console.log("btn");
//   document.querySelector(".header_nav li").classList.add("home_button");
//   document.querySelector(".header_nav li a").classList.add("translate");
// }

// function btns_remove() {
//   console.log("remove_btn");
//   document.querySelector(".btn_home").classList.remove("home_button");
// }

document.addEventListener("DOMContentLoaded", function () {
  const grid = document.querySelector(".pics_tema");
  const scrollSpeed = 0.4; // Slow speed using fractions
  let accumulatedScroll = 0; // Accumulator for fractional changes

  // Duplicate content for seamless scrolling
  const clonedContent = grid.innerHTML;
  grid.innerHTML += clonedContent;
  console.log("Duplicated content:");

  function autoScroll() {
    accumulatedScroll += scrollSpeed; // Accumulate the fractional scroll value

    if (accumulatedScroll >= 1) {
      // Apply the scroll once we accumulate at least 1px
      grid.scrollLeft += Math.floor(accumulatedScroll);
      console.log("scrollLeft after scroll:", grid.scrollLeft); // Log scroll position after applying scroll

      accumulatedScroll %= 1; // Keep the leftover fraction
    }

    // When scroll reaches the duplicated content, reset to avoid visual jump
    if (grid.scrollLeft >= grid.scrollWidth / 2) {
      grid.scrollLeft = 0; // Reset scroll position
      console.log("Resetting scroll position"); // Log when reset happens
    }

    requestAnimationFrame(autoScroll); // Continue animation
  }

  autoScroll(); // Start infinite scrolling
});
