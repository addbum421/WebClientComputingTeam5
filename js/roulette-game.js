const rouletteMenus = [
  { name: "김치볶음밥", key: "kimchiFriedRice", emoji: "🍚" },
  { name: "김치찌개", key: "kimchiStew", emoji: "🍲" },
  { name: "닭볶음탕", key: "dakbokkeumtang", emoji: "🍗" },
  { name: "된장찌개", key: "doenjangStew", emoji: "🥘" },
  { name: "떡볶이", key: "tteokbokki", emoji: "🌶️" },
  { name: "미역국", key: "seaweedSoup", emoji: "🥣" },
  { name: "샤브샤브", key: "shabuShabu", emoji: "🫕" },
  { name: "알리오올리오", key: "aglioOlio", emoji: "🍝" },
];

const rouletteWheel = document.getElementById("roulette-wheel");
const rouletteSpinBtn = document.getElementById("roulette-spin-btn");
const rouletteResult = document.getElementById("roulette-result");
const rouletteFormLink = document.getElementById("roulette-form-link");

const SEGMENT_DEG = 360 / rouletteMenus.length;
let isSpinning = false;
let selectedMenu = null;

function buildDividers() {
  return Array.from({ length: rouletteMenus.length }, (_, index) => {
    const dividerAngle = index * SEGMENT_DEG;
    return `<div class="roulette-divider" style="--divider-angle: ${dividerAngle}deg"></div>`;
  }).join("");
}

function buildLabels() {
  return rouletteMenus
    .map((menu, index) => {
      const labelAngle = index * SEGMENT_DEG + SEGMENT_DEG / 2;

      return `
      <div class="roulette-label" style="--label-angle: ${labelAngle}deg">
        <div class="roulette-label-text">
          <span class="roulette-emoji">${menu.emoji}</span>
          <span class="roulette-name">${menu.name}</span>
        </div>
      </div>
    `;
    })
    .join("");
}

function buildRouletteWheel() {
  if (!rouletteWheel) return;

  rouletteWheel.innerHTML = `
    <div class="roulette-face" aria-hidden="true"></div>
    ${buildDividers()}
    ${buildLabels()}
  `;
}

function spinRoulette() {
  if (!rouletteWheel || !rouletteSpinBtn || isSpinning) return;

  isSpinning = true;
  rouletteSpinBtn.disabled = true;
  rouletteFormLink.classList.add("hidden");

  const winIndex = Math.floor(Math.random() * rouletteMenus.length);
  selectedMenu = rouletteMenus[winIndex];

  const extraSpins = 360 * (4 + Math.floor(Math.random() * 3));
  const targetAngle =
    extraSpins + (360 - winIndex * SEGMENT_DEG - SEGMENT_DEG / 2);

  rouletteWheel.style.transform = `rotate(${targetAngle}deg)`;

  window.setTimeout(() => {
    isSpinning = false;
    rouletteSpinBtn.disabled = false;
    rouletteResult.textContent = `오늘의 메뉴: ${selectedMenu.emoji} ${selectedMenu.name}`;
    rouletteFormLink.href = `form.html?menu=${selectedMenu.key}&source=roulette`;
    rouletteFormLink.classList.remove("hidden");
  }, 4000);
}

buildRouletteWheel();

if (rouletteSpinBtn) {
  rouletteSpinBtn.addEventListener("click", spinRoulette);
}
