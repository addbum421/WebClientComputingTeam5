const gameNav = document.getElementById("tournament-game")
  ? document.getElementById("nav")
  : null;

const gamePanels = {
  roulette: document.getElementById("roulette-game"),
  tournament: document.getElementById("tournament-game"),
  guess: document.getElementById("guess-game"),
};

const gameLabels = {
  roulette: "룰렛 게임",
  tournament: "토너먼트 게임",
  guess: "음식 맞추기 게임",
};

const DEFAULT_GAME = "tournament";

function showGame(gameKey) {
  const activeKey = gamePanels[gameKey] ? gameKey : DEFAULT_GAME;

  Object.entries(gamePanels).forEach(([key, panel]) => {
    if (!panel) return;
    panel.classList.toggle("is-active", key === activeKey);
  });
}

function getGameKeyFromUrl() {
  const gameParam = new URLSearchParams(window.location.search).get("game");
  return gamePanels[gameParam] ? gameParam : DEFAULT_GAME;
}

if (gameNav) {
  Array.from(gameNav.children).forEach((item) => {
    item.addEventListener("click", () => {
      const gameKey = item.dataset.game;

      if (gameKey === "team") {
        window.location.href = "team.html";
        return;
      }

      if (gamePanels[gameKey]) {
        showGame(gameKey);

        const nextUrl = new URL(window.location.href);
        nextUrl.searchParams.set("game", gameKey);
        window.history.replaceState(null, "", nextUrl);
      }
    });
  });
}

showGame(getGameKeyFromUrl());
