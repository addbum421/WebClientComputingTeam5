const form = document.querySelector("#foodForm");
const message = document.querySelector("#formMessage");
const menuChoice = document.querySelector("#menuChoice");
const fallbackFieldset = document.querySelector("#fallbackFieldset");
const customFieldset = document.querySelector("#customFieldset");
const customFields = document.querySelector("#customFields");
const selectedMenuName = document.querySelector("#selectedMenuName");
const gameSource = document.querySelector("#gameSource");

const menuForms = {
  tteokbokki: {
    label: "떡볶이",
    recipeUrl: "recipe.html",
    fields: [
      {
        id: "spicyLevel",
        label: "맵기 단계",
        options: ["순한맛", "보통맛", "매운맛", "아주 매운맛"],
      },
      {
        id: "saltyLevel",
        label: "짠 정도",
        options: ["싱겁게", "보통", "짭짤하게"],
      },
      {
        id: "tteokType",
        label: "떡 종류",
        options: ["밀떡", "쌀떡", "상관없음"],
      },
    ],
  },
  kimchiFriedRice: {
    label: "김치볶음밥",
    recipeUrl: "recipe.html",
    fields: [
      {
        id: "spicyLevel",
        label: "맵기 단계",
        options: ["순한맛", "보통맛", "매운맛"],
      },
      {
        id: "topping",
        label: "토핑",
        options: ["고기", "햄", "둘 다"],
      },
      {
        id: "eggStyle",
        label: "계란",
        options: ["없음", "반숙 계란", "완숙 계란"],
      },
    ],
  },
  dakbokkeumtang: {
    label: "닭볶음탕",
    recipeUrl: "recipe.html",
    fields: [
      {
        id: "spicyLevel",
        label: "맵기 단계",
        options: ["순한맛", "보통맛", "매운맛"],
      },
      {
        id: "saltyLevel",
        label: "짠 정도",
        options: ["싱겁게", "보통", "짭짤하게"],
      },
      {
        id: "rootVegetable",
        label: "구황작물",
        options: ["감자", "고구마", "둘 다"],
      },
    ],
  },
  shabuShabu: {
    label: "샤브샤브",
    recipeUrl: "recipe.html",
    fields: [
      {
        id: "saltyLevel",
        label: "짠 정도",
        options: ["싱겁게", "보통", "짭짤하게"],
      },
      {
        id: "brothType",
        label: "육수 종류",
        options: ["맑은 육수", "얼큰 육수", "반반 육수"],
      },
      {
        id: "finishMeal",
        label: "마무리 식사",
        options: ["칼국수", "죽", "둘 다"],
      },
    ],
  },
  doenjangStew: {
    label: "된장찌개",
    recipeUrl: "recipe.html",
    fields: [
      {
        id: "salinity",
        label: "염도",
        options: ["낮게", "보통", "높게"],
      },
      {
        id: "mainIngredient",
        label: "주재료",
        options: ["소고기", "바지락", "두부"],
      },
      {
        id: "spicyPepper",
        label: "고추",
        options: ["빼기", "조금", "넉넉하게"],
      },
    ],
  },
  kimchiStew: {
    label: "김치찌개",
    recipeUrl: "recipe.html",
    fields: [
      {
        id: "spicyLevel",
        label: "맵기 단계",
        options: ["순한맛", "보통맛", "매운맛"],
      },
      {
        id: "salinity",
        label: "염도",
        options: ["낮게", "보통", "높게"],
      },
      {
        id: "mainProtein",
        label: "주재료",
        options: ["돼지고기", "참치", "스팸"],
      },
    ],
  },
  seaweedSoup: {
    label: "미역국",
    recipeUrl: "recipe.html",
    fields: [
      {
        id: "salinity",
        label: "염도",
        options: ["낮게", "보통", "높게"],
      },
      {
        id: "soupType",
        label: "미역국 종류",
        options: ["조개 미역국", "고기 미역국"],
      },
      {
        id: "soupAmount",
        label: "국물 양",
        options: ["자작하게", "보통", "넉넉하게"],
      },
    ],
  },
  aglioOlio: {
    label: "알리오올리오 파스타",
    recipeUrl: "recipe.html",
    fields: [
      {
        id: "spicyIngredient",
        label: "매운 재료",
        options: ["페퍼론치노", "고춧가루", "둘 다", "없음"],
      },
      {
        id: "herbIngredient",
        label: "향 재료",
        options: ["파슬리", "대파", "둘 다", "없음"],
      },
      {
        id: "extraIngredient",
        label: "추가 재료",
        options: ["베이컨", "새우", "버섯", "없음"],
      },
    ],
  },
};

const sourceLabels = {
  roulette: "룰렛 돌리기",
  tournament: "토너먼트",
  fortune: "포춘쿠키",
  guess: "음식 맞추기",
};

if (!form) {
  // form.html 이 아닌 페이지에서는 실행하지 않음
} else {
  const params = new URLSearchParams(window.location.search);
  const initialMenu = params.get("menu");
  const source = params.get("source");

  function renderCustomFields(menuKey) {
    const menu = menuForms[menuKey];

    if (!menu) {
      selectedMenuName.textContent = "메뉴를 선택해주세요";
      customFields.innerHTML = "";
      customFieldset.hidden = true;
      return;
    }

    selectedMenuName.textContent = menu.label;
    customFieldset.hidden = false;
    customFields.innerHTML = menu.fields
      .map((field) => {
        const options = field.options
          .map((option) => `<option value="${option}">${option}</option>`)
          .join("");

        return `
      <label for="${field.id}">${field.label}</label>
      <select id="${field.id}" name="${field.id}" required>
        <option value="">선택하세요</option>
        ${options}
      </select>
    `;
      })
      .join("");
  }

  function getSelectedOptions(menuKey) {
    const menu = menuForms[menuKey];
    const data = new FormData(form);

    return menu.fields.map((field) => ({
      id: field.id,
      label: field.label,
      value: data.get(field.id),
    }));
  }

  function validate(menuKey) {
    if (!menuForms[menuKey]) {
      return "추천받은 메뉴를 선택해주세요.";
    }

    const hasEmptyOption = getSelectedOptions(menuKey).some(
      (option) => !option.value,
    );

    if (hasEmptyOption) {
      return "메뉴별 세부 선택을 모두 입력해주세요.";
    }

    return "";
  }

  function goToRecipe(menuKey) {
    const menu = menuForms[menuKey];
    const foodKey = menuKeyToFoodKey[menuKey];
    const recipeParams = new URLSearchParams();

    if (foodKey) {
      recipeParams.set("food", foodKey);
    }

    recipeParams.set("menu", menuKey);

    if (source) {
      recipeParams.set("source", source);
    }

    getSelectedOptions(menuKey).forEach((option) => {
      recipeParams.set(option.id, option.value);
    });

    window.location.href = `${menu.recipeUrl}?${recipeParams.toString()}`;
  }

  if (sourceLabels[source]) {
    gameSource.textContent = `${sourceLabels[source]}에서 추천됨`;
  }

  if (menuForms[initialMenu]) {
    menuChoice.value = initialMenu;
    fallbackFieldset.hidden = true;
  }

  renderCustomFields(menuChoice.value);

  menuChoice.addEventListener("change", (event) => {
    message.textContent = "";
    renderCustomFields(event.target.value);
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const selectedMenu = menuChoice.value;
    const error = validate(selectedMenu);

    if (error) {
      message.textContent = error;
      return;
    }

    message.textContent = "";
    goToRecipe(selectedMenu);
  });
}
