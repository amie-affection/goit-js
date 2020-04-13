'use strict';

// Задание 1

let name = 'Генератор защитного поля';
let price = 1000;

let string = `Выбран "${name}", цена за штуку ${price} кредитов.`;
console.log(string);

let price1 = new String(2000);
let str1 = `Выбран "${name}", цена за штуку ${price1} кредитов.`;
console.log(str1);

//Задание 2

//const total = 100; // количество товаров на складе
const ordered = 50; // единиц товара в заказе
const value = 130;

const isInRange = value <= 100 && value >= 1;

if(isInRange) {
    console.log('Заказ оформлен, с вами свяжется менеджер');
}

console.log('На складе недостаточно товаров!');

// Задание 3

//const ADMIN_PASSWORD = 'jqueryismyjam';
//let message;

//const input = prompt('Введите пароль');

//if (input === ADMIN_PASSWORD) {
   // message = 'Добро пожаловать!';
//} else if (input === null) {
   // message = 'Отменено пользователем!';
//} else if (input !== ADMIN_PASSWORD) {
   // message = 'Доступ запрещен, неверный пароль!';
//}
//alert(message);

// Задание 4

//const credits = 23580;
//const pricePerDroid = 3000;
// let totalPrice;
//let message;

//const userChoise = prompt('Сколько дроидов вы хотите купить?');

//if (userChoise === null) {
   // message = 'Отменено пользователем!';
//}
//else if (totalPrice <= credits) {
  //  totalPrice = Number(userChoice) * pricePerDroid;
//}
//else if (totalPrice > credits) {
   // message = 'Недостаточно средств на счету!';
//}
//else {
   // message = `Вы купили ${userChoice} дроидов, на счету осталось ${(credits - totalPrice)} кредитов.`;
//}
//alert(message);

// Задание 5

//let country;
//let price2;
//let message;

//const userChoice = prompt('Ваша страна?');

//if (userChoice === null) {
   // message = 'Отменено пользователем!';
//} else {
   // switch (userChoice.toLowerCase()) {
      //  case country = 'китай':
      //  price2 = 100;
       // message = `Доставка в ${userChoice} будет стоить ${price2} кредитов`;
      //  break;

      //  case country = 'чили':
      //  price2 = 250;
      //  message = `Доставка в ${userChoice} будет стоить ${price2} кредитов`;
      //  break;

      //  case country = 'австралия':
      //  price2 = 170;
      //  message = `Доставка в ${userChoice} будет стоить ${price2} кредитов`;
      //  break;

      //  case country = 'индия':
      //  price2 = 80;
      //  message = `Доставка в ${userChoice} будет стоить ${price2} кредитов`;
      //  break;

     //   case country = 'ямайка':
      //  price2 = 120;
      //  message = `Доставка в ${userChoice} будет стоить ${price2} кредитов`;
      //  break;

      //  default:
      //  message = 'В вашей стране доставка не доступна';
//}
//}
//alert(message);

// Задание 6

let input;
let total = 0;

const input = prompt('Введите любое число');

if (input !=== null) {
   const input = prompt('Введите любое число');
}
alert(message);