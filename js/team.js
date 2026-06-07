const recommend = [
  { worker: "eunseo", reco_src: "", reco_url: "", reco_comment: "" },
  {
    worker: "juho",
    reco_src: "./assets/image/menu/알리오올리오.png",
    reco_url: "",
    reco_comment: "좋아하는 요리: 알리오올리오 파스타",
  },
  {
    worker: "bumik",
    reco_src: "./assets/image/menu/김치찌개.png",
    reco_url:
      "recipe.html?food=KIMCHI_JJIGAE&menu=kimchiStew&source=recommend&spicyLevel=보통맛&salinity=보통&mainProtein=참치",
    reco_comment: "좋아하는 요리: 김치찌개",
  },
  { worker: "gayoung", reco_src: "", reco_url: "", reco_comment: "" },
  { worker: "eunbyul", reco_src: "", reco_url: "", reco_comment: "" },
];

recommend.forEach(({ worker, reco_src, reco_url, reco_comment }) => {
  const card = document.getElementById(worker);
  if (!card || !reco_src) return;

  card.classList.add("has-reco");

  const wrap = card.querySelector(".team-worker-photo-wrap");
  const overlay = document.createElement("div");
  overlay.className = "team-worker-reco-overlay";
  overlay.style.backgroundImage = `url(${reco_src})`;
  overlay.setAttribute("aria-hidden", "true");
  wrap.appendChild(overlay);

  const recoText = document.createElement("p");
  recoText.className = "team-worker-reco-text";
  recoText.textContent = reco_comment;
  card.querySelector(".team-worker-introduce").appendChild(recoText);

  card.addEventListener("mouseenter", () => {
    card.classList.add("is-reco-active");
  });

  card.addEventListener("mouseleave", () => {
    card.classList.remove("is-reco-active");
  });

  if (reco_url) {
    card.classList.add("is-clickable");
    card.setAttribute("role", "button");
    card.setAttribute("tabindex", "0");
    card.addEventListener("click", () => {
      window.location.href = reco_url;
    });
    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        window.location.href = reco_url;
      }
    });
  }
});
