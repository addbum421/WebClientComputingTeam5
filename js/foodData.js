// =============================================
//  음식 데이터 (fetch 없이 JS 변수로 관리)
//  새 음식 추가 시 여기에만 추가하면 됨!
// =============================================

const menuKeyToFoodKey = {
  tteokbokki: "TTEOKBOKKI",
  kimchiFriedRice: "KIMCHI_RICE",
  dakbokkeumtang: "DAK_BOKKEUM",
  shabuShabu: "SHABU",
  doenjangStew: "DOENJANG",
  kimchiStew: "KIMCHI_JJIGAE",
  seaweedSoup: "MIYEOK",
  aglioOlio: "AGLIO_OLIO",
};

const foodList = {

  TTEOKBOKKI: {
    name: "떡볶이",
    emoji: "🌶️",
    src: "images/tteokbokki.jpg",
    category: "한식 · 분식",
    description: "너무 간단한데 맛있어서 놀라는 백종원 분식점 떡볶이! 고추장과 고추가루를 함께 써서 색도 예쁘고 맛도 깊어요.",
    time: "15분",
    difficulty: "★☆☆",
    diffLabel: "쉬움",
    ingredients: [
      { name: "떡볶이떡", amount: 1,    unit: "컵" },
      { name: "물",       amount: 1,    unit: "컵" },
      { name: "대파",     amount: 0.25, unit: "대" },
      { name: "통깨",     amount: 1,    unit: "약간" },
      { name: "고추장",   amount: 1,    unit: "큰술" },
      { name: "고추가루", amount: 0.75, unit: "큰술" },
      { name: "간장",     amount: 1,    unit: "큰술" },
      { name: "설탕",     amount: 1.5,  unit: "큰술" }
    ],
    steps: [
      { title: "떡 끓이기", text: "물 1컵에 떡볶이떡을 넣고 센불에서 팔팔 끓여주세요. 냉동 떡이라면 미리 물에 잠깐 담궈두었다가 사용해주세요.", time: null },
      { title: "양념 넣기", text: "물이 끓으면 양념(고추장, 고추가루, 간장, 설탕)을 모두 넣어준 뒤 잘 풀어주고 자글자글 끓여주세요. 양념을 미리 섞어두면 더 편해요.", time: null },
      { title: "마무리", text: "국물이 졸아들면 대파를 가위로 쫑쫑 썰어 넣어주시고 통깨를 약간 뿌려주세요. 완성! 🎉", time: null }
    ],
    tips: [
      { icon: "💡", title: "냉동 떡은 미리 불려주세요!", text: "냉동 떡이라면 물에 잠깐 담궈두었다가 사용하면 훨씬 부드러워요." },
      { icon: "🍬", title: "단맛 조절!", text: "평소 단맛을 싫어하시면 설탕을 약간 줄여주세요." },
      { icon: "🐟", title: "어묵 추가!", text: "기호에 따라 어묵을 약간 넣어주시면 더 든든해요." }
    ],
    related: ["KIMCHI_RICE", "DOENJANG", "KIMCHI_JJIGAE"]
  },

  KIMCHI_RICE: {
    name: "김치볶음밥",
    emoji: "🍳",
    src: "images/kimchi_rice.jpg",
    category: "한식 · 볶음",
    description: "전혀 새로운 맛의 김치볶음밥! 마요네즈와 된장이 들어가 깊고 고소한 맛이 나는 특별한 레시피예요.",
    time: "10분",
    difficulty: "★☆☆",
    diffLabel: "쉬움",
    ingredients: [
      { name: "김치",     amount: 0.5,  unit: "컵" },
      { name: "밥",       amount: 1,    unit: "공기 (햇반 210g)" },
      { name: "식용유",   amount: 1.5,  unit: "스푼" },
      { name: "설탕",     amount: 0.5,  unit: "스푼" },
      { name: "진간장",   amount: 0.5,  unit: "스푼" },
      { name: "고추가루", amount: 0.5,  unit: "스푼" },
      { name: "참기름",   amount: 1,    unit: "스푼" },
      { name: "마요네즈", amount: 0.5,  unit: "스푼" },
      { name: "된장",     amount: 0.17, unit: "스푼" },
      { name: "파",       amount: 1,    unit: "큰술" },
      { name: "계란",     amount: 1,    unit: "개" }
    ],
    steps: [
      { title: "김치 썰기", text: "김치 0.5컵을 잘게 썰어주세요. 새김치보다 살짝 익은 김치가 더 맛있어요.", time: null },
      { title: "양념에 버무려 볶기", text: "김치에 모든 양념(설탕, 진간장, 고추가루, 참기름, 마요네즈, 된장, 파)을 넣고 잘 비벼주세요. 식용유를 두른 달군 팬에 재료를 고루 펴서 부어주고 뚜껑을 덮어 1분간 그대로 두세요.", time: "1분" },
      { title: "밥 넣기", text: "뚜껑을 열고 수분이 거의 남지 않는 꾸덕한 상태인지 확인해주세요. 수분이 많으면 1분 더 볶아주시고, 날아간 상태라면 밥 1공기를 넣고 볶아주세요.", time: null },
      { title: "밥 펴서 굽기", text: "흰밥이 보이지 않을 정도로 고루 섞어준 다음 팬에 골고루 펴고 뚜껑을 덮어 센불에 20~30초간 두세요.", time: "30초" },
      { title: "계란후라이", text: "별도 팬에 식용유를 살짝 두르고 계란을 깨서 반숙으로 익혀주세요. 볶음밥 위에 올려주세요.", time: "2분" },
      { title: "완성", text: "계란후라이를 올린 김치볶음밥 완성! 🎉", time: null }
    ],
    tips: [
      { icon: "💡", title: "살짝 익은 김치를 사용해주세요!", text: "새김치는 수분이 많아 볶음밥이 질어져요. 살짝 익은 김치를 써야 꾸덕하게 잘 볶아져요." },
      { icon: "🥢", title: "깍두기도 OK!", text: "살짝 익은 깍두기를 잘게 다져서 써도 맛있어요." },
      { icon: "🔥", title: "마지막에 센불!", text: "밥을 펴고 뚜껑 덮어 센불에 20~30초 두면 누룽지 느낌이 나서 더 맛있어요." }
    ],
    related: ["TTEOKBOKKI", "KIMCHI_JJIGAE", "DOENJANG"]
  },

  DAK_BOKKEUM: {
    name: "닭볶음탕",
    emoji: "🍗",
    src: "images/dak_bokkeum.jpg",
    category: "한식 · 찜·탕",
    description: "맛집 닭볶음탕 거의 흡사한 맛! 자취생은 닭 반 마리로 도전해보세요. 당면 넣으면 더 든든해요.",
    time: "60분",
    difficulty: "★★☆",
    diffLabel: "보통",
    ingredients: [
      { name: "닭",          amount: 0.5, unit: "마리 (자취생 기준)" },
      { name: "감자",        amount: 1,   unit: "개" },
      { name: "당근",        amount: 0.25, unit: "쪽" },
      { name: "양파",        amount: 0.5, unit: "개" },
      { name: "고추",        amount: 1,   unit: "개" },
      { name: "대파",        amount: 0.5, unit: "대" },
      { name: "다진마늘",    amount: 2,   unit: "쪽" },
      { name: "우유",        amount: 100, unit: "ml (잡내 제거용)" },
      { name: "간장",        amount: 5,   unit: "큰술" },
      { name: "고추장",      amount: 2,   unit: "큰술" },
      { name: "고춧가루",    amount: 1,   unit: "큰술" },
      { name: "요리당",      amount: 3,   unit: "큰술" },
      { name: "청주",        amount: 0.5, unit: "큰술" },
      { name: "액젓",        amount: 0.5, unit: "큰술" },
      { name: "물",          amount: 400, unit: "ml" },
      { name: "당면 (선택)", amount: 1,   unit: "약간" },
      { name: "참기름",      amount: 1,   unit: "약간" },
      { name: "후추",        amount: 1,   unit: "약간" }
    ],
    steps: [
      { title: "닭 손질", text: "닭을 깨끗이 씻고 사이사이 붙어있는 기름을 제거해주세요. 잡내 제거를 위해 우유 100ml에 30분 정도 담가두세요.", time: "30분" },
      { title: "닭 데치기", text: "우유에서 꺼낸 닭을 한번 후루룩 끓여준 뒤 차가운 물로 헹궈주세요. 이 과정이 국물 맛을 깊게 해줘요.", time: "5분" },
      { title: "양념장 만들기", text: "간장, 고추장, 고춧가루, 요리당, 다진마늘, 청주, 액젓, 후추를 섞어 양념장을 만들어주세요. 액젓을 넣으면 감칠맛이 살아나요!", time: null },
      { title: "닭에 양념 넣고 끓이기", text: "냄비에 손질한 닭을 넣고 양념장과 물 400ml를 부어 한소끔 끓여주세요.", time: "5분" },
      { title: "감자 넣고 졸이기", text: "끓으면 감자를 넣고 뚜껑 덮어 중불에서 30분 끓여주세요. 감자는 모서리를 깎아서 넣어야 국물이 탁해지지 않아요.", time: "30분" },
      { title: "나머지 채소 넣기", text: "대파, 양파, 당근, 고추를 적당한 크기로 잘라 넣고 한번 더 끓여주세요.", time: "5분" },
      { title: "당면 & 마무리", text: "미리 불려둔 당면을 살짝 삶아 넣고 참기름을 살짝 두르면 완성! 🎉 당면은 안 넣어도 괜찮아요.", time: null }
    ],
    tips: [
      { icon: "🥛", title: "우유에 재우면 잡내가 없어요!", text: "닭을 우유에 30분 담가두면 잡내가 없어지고 훨씬 맛있어져요." },
      { icon: "🥔", title: "감자 모서리를 깎아주세요!", text: "감자 모서리를 깎아서 넣어야 으깨지지 않고 국물도 탁해지지 않아요." },
      { icon: "💧", title: "국물 양 조절!", text: "당면 넣을 때는 물 600ml, 안 넣을 때는 400ml가 적당해요." }
    ],
    related: ["KIMCHI_JJIGAE", "DOENJANG", "KIMCHI_RICE"]
  },

  SHABU: {
    name: "샤브샤브",
    emoji: "🍲",
    src: "images/shabu.jpg",
    category: "한식 · 전골",
    description: "가쓰오부시 장국으로 만드는 간단 샤브샤브! 마지막에 계란죽까지 해먹으면 완벽한 한 끼예요.",
    time: "25분",
    difficulty: "★☆☆",
    diffLabel: "쉬움",
    ingredients: [
      { name: "업진살 소고기 (샤브용)",    amount: 200, unit: "g" },
      { name: "청경채",                    amount: 0.5, unit: "봉지" },
      { name: "숙주",                      amount: 0.5, unit: "봉지" },
      { name: "배추",                      amount: 0.5, unit: "봉지" },
      { name: "국수장국가쓰오부시",        amount: 60,  unit: "ml" },
      { name: "물",                        amount: 1,   unit: "적당량" },
      { name: "밥 (마무리 죽용, 선택)",    amount: 1,   unit: "공기" },
      { name: "계란 (마무리 죽용, 선택)",  amount: 1,   unit: "개" },
      { name: "김가루 (마무리 죽용, 선택)", amount: 1,  unit: "약간" }
    ],
    steps: [
      { title: "육수 준비", text: "냄비에 물을 넣고 가쓰오부시 장국 60ml를 부은 후 끓여주세요. 시판 장국을 쓰면 간편하게 샤브샤브 육수가 완성돼요!", time: "5분" },
      { title: "채소 준비", text: "청경채와 숙주나물을 깨끗이 씻어 준비해주세요. 배추도 먹기 좋게 뜯어두세요.", time: null },
      { title: "채소 넣기", text: "육수가 끓으면 청경채와 숙주나물, 배추를 넣고 살짝 끓여주세요.", time: "2분" },
      { title: "고기 익히기", text: "고기를 넣어주세요. 고기가 익으면 야채와 함께 건져서 드세요!", time: null },
      { title: "마무리 계란죽 (선택)", text: "샤브샤브를 다 먹은 후 남은 육수에 밥을 넣고 끓이다가 계란을 깨서 넣어주세요. 마지막으로 김가루를 뿌리고 섞으면 완성! 🎉", time: null }
    ],
    tips: [
      { icon: "🛒", title: "장국은 시판으로!", text: "가쓰오부시 장국은 마트에서 쉽게 구할 수 있어요. 직접 육수 내는 것보다 훨씬 간편해요." },
      { icon: "🍖", title: "고기는 살짝만!", text: "얇은 고기는 육수에 담갔다 바로 빼서 드세요. 오래 두면 질겨져요." },
      { icon: "🍚", title: "마무리 계란죽 강추!", text: "남은 육수에 밥이랑 계란 넣고 끓이면 황금 마무리! 샤브샤브의 꽃이에요." }
    ],
    related: ["DOENJANG", "MIYEOK", "DAK_BOKKEUM"]
  },

  DOENJANG: {
    name: "된장찌개",
    emoji: "🫕",
    src: "images/doenjang.jpg",
    category: "한식 · 찌개",
    description: "뚝배기에 글글 끓인 든든한 된장찌개! 느타리버섯과 두부가 듬뿍 들어가 건강하고 맛있어요.",
    time: "20분",
    difficulty: "★☆☆",
    diffLabel: "쉬움",
    ingredients: [
      { name: "느타리버섯", amount: 1,    unit: "줌" },
      { name: "양파",       amount: 0.5,  unit: "개" },
      { name: "애호박",     amount: 0.25, unit: "개" },
      { name: "청양고추",   amount: 2,    unit: "개" },
      { name: "두부",       amount: 0.25, unit: "모" },
      { name: "물",         amount: 1.5,  unit: "종이컵" },
      { name: "된장",       amount: 2,    unit: "큰술" },
      { name: "진간장",     amount: 1,    unit: "큰술" },
      { name: "고추가루",   amount: 1.5,  unit: "큰술" },
      { name: "다진 마늘",  amount: 0.5,  unit: "큰술" },
      { name: "설탕",       amount: 0.5,  unit: "작은술" },
      { name: "소금",       amount: 1,    unit: "간맞추기" }
    ],
    steps: [
      { title: "육수 끓이기", text: "물 1.5종이컵에 된장, 고추가루, 다진 마늘, 설탕, 간장을 한데 넣고 한소끔 끓여주세요.", time: null },
      { title: "재료 썰기", text: "그사이 양파, 버섯, 애호박, 청양고추, 두부를 적당한 크기로 썰어주세요.", time: null },
      { title: "재료 넣기", text: "한소끔 끓은 된장물에 양파, 버섯, 애호박, 청양고추, 두부를 넣어주세요.", time: null },
      { title: "마무리", text: "애호박이 익을 때까지 끓여주세요. 간을 보아 부족하면 소금으로 맞춰주시면 완성! 🎉", time: null }
    ],
    tips: [
      { icon: "🍄", title: "버섯은 자유롭게!", text: "느타리버섯 대신 표고버섯, 팽이버섯 등 냉장고에 있는 버섯 아무거나 써도 돼요." },
      { icon: "🌶️", title: "청양고추로 칼칼하게!", text: "청양고추를 넣으면 칼칼한 맛이 살아나요. 매운 거 못 드시면 생략해도 OK!" },
      { icon: "🧂", title: "소금은 마지막에!", text: "된장과 간장이 들어가서 짤 수 있어요. 마지막에 간 보고 부족할 때만 소금을 추가해주세요." }
    ],
    related: ["KIMCHI_JJIGAE", "KIMCHI_RICE", "TTEOKBOKKI"]
  },

  KIMCHI_JJIGAE: {
    name: "김치찌개",
    emoji: "🍲",
    src: "images/kimchi_jjigae.jpg",
    category: "한식 · 찌개",
    description: "참치 캔 하나로 뚝딱! 20분이면 완성되는 자취생 김치찌개. 묵은 김치가 있으면 더 맛있어요.",
    time: "20분",
    difficulty: "★☆☆",
    diffLabel: "쉬움",
    ingredients: [
      { name: "김치",          amount: 100,  unit: "g" },
      { name: "참치",          amount: 0.5,  unit: "캔" },
      { name: "두부",          amount: 0.25, unit: "모" },
      { name: "대파",          amount: 1,    unit: "약간" },
      { name: "포도씨유",      amount: 0.5,  unit: "큰술" },
      { name: "고춧가루",      amount: 1,    unit: "약간" },
      { name: "다진 마늘",     amount: 0.5,  unit: "큰술" },
      { name: "설탕",          amount: 1,    unit: "약간" },
      { name: "물 (멸치육수)", amount: 300,  unit: "ml" }
    ],
    steps: [
      { title: "김치 볶기", text: "냄비에 포도씨유를 두르고 김치를 넣어 중불에서 볶아주세요. 설탕과 고춧가루를 넣으면 색이 예뻐지고 윤이 나요.", time: "3분" },
      { title: "마늘 추가", text: "볶는 중간에 다진 마늘을 넣어주세요.", time: null },
      { title: "물 붓고 끓이기", text: "물 또는 멸치육수 300ml를 붓고 참치를 넣어주세요. 강불로 끓여주세요.", time: "5분" },
      { title: "마무리", text: "끓어오르면 두부와 대파를 넣고 중불로 줄여 5분 더 끓여주시면 완성! 🎉", time: "5분" }
    ],
    tips: [
      { icon: "💡", title: "묵은 김치를 쓰면 더 맛있어요!", text: "신선한 김치보다 오래 익은 김치를 쓸수록 국물이 깊고 진해져요." },
      { icon: "🐟", title: "참치 기름도 같이!", text: "참치 캔의 기름도 같이 넣으면 국물이 더 고소해져요." },
      { icon: "🔥", title: "처음엔 강불!", text: "처음 끓일 때 강불로 확 끓여야 김치 신맛이 날아가고 맛이 살아나요." }
    ],
    related: ["DOENJANG", "KIMCHI_RICE", "DAK_BOKKEUM"]
  },

  MIYEOK: {
    name: "미역국",
    emoji: "🥣",
    src: "images/miyeok.jpg",
    category: "한식 · 국",
    description: "뽀얗고 진한 미역국! 소고기 없어도 OK. 미역을 참기름에 바짝 볶는 게 핵심이에요.",
    time: "30분",
    difficulty: "★☆☆",
    diffLabel: "쉬움",
    ingredients: [
      { name: "건미역 (말린 것)",     amount: 5,    unit: "g (1인분)" },
      { name: "소고기 국거리 (선택)", amount: 50,   unit: "g" },
      { name: "참기름",               amount: 1,    unit: "넉넉히" },
      { name: "다진마늘",             amount: 0.5,  unit: "큰술" },
      { name: "간장",                 amount: 0.5,  unit: "큰술" },
      { name: "된장",                 amount: 0.25, unit: "작은술" },
      { name: "소금",                 amount: 1,    unit: "간맞추기" },
      { name: "물",                   amount: 1,    unit: "적당량" }
    ],
    steps: [
      { title: "미역 불리기", text: "미역을 물에 담궈 불려주세요. 불린 미역은 가위로 잘게 잘라주세요.", time: "10~15분" },
      { title: "미역 볶기", text: "불린 미역을 냄비에 넣고 참기름을 넉넉히 두른 후 센불에서 볶아주세요. 미역이 냄비에 달라붙을 지경이 될 때까지 바짝 볶아주세요. 이게 포인트 1!", time: null },
      { title: "물 조금만 붓기", text: "볶아진 미역에 물을 미역이 잠기지 않을 정도로만 부어주고 다진마늘을 넣어 센불에 끓여주세요. 물을 적게 붓는 게 포인트 2! 잠깐만 끓여도 뽀얗게 나와요.", time: null },
      { title: "물 추가 & 간 맞추기", text: "물이 줄어들면 다시 물을 미역이 잠길만큼 부어주세요. 간장, 된장, 소금으로 간을 맞춰주세요.", time: null },
      { title: "마무리", text: "원하는 물 높이로 물을 넣고 센불에 끓여주시면 뽀얗고 진한 미역국 완성! 🎉", time: null }
    ],
    tips: [
      { icon: "🔥", title: "참기름에 바짝 볶는 게 핵심!", text: "미역이 냄비에 달라붙을 정도로 바짝 볶아야 국물이 뽀얗고 고소하게 나와요." },
      { icon: "💧", title: "물은 조금씩 부어주세요!", text: "처음엔 물을 적게 부어야 해요. 물이 적을수록 국물이 진하게 우러나와요." },
      { icon: "🦐", title: "재료 추가 가능!", text: "홍합이나 새우를 추가하면 더 풍성한 미역국을 즐길 수 있어요." }
    ],
    related: ["DOENJANG", "KIMCHI_JJIGAE", "SHABU"]
  },

  AGLIO_OLIO: {
    name: "알리오올리오 파스타",
    emoji: "🍝",
    src: "images/aglio_olio.jpg",
    category: "양식 · 파스타",
    description: "초간단 백종원 알리오올리오! 올리브유, 마늘, 면수만 있으면 맛집 파스타 완성이에요.",
    time: "20분",
    difficulty: "★★☆",
    diffLabel: "보통",
    ingredients: [
      { name: "스파게티면",        amount: 100, unit: "g (1인분)" },
      { name: "올리브유",          amount: 4,   unit: "큰술" },
      { name: "통마늘",            amount: 2,   unit: "개" },
      { name: "다진마늘",          amount: 0.5, unit: "큰술" },
      { name: "페페론치니",        amount: 1,   unit: "개" },
      { name: "소금 (면 삶는 용)", amount: 1,   unit: "큰술" },
      { name: "소금 (간 맞추기)",  amount: 1,   unit: "약간" },
      { name: "면수",              amount: 1,   unit: "국자" }
    ],
    steps: [
      { title: "재료 준비", text: "마늘은 얇게 편으로 썰어주세요. 페페론치니는 2~3조각으로 손으로 부숴서 씨까지 함께 준비해주세요. 이 고추는 굉장히 매우니 취향에 맞게 양을 조절해주세요.", time: null },
      { title: "면 삶기", text: "물을 팔팔 끓여주세요. 소금 1큰술을 넣은 다음 파스타면을 넣어주시고 7~8분 정도 중불에서 익혀주세요. 익히면 채반에 걸쳐주세요. 면수는 꼭 1국자 남겨두세요!", time: "7~8분" },
      { title: "마늘 볶기", text: "면을 익히는 동안 팬에 올리브유, 다진마늘, 편썬 마늘, 페페론치니를 전부 넣고 중불에서 달달달 볶아주세요.", time: null },
      { title: "마늘 익히기", text: "마늘이 어느 정도 익으면 약불로 줄여주세요. 마늘이 타지 않는 선에서 잘 익었으면 잠시 불을 꺼두세요.", time: null },
      { title: "면과 면수 넣기", text: "삶아진 파스타면을 바로 건져내서 팬에 넣어주시고 면수 1국자를 넣어주세요. 중불에서 달달 한번 더 볶아주시고 소금으로 간을 맞춰주시면 완성! 🎉", time: "2분" }
    ],
    tips: [
      { icon: "🧄", title: "마늘 절대 태우지 마세요!", text: "마늘이 타면 쓴맛이 나요. 약불에서 천천히 볶아주시고 노릇한 색이 되면 바로 불을 꺼두세요." },
      { icon: "💧", title: "면수가 오늘의 포인트!", text: "면수 1국자를 넣어야 올리브유가 유화되면서 소스가 만들어져요. 절대 버리지 마세요!" },
      { icon: "🌶️", title: "페페론치니 매운맛 주의!", text: "씨까지 넣으면 굉장히 매워요. 매운 거 못 드시면 씨를 제거하거나 개수를 줄여주세요." }
    ],
    related: ["KIMCHI_RICE", "TTEOKBOKKI", "SHABU"]
  }

};
