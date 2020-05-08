// Напиши скрипт создания и очистки коллекции элементов.
// Пользователь вводит количество элементов в input и нажимает кнопку Создать,
// после чего рендерится коллекция. При нажатии на кнопку Очистить,
// коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число.
// Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.

// Каждый созданный div:

// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
// Создай функцию destroyBoxes(), которая очищает div#boxes.

const input = document.querySelector('#controls > input');
// console.log(input);
const btnRender = document.querySelector("button[data-action='render']");
const btnDestroy = document.querySelector("button[data-action='destroy']");
const box = document.querySelector('#boxes');

btnRender.addEventListener('click', takeValueInput);

function takeValueInput() {
    const valueInput = Number(input.value);
    // console.valueInput(valueInput);
    createBoxes(valueInput);
};

function createBoxes(amount) {
    // console.log(amount);
    const allDiv = [];

    let count = 0;

    for(let i = 0; i < amount; i += 1) {
        const div = document.createElement('div');
        div.style.height = `${30 + i * 10}px`;
        div.style.width = `${30 + i * 10}px`;
        div.style.background = createColor();

        allDiv.push(div);
    };
    box.append(...allDiv);
};

function createColor() {
    const first = Math.random() * 255;
    const second = Math.random() * 255;
    const third = Math.random() * 255;

    return `rgb(${first}, ${second}, ${third})`;
};