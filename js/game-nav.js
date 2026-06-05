const gameNav = document.getElementById("tournament-game")
  ? document.getElementById("nav")
  : null;

const gamePanels = {
  "룰렛 게임": document.getElementById("roulette-game"),
  "토너먼트 게임": document.getElementById("tournament-game"),
  "음식 맞추기 게임": document.getElementById("guess-game"),
};

const DEFAULT_GAME = "토너먼트 게임";

function showGame(label) {
  Object.entries(gamePanels).forEach(([name, panel]) => {
    if (!panel) return;
    panel.style.display = name === label ? "block" : "none";
  });
}

if (gameNav) {
  Array.from(gameNav.children).forEach((item) => {
    item.addEventListener("click", () => {
      const label = item.innerText.trim();

      if (label === "팀 소개") {
        window.location.href = "team.html";
        return;
      }

      if (gamePanels[label]) {
        showGame(label);
      }
    });
  });
}

showGame(DEFAULT_GAME);
