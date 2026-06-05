const header = document.getElementById("header");
const SCROLL_THRESHOLD = 8;

function updateHeaderOnScroll() {
  if (!header) return;
  header.classList.toggle("is-scrolled", window.scrollY > SCROLL_THRESHOLD);
}

window.addEventListener("scroll", updateHeaderOnScroll, { passive: true });
updateHeaderOnScroll();

const INDEX_PAGE = "index.html";
const title = document.getElementById("title");

if (title) {
  title.addEventListener("click", () => {
    window.location.href = INDEX_PAGE;
  });
}

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

const TEAM_PAGE = "team.html";
const isGamePage = Boolean(document.getElementById("tournament-game"));
const nav = document.getElementById("nav");

if (nav && !isGamePage) {
  const navItems = Array.from(nav.children);

  navItems.slice(0, 3).forEach((item) => {
    item.addEventListener("click", goToGamePage);
  });

  if (navItems[3]) {
    navItems[3].addEventListener("click", () => {
      window.location.href = TEAM_PAGE;
    });
  }
}

const FORM_PAGE = "form.html";

function goToFormPage() {
  window.location.href = FORM_PAGE;
}

document.querySelectorAll("#menuList [id$='Menu']").forEach((menu) => {
  menu.addEventListener("click", goToFormPage);
});

const FORTUNE_COOKIE_PAGE = "fortuneCookie.html";
const fortuneCookieBanner = document.getElementById("fortuneCookie");

if (fortuneCookieBanner) {
  fortuneCookieBanner.addEventListener("click", () => {
    window.location.href = FORTUNE_COOKIE_PAGE;
  });
}
