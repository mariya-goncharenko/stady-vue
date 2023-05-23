var navHeaderTop = new Vue({
  el: "#popular",
  data: {
    supplements: [
      { name: "Предметы для ухода", id: "1" },
      { name: "Средства для дезинфекции", id: "2" },
      { name: "Ароматерапия", id: "3" },
      { name: "Бумажно-ватная продукция", id: "4" },
      { name: "Гигиена", id: "5" },
      { name: "Дезодоранты", id: "6" },
      { name: "Женская гигиена", id: "7" },
      { name: "Репелленты", id: "8" },
      { name: "Солнцезащитные средства", id: "9" },
    ],
    cosmetics: [
      { name: "Предметы для ухода", id: "1" },
      { name: "Средства для дезинфекции", id: "2" },
      { name: "Ароматерапия", id: "3" },
      { name: "Бумажно-ватная продукция", id: "4" },
      { name: "Гигиена", id: "5" },
      { name: "Дезодоранты", id: "6" },
      { name: "Женская гигиена", id: "7" },
      { name: "Репелленты", id: "8" },
      { name: "Солнцезащитные средства", id: "9" },
    ],
    hygiene: [
      { name: "Предметы для ухода", id: "1" },
      { name: "Средства для дезинфекции", id: "2" },
      { name: "Ароматерапия", id: "3" },
      { name: "Бумажно-ватная продукция", id: "4" },
      { name: "Гигиена", id: "5" },
      { name: "Дезодоранты", id: "6" },
      { name: "Женская гигиена", id: "7" },
      { name: "Репелленты", id: "8" },
      { name: "Солнцезащитные средства", id: "9" },
    ],
    diagnostics: [
      { name: "Предметы для ухода", id: "1" },
      { name: "Средства для дезинфекции", id: "2" },
      { name: "Ароматерапия", id: "3" },
      { name: "Бумажно-ватная продукция", id: "4" },
      { name: "Гигиена", id: "5" },
      { name: "Дезодоранты", id: "6" },
      { name: "Женская гигиена", id: "7" },
      { name: "Репелленты", id: "8" },
      { name: "Солнцезащитные средства", id: "9" },
    ],
  },
});

var actions = new Vue({
  el: "#action",
  data: { actions: [
    {
      name: "Вкусный микс",
      data: "с 1 октября по 30 ноября 2021 года",
      img: '../img/action_1.jpg',
    },
    {
      name: "Окувайт Макс и Визлея",
      data: "с 1 октября по 30 ноября 2021 года",
      img: "/img/action_2.png",
    },
    {
      name: "Скидка 40% на LightWeight",
      data: "с 1 октября по 30 ноября 2021 года",
      img: "/img/action_3.jpg",
    },
    {
      name: "Скидка 20% на зубную пасту Zero White",
      data: "с 1 октября по 30 ноября 2021 года",
      img: "/img/action_4.jpg",
    }, 
  ],
}
});

var cards = new Vue({
  el: "#recommendations",
  data: { cards: [
    {
      name: "Аквалор Беби, капли назальные с рождения, 15мл",
      provider: "Производитель: ИС ЛАБ",
      country:"Страна производства: ФРАНЦИЯ",
      img: '../img/card.jpg',
      price: "2 262 руб."
    },
    {
      name: "Аквалор Беби, капли назальные с рождения, 15мл",
      provider: "Производитель: ИС ЛАБ",
      country:"Страна производства: ФРАНЦИЯ",
      img: '../img/card.jpg',
      price: "2 262 руб."
    },
    {
      name: "Аквалор Беби, капли назальные с рождения, 15мл",
      provider: "Производитель: ИС ЛАБ",
      country:"Страна производства: ФРАНЦИЯ",
      img: '../img/card.jpg',
      price: "2 262 руб."
    },
    {
      name: "Аквалор Беби, капли назальные с рождения, 15мл",
      provider: "Производитель: ИС ЛАБ",
      country:"Страна производства: ФРАНЦИЯ",
      img: '../img/card.jpg',
      price: "2 262 руб."
    },
    {
      name: "Аквалор Беби, капли назальные с рождения, 15мл",
      provider: "Производитель: ИС ЛАБ",
      country:"Страна производства: ФРАНЦИЯ",
      img: '../img/card.jpg',
      price: "2 262 руб."
    },
  ],
}
});

var shelves = new Vue({
  el: "#shelves",
  data: { cards: [
    {
      name: "Аквалор Беби, капли назальные с рождения, 15мл",
      provider: "Производитель: ИС ЛАБ",
      country:"Страна производства: ФРАНЦИЯ",
      img: '../img/card.jpg',
      price: "2 262 руб."
    },
    {
      name: "Аквалор Беби, капли назальные с рождения, 15мл",
      provider: "Производитель: ИС ЛАБ",
      country:"Страна производства: ФРАНЦИЯ",
      img: '../img/card.jpg',
      price: "2 262 руб."
    },
    {
      name: "Аквалор Беби, капли назальные с рождения, 15мл",
      provider: "Производитель: ИС ЛАБ",
      country:"Страна производства: ФРАНЦИЯ",
      img: '../img/card.jpg',
      price: "2 262 руб."
    },
    {
      name: "Аквалор Беби, капли назальные с рождения, 15мл",
      provider: "Производитель: ИС ЛАБ",
      country:"Страна производства: ФРАНЦИЯ",
      img: '../img/card.jpg',
      price: "2 262 руб."
    },
    {
      name: "Аквалор Беби, капли назальные с рождения, 15мл",
      provider: "Производитель: ИС ЛАБ",
      country:"Страна производства: ФРАНЦИЯ",
      img: '../img/card.jpg',
      price: "2 262 руб."
    },
  ],
}
});
