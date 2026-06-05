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

const gameCardLinks = {
  foodGame: "guess",
  rouletteGame: "roulette",
  tournamentGame: "tournament",
};

function goToGamePage(gameKey) {
  const url = new URL(GAME_PAGE, window.location.href);
  if (gameKey) {
    url.searchParams.set("game", gameKey);
  }
  window.location.href = url.pathname + url.search;
}

Object.entries(gameCardLinks).forEach(([id, gameKey]) => {
  const card = document.getElementById(id);
  if (!card) return;
  card.addEventListener("click", () => goToGamePage(gameKey));
});

const TEAM_PAGE = "team.html";
const isGamePage = Boolean(document.getElementById("tournament-game"));
const nav = document.getElementById("nav");

if (nav && !isGamePage) {
  const navGameKeys = ["roulette", "tournament", "guess"];
  const navItems = Array.from(nav.children);

  navItems.slice(0, 3).forEach((item, index) => {
    item.addEventListener("click", () => goToGamePage(navGameKeys[index]));
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
