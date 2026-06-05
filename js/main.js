const header = document.getElementById("header");
const SCROLL_THRESHOLD = 8;

function updateHeaderOnScroll() {
  if (!header) return;
  header.classList.toggle("is-scrolled", window.scrollY > SCROLL_THRESHOLD);
}

window.addEventListener("scroll", updateHeaderOnScroll, { passive: true });
updateHeaderOnScroll();

const GAME_PAGE = "game.html";
const gameCardIds = ["foodGame", "rouletteGame", "tournamentGame"];

function goToGamePage() {
  window.location.href = GAME_PAGE;
}

gameCardIds.forEach((id) => {
  const card = document.getElementById(id);
  if (!card) return;
  card.addEventListener("click", goToGamePage);
});

const nav = document.getElementById("nav");
if (nav) {
  Array.from(nav.children)
    .slice(0, 3)
    .forEach((item) => {
      item.addEventListener("click", goToGamePage);
    });
}

const FORM_PAGE = "form.html";

function goToFormPage() {
  window.location.href = FORM_PAGE;
}

document.querySelectorAll("#menuList [id$='Menu']").forEach((menu) => {
  menu.addEventListener("click", goToFormPage);
});
