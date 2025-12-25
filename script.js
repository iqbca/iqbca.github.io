const menuBtn = document.getElementById("menuBtn");
const mobileNav = document.getElementById("mobileNav");

if (menuBtn) {
  menuBtn.addEventListener("click", () => {
    mobileNav.style.display =
      mobileNav.style.display === "flex" ? "none" : "flex";
  });
}
