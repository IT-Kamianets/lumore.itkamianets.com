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
  {
    id: "c1",
    category: "coffee",
    name: "Капучино",
    description: "Класичне поєднання еспресо, збитого молока та густої пінки",
    price: 65,
    volume: "250 мл",
    image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&q=75&w=600"
  },
  {
    id: "c2",
    category: "coffee",
    name: "Флет Вайт",
    description: "Насичений подвійний шот еспресо з тонким шаром молочної піни",
    price: 80,
    volume: "200 мл",
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&q=75&w=600"
  },
  {
    id: "c3",
    category: "coffee",
    name: "Латте",
    description: "М'який кавовий напій з великою кількістю молока",
    price: 75,
    volume: "350 мл",
    image: "https://images.unsplash.com/photo-1536939459926-301728717817?auto=format&fit=crop&q=75&w=600"
  },
  // TEA
  {
    id: "t1",
    category: "tea",
    name: "Чай Альпійські трави",
    description: "Збір з екологічно чистих трав з медовим післясмаком",
    price: 55,
    volume: "400 мл",
    image: "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?auto=format&fit=crop&q=75&w=600"
  },
  // DESSERTS
  {
    id: "d1",
    category: "desserts",
    name: "Чізкейк Сан-Себастьян",
    description: "Ніжний запечений десерт з карамельною скоринкою",
    price: 110,
    image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&q=75&w=600"
  },
  {
    id: "d2",
    category: "desserts",
    name: "Класичний круасан",
    description: "Хрустке листкове тісто на вершковому маслі",
    price: 55,
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&q=75&w=600"
  },
  // BREAKFAST
  {
    id: "b1",
    category: "breakfast",
    name: "Сирники з джемом",
    description: "Домашні сирники зі сметаною та ягідним соусом",
    price: 125,
    volume: "220 г",
    image: "https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?auto=format&fit=crop&q=75&w=600"
  }
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
