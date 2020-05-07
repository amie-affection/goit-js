// Счетчик состоит из спана и кнопок, которые должны увеличивать
// и уменьшать значение счетчика на 1.

// Создай переменную counterValue, в которой будет храниться
// текущее значение счетчика.

// Создай функции increment и decrement для увеличения
// и уменьшения значения счетчика

// Добавь слушатели кликов на кнопки,
// вызовы функций и обновление интерфейса

let counterValue = 0;

const buttonDecrement = document.querySelector('button[data-action="decrement"]');
const buttonIncrement = document.querySelector('button[data-action="increment"]');

const spanValue = document.querySelector('#value')

buttonDecrement.addEventListener('click', decrement);
buttonIncrement.addEventListener('click', increment);

function increment(){
	counterValue += 1;
  spanValue.textContent = counterValue;
};

function decrement(){
	counterValue -= 1;
  spanValue.textContent = counterValue;
};