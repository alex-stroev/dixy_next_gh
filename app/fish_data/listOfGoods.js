const listOfGoods = [
  {
    name: "Товар 1",
    category: "фреш",
    brand: "амели",
    gold_code: 187155,
    img: "/images/amelie.jpg",
  },
  {
    name: "Товар 2",
    category: "фреш",
    brand: "хуторок",
    gold_code: 93874,
    img: "/images/hutorok.jpg",
  },
  {
    name: "Товар 3",
    category: "бакалея",
    brand: "мореслав",
    gold_code: 261850,
    img: "/images/moreslav.jpg",
  },
  {
    name: "Товар 4",
    category: "фреш",
    brand: "амели",
    gold_code: 191578,
    img: "/images/amelie.jpg",
  },
  {
    name: "Товар 5",
    category: "фреш",
    brand: "хуторок",
    gold_code: 45535,
    img: "/images/hutorok.jpg",
  },
  {
    name: "Товар 6",
    category: "фреш",
    brand: "хуторок",
    gold_code: 201930,
    img: "/images/hutorok.jpg",
  },
  {
    name: "Товар 7",
    category: "фреш",
    brand: "амели",
    gold_code: 97463,
    img: "/images/amelie.jpg",
  },
  {
    name: "Товар 8",
    category: "фреш",
    brand: "амели",
    gold_code: 222089,
    img: "/images/amelie.jpg",
  },
  {
    name: "Товар 9",
    category: "фреш",
    brand: "хуторок",
    gold_code: 299574,
    img: "/images/hutorok.jpg",
  },
  {
    name: "Товар 10",
    category: "фреш",
    brand: "амели",
    gold_code: 154926,
    img: "/images/amelie.jpg",
  },
  {
    name: "Товар 11",
    category: "фреш",
    brand: "круглое лето",
    gold_code: 144551,
    img: "/images/leto.jpg",
  },
  {
    name: "Товар 12",
    category: "бакалея",
    brand: "мореслав",
    gold_code: 75760,
    img: "/images/moreslav.jpg",
  },
  {
    name: "Товар 13",
    category: "фреш",
    brand: "амели",
    gold_code: 181568,
    img: "/images/amelie.jpg",
  },
  {
    name: "Товар 14",
    category: "бакалея",
    brand: "мореслав",
    gold_code: 184369,
    img: "/images/moreslav.jpg",
  },
  {
    name: "Товар 15",
    category: "бакалея",
    brand: "хуторок",
    gold_code: 1423,
    img: "/images/hutorok.jpg",
  },
  {
    name: "Товар 16",
    category: "фреш",
    brand: "круглое лето",
    gold_code: 170945,
    img: "/images/leto.jpg",
  },
  {
    name: "Товар 17",
    category: "бакалея",
    brand: "мореслав",
    gold_code: 13996,
    img: "/images/moreslav.jpg",
  },
  {
    name: "Товар 18",
    category: "бакалея",
    brand: "амели",
    gold_code: 71927,
    img: "/images/amelie.jpg",
  },
  {
    name: "Товар 19",
    category: "фреш",
    brand: "хуторок",
    gold_code: 297305,
    img: "/images/hutorok.jpg",
  },
  {
    name: "Товар 20",
    category: "бакалея",
    brand: "амели",
    gold_code: 101996,
    img: "/images/amelie.jpg",
  },
  {
    name: "Товар 21",
    category: "бакалея",
    brand: "круглое лето",
    gold_code: 77209,
    img: "/images/leto.jpg",
  },
  {
    name: "Товар 22",
    category: "фреш",
    brand: "круглое лето",
    gold_code: 211424,
    img: "/images/leto.jpg",
  },
  {
    name: "Товар 23",
    category: "фреш",
    brand: "амели",
    gold_code: 133325,
    img: "/images/amelie.jpg",
  },
  {
    name: "Товар 24",
    category: "бакалея",
    brand: "круглое лето",
    gold_code: 165360,
    img: "/images/leto.jpg",
  },
  {
    name: "Товар 25",
    category: "фреш",
    brand: "круглое лето",
    gold_code: 126152,
    img: "/images/leto.jpg",
  },
  {
    name: "Товар 26",
    category: "фреш",
    brand: "хуторок",
    gold_code: 14993,
    img: "/images/hutorok.jpg",
  },
  {
    name: "Товар 27",
    category: "бакалея",
    brand: "хуторок",
    gold_code: 186614,
    img: "/images/hutorok.jpg",
  },
  {
    name: "Товар 28",
    category: "бакалея",
    brand: "круглое лето",
    gold_code: 235996,
    img: "/images/leto.jpg",
  },
  {
    name: "Товар 29",
    category: "бакалея",
    brand: "мореслав",
    gold_code: 28799,
    img: "/images/moreslav.jpg",
  },
  {
    name: "Товар 30",
    category: "бакалея",
    brand: "мореслав",
    gold_code: 132661,
    img: "/images/moreslav.jpg",
  },
  {
    name: "Товар 31",
    category: "бакалея",
    brand: "амели",
    gold_code: 73591,
    img: "/images/amelie.jpg",
  },
  {
    name: "Товар 32",
    category: "бакалея",
    brand: "амели",
    gold_code: 91721,
    img: "/images/amelie.jpg",
  },
  {
    name: "Товар 33",
    category: "бакалея",
    brand: "мореслав",
    gold_code: 51075,
    img: "/images/moreslav.jpg",
  },
  {
    name: "Товар 34",
    category: "бакалея",
    brand: "хуторок",
    gold_code: 230339,
    img: "/images/hutorok.jpg",
  },
  {
    name: "Товар 35",
    category: "бакалея",
    brand: "хуторок",
    gold_code: 240201,
    img: "/images/hutorok.jpg",
  },
  {
    name: "Товар 36",
    category: "бакалея",
    brand: "хуторок",
    gold_code: 116792,
    img: "/images/hutorok.jpg",
  },
  {
    name: "Товар 37",
    category: "фреш",
    brand: "хуторок",
    gold_code: 113340,
    img: "/images/hutorok.jpg",
  },
  {
    name: "Товар 38",
    category: "фреш",
    brand: "амели",
    gold_code: 150472,
    img: "/images/amelie.jpg",
  },
  {
    name: "Товар 39",
    category: "фреш",
    brand: "амели",
    gold_code: 13683,
    img: "/images/amelie.jpg",
  },
  {
    name: "Товар 40",
    category: "фреш",
    brand: "амели",
    gold_code: 280272,
    img: "/images/amelie.jpg",
  },
  {
    name: "Товар 41",
    category: "фреш",
    brand: "амели",
    gold_code: 52639,
    img: "/images/amelie.jpg",
  },
  {
    name: "Товар 42",
    category: "фреш",
    brand: "амели",
    gold_code: 257362,
    img: "/images/amelie.jpg",
  },
  {
    name: "Товар 43",
    category: "бакалея",
    brand: "амели",
    gold_code: 255804,
    img: "/images/amelie.jpg",
  },
  {
    name: "Товар 44",
    category: "фреш",
    brand: "круглое лето",
    gold_code: 15669,
    img: "/images/leto.jpg",
  },
  {
    name: "Товар 45",
    category: "бакалея",
    brand: "круглое лето",
    gold_code: 211389,
    img: "/images/leto.jpg",
  },
  {
    name: "Товар 46",
    category: "фреш",
    brand: "хуторок",
    gold_code: 215191,
    img: "/images/hutorok.jpg",
  },
  {
    name: "Товар 47",
    category: "фреш",
    brand: "амели",
    gold_code: 85202,
    img: "/images/amelie.jpg",
  },
  {
    name: "Товар 48",
    category: "бакалея",
    brand: "круглое лето",
    gold_code: 111355,
    img: "/images/leto.jpg",
  },
  {
    name: "Товар 49",
    category: "бакалея",
    brand: "круглое лето",
    gold_code: 159080,
    img: "/images/leto.jpg",
  },
  {
    name: "Товар 50",
    category: "бакалея",
    brand: "амели",
    gold_code: 177032,
    img: "/images/amelie.jpg",
  },
];
export default listOfGoods;