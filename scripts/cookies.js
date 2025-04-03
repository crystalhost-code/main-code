const cookieBtn = document.querySelector("#cookieBtn");
cookieBtn.addEventListener("click", () => {
  document.cookie = "cookie=accepted ";
  document.querySelector(".cookie-banner").style.display = "none";
});
// if (document.cookie !== null) {
//   document.querySelector(".cookie-banner").style.display = "none";
// }
if (document.cookie.includes("cookie=accepted")) {
  document.querySelector(".cookie-banner").style.display = "none";
}
window.addEventListener("beforeunload", () => {
  document.cookie = "cookie=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
});
