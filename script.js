document.getElementById("desk-download-btn").onclick = function () {
  location.href = "download/index.html";
};
document.getElementById("desk-lrnmr-btn").onclick = function () {
  location.href = "features/index.html";
};
document.getElementById("home-mobile-btn").onclick = function () {
  location.href = "index.html";
};
document.getElementById("lrnmr-mobile-btn").onclick = function () {
  location.href = "features/index.html";
};
document.getElementById("wiki-mobile-btn").onclick = function () {
  location.href = "wiki/index.html";
};
document.getElementById("contrib-mobile-btn").onclick = function () {
  location.href = "contribute/index.html";
};
document.getElementById("mobile-dropdown").addEventListener("click", function () {
  const element = document.getElementById("mobile-dropdown-menu");
  element.classList.toggle("dropdown-hide");
});

