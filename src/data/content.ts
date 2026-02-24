import type { MenuItem, CafeInfo, Review } from '../types';

export const CAFE_INFO: CafeInfo = {
  name: "L'umore",
  tagline: "L'umore — це про настрій",
  description: "Ми створюємо особливу атмосферу затишку та комфорту. Наша місія — дарувати вам гарний настрій через кожну чашку ідеально обсмаженої кави та шматочок ніжного десерту. Тут сучасний стиль зустрічається з домашнім теплом.",
  address: {
    city: "Кам’янець-Подільський",
    street: "вул. Огієнка, 49",
    mapIframe: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d879.1132041794716!2d26.585870661669116!3d48.67942339071311!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4733b875d44c76c7%3A0x656f3148b461134f!2z0JrQsNCyJ9GP0YDQvdGPIEwndW1vcmU!5e0!3m2!1suk!2sua!4v1771850392424!5m2!1suk!2sua"
  },
  workingHours: {
    weekdays: "Пн - Сб: 08:00 - 22:00",
    weekends: "Нд: 09:00 - 22:00"
  },
  contacts: {
    phone: "+38 096 40 26 303",
    instagram: "https://www.instagram.com/lumore.na.ogienka/",
    email: "hello@lumore.com"
  }
};

export const MENU_ITEMS: MenuItem[] = [
  // COFFEE
  { id: "dr-coffee-1", name: "Рістрето", description: "Класичний міцний напій", price: 35, volume: "15 мл", category: "coffee", image: "/ristretto.png" },
  { id: "dr-coffee-2", name: "Еспресо", description: "Класична кава", price: 35, volume: "30 мл", category: "coffee", image: "/espresso.png" },
  { id: "dr-coffee-3", name: "Еспресо макіято", description: "Еспресо з краплею молочної піни", price: 40, volume: "50 мл", category: "coffee", image: "/espresso-machiato.png" },
  { id: "dr-coffee-4", name: "Допіо", description: "Подвійне еспресо", price: 65, volume: "120 мл", category: "coffee", image: "/dopio.png" },
  { id: "dr-coffee-5", name: "Американо", description: "Класична кава з додаванням води", price: 35, volume: "120 мл", category: "coffee", image: "/americano.png" },

  // CAPPUCCINO
  { id: "dr-cappuccino-1", name: "Капучино класичне", description: "Класичне поєднання еспресо, молока та піни", price: 45, volume: "220 мл", category: "cappuccino", image: "/capuchino.png" },
  { id: "dr-cappuccino-2", name: "Капучино велике", description: "Для тих, хто любить більше кави", price: 50, volume: "320 мл", category: "cappuccino", image: "/capuchino-big.png" },
  { id: "dr-cappuccino-3", name: "Капучино солоне", description: "Капучино з додаванням солі для особливого смаку", price: 50, volume: "220 мл", category: "cappuccino", image: "/capuchino-solone.png" },
  { id: "dr-cappuccino-4", name: "Флет уайт", description: "Насичений молочний напій", price: 80, volume: "230 мл", category: "cappuccino", image: "/flat-white.png" },
  { id: "dr-cappuccino-5", name: "Апельсинове", description: "Капучино з апельсиновим смаком", price: 55, volume: "220 мл", category: "cappuccino", image: "/capuchino-orange.png" },
  { id: "dr-cappuccino-6", name: "Апельсинове XL", description: "Більша порція апельсинової кави", price: 65, volume: "220 мл", category: "cappuccino", image: "/capuchino-orange-xl.png" },

  // COFFEE WITH MILK
  { id: "dr-cm-1", name: "Лате", description: "Ніжна кава з великою кількістю молока", price: 50, volume: "320 мл", category: "coffee_with_milk" },
  { id: "dr-cm-2", name: "Лате XL", description: "Велика порція лате", price: 55, volume: "420 мл", category: "coffee_with_milk" },
  { id: "dr-cm-3", name: "Глясе", description: "Кава з морозивом", price: 70, volume: "230 мл", category: "coffee_with_milk" },
  { id: "dr-cm-4", name: "Раф", description: "Ніжний вершковий напій", price: 55, volume: "220 мл", category: "coffee_with_milk" },
  { id: "dr-cm-5", name: "Раф XL", description: "Великий порція рафу", price: 90, volume: "420 мл", category: "coffee_with_milk" },
  { id: "dr-cm-6", name: "По-віденськи", description: "Кава з вершками", price: 70, volume: "220 мл", category: "coffee_with_milk" },

  // CHOCOLATE AND COCOA
  { id: "dr-choc-1", name: "Гарячий чорний шоколад", description: "Dark chocolate", price: 85, volume: "100 мл", category: "chocolate_and_cocoa", image: "/hot-chocolate.png" },
  { id: "dr-choc-2", name: "Гарячий молочний шоколад", description: "Milk chocolate", price: 75, volume: "150 мл", category: "chocolate_and_cocoa", image: "/hot-chocolate-milk.png" },
  { id: "dr-choc-3", name: "Какао", description: "Cocoa", price: 60, volume: "320 мл", category: "chocolate_and_cocoa", image: "/cocoa.png" },
  
  // NON-ALCOHOLIC MULLED WINE
  { id: "dr-wine-1", name: "Глінтвейн б/а виноград", description: "Grape", price: 70, volume: "300 мл", category: "non_alcoholic_mulled_wine" },
  { id: "dr-wine-2", name: "Глінтвейн б/а смородина", description: "Currant", price: 70, volume: "300 мл", category: "non_alcoholic_mulled_wine" },
  { id: "dr-wine-3", name: "Глінтвейн б/а журавлина", description: "Cranberry", price: 70, volume: "300 мл", category: "non_alcoholic_mulled_wine" },

  // FRESH
  { id: "dr-fresh-1", name: "Фреш апельсин", description: "Orange", price: 80, volume: "220 мл", category: "fresh", image: "/orange-fresh.png" },
  { id: "dr-fresh-2", name: "Фреш гранат", description: "Garnet", price: 150, volume: "220 мл", category: "fresh", image: "/fresh-pomegranate.png" },
  { id: "dr-fresh-3", name: "Фреш грейпфрут", description: "Grapefruit", price: 80, volume: "220 мл", category: "fresh", image: "/fresh-grapefruit.png" },

  // FRUIT TEA
  { id: "dr-ftea-1", name: "Імбирний", description: "Ginger", price: 55, volume: "420 мл", category: "fruit_tea" },
  { id: "dr-ftea-2", name: "Малиновий", description: "Raspberry", price: 55, volume: "420 мл", category: "fruit_tea" },
  { id: "dr-ftea-3", name: "Чорна смородина", description: "Blackberry/Currant", price: 55, volume: "420 мл", category: "fruit_tea" },
  { id: "dr-ftea-4", name: "Обліпиховий", description: "Sea buckthorn", price: 55, volume: "420 мл", category: "fruit_tea" },
  { id: "dr-ftea-5", name: "Журавлинний", description: "Cranberry", price: 55, volume: "420 мл", category: "fruit_tea" },

  // TEA
  { id: "dr-tea-1", name: "Чай в кружці", description: "Tea in a mug", price: 30, volume: "240 мл", category: "tea" },

  // ADDS
  { id: "dr-add-1", name: "Молоко", description: "Milk", price: 5, category: "adds" },
  { id: "dr-add-2", name: "Вершки", description: "Cream", price: 10, category: "adds" },
  { id: "dr-add-3", name: "Сироп", description: "Syrup", price: 5, category: "adds" },
  { id: "dr-add-4", name: "Маршмелоу", description: "Marshmallow", price: 10, category: "adds" },
  { id: "dr-add-5", name: "Мед", description: "Honey", price: 15, category: "adds" },

  // PASTA AND RAVIOLI
  { id: "fd-pasta-1", name: "Равіолі з вершковим сиром та шпинатом", description: "шпинат, творог, крем-сир, часник, вершки, пармезан, базилік", price: 150, volume: "380 г", category: "pasta_and_ravioli", image: "/ravioli-z-vershkovym-syrom-ta-shpynatom.png" },
  { id: "fd-pasta-2", name: "Равіолі з лососем", description: "вершковий сир, запечений лосось, томати, пармезан, базилік", price: 195, volume: "350 г", category: "pasta_and_ravioli", image: "/ravioli-z-lososem.png" },
  { id: "fd-pasta-3", name: "Равіолі з індичкою та в'яленою грушею", description: "індичка, морква, печериці, цибуля, вершки, пармезан, в'ялена груша", price: 165, volume: "380 г", category: "pasta_and_ravioli", image: "/ravioli-z-indychkoyu-ta-vyalenoyu-hrusheyu.png" },
  { id: "fd-pasta-4", name: "Паста карбонара", description: "бекон, вершки, жовток, пармезан, чорний перець", price: 175, volume: "350 г", category: "pasta_and_ravioli", image: "/pasta-karbonara.png" },
  { id: "fd-pasta-5", name: "Паста з куркою", description: "куряче філе, томати, вершки, пармезан, базилік, оливкова олія", price: 165, volume: "430 г", category: "pasta_and_ravioli", image: "/pasta-z-kurkoyu.png" },
  { id: "fd-pasta-6", name: "Паста з морепродуктами", description: "кальмари, мідії, креветки, томати, часник, пармезан, оливкова олія", price: 240, volume: "400 г", category: "pasta_and_ravioli", image: "/pasta-z-moreproduktamy.png" },

  // SOUPS
  { id: "fd-soup-1", name: "Сирний крем-суп", description: "пармезан, чедер, вершки, цибуля, морква", price: 100, volume: "280 г", category: "soups", image: "/syrnyy-krem-sup.png" },
  { id: "fd-soup-2", name: "Гарбузовий крем-суп", description: "гарбуз, вершки, картопля, сир фета", price: 85, volume: "280 г", category: "soups", image: "/harbuzovyy-krem-sup.png" },

  // BOWLS
  { id: "fd-bowl-1", name: "Боул з куркою", description: "кіноа, куряче філе су-від, огірок, томат, мікс салату, фета, оливкова олія", price: 160, volume: "320 г", category: "bowls", image: "/boul-z-kurkoyu.png" },
  { id: "fd-bowl-2", name: "Боул з лососем", description: "кіноа, лосось, яйце, томат, оливкова олія, сік лимона", price: 185, volume: "300 г", category: "bowls", image: "/boul-z-lososem.png" },
  { id: "fd-bowl-3", name: "Боул з тунцем", description: "кус-кус, тунець, мікс салату, огірок, томат, яйце, оливкова олія", price: 200, volume: "400 г", category: "bowls", image: "/boul-z-tuntsem.png" },

  // SALADS
  { id: "fd-salad-1", name: "Грецький салат", description: "томат, огірок, болгарський перець, оливки, фета, базилік", price: 125, volume: "250 г", category: "salads", image: "/hretskyy-salat.png" },
  { id: "fd-salad-2", name: "Салат лайт", description: "лист салату, айсберг, томат, мандарин, крем-сир, оливкова олія", price: 100, volume: "250 г", category: "salads", image: "/salat-layt.png" },
  { id: "fd-salad-3", name: "Цезар з куркою", description: "салат, куряче філе, яйце, пармезан, соус цезар", price: 165, volume: "350 г", category: "salads", image: "/tsezar-z-kurkoyu.png" },

  // BREAKFASTS
  { id: "fd-breakfast-1", name: "Яєчня", description: "яйця, огірки, помідори, сир", price: 80, volume: "210 г", category: "breakfasts", image: "/yayechnya.png" },
  { id: "fd-breakfast-2", name: "Сніданок англійський", description: "яйця, сосиски, квасоля, шпинат, тости, томат", price: 125, volume: "380 г", category: "breakfasts", image: "/snidanok-anhliyskyy.png" },
  { id: "fd-breakfast-3", name: "Скрембл з куркою", description: "яйця, куряче філе, шпинат, томат, тост", price: 135, volume: "300 г", category: "breakfasts", image: "/skrembl-z-kurkoyu.png" },
  { id: "fd-breakfast-4", name: "Пашот з лососем", description: "яйце пашот, лосось, авокадо, тост", price: 180, volume: "250 г", category: "breakfasts", image: "/pashot-z-lososem.png" },

  // POTATO (NEW CATEGORY BASED ON IMAGES)
  { id: "fd-potato-1", name: "Картопля 4 сири", description: "запечена картопля, соус 4 сири, пармезан", price: 110, volume: "300 г", category: "potato", image: "/kartoplya-4-syra.png" },
  { id: "fd-potato-2", name: "Картопля з ковбасками", description: "запечена картопля, мисливські ковбаски, соус", price: 130, volume: "350 г", category: "potato", image: "/kartoplya-z-kovbaskamy.png" },

  // DESSERTS
  { id: "fd-dessert-1", name: "Сирники", description: "сирники, сметана/нутелла/фісташка/джем", price: 120, volume: "180 г", category: "desserts", image: "/syrnyky.png" }
];

export const REVIEWS: Review[] = [
  {
    id: "r1",
    author: "Марія",
    rating: 5,
    text: "Найкраща кава в нашому місті! Дуже затишно."
  },
  {
    id: "r2",
    author: "Олександр",
    rating: 5,
    text: "Привітний персонал та неймовірні круасани."
  }
];
