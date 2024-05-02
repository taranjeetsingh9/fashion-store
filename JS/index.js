let scrollContainer = document.querySelector("#trendingImages");
let backBtn = document.getElementById("backBtn");
let nextBtn = document.getElementById("nextBtn");

scrollContainer.addEventListener("wheel", (e) => {
  e.preventDefault();
  scrollContainer.scrollLeft += e.deltaY;
  scrollContainer.style.scrollBehavior = "auto";
});

nextBtn.addEventListener("click", (e) => {
  scrollContainer.style.scrollBehavior = "smooth";
  scrollContainer.scrollLeft += 1500;
});
backBtn.addEventListener("click", (e) => {
  scrollContainer.style.scrollBehavior = "smooth";
  scrollContainer.scrollLeft -= 1500;
});
