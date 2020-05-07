// Напиши скрипт, который при наборе текста в инпуте
// input#name-input (событие input) подставляет его текущее значение
// в span#name-output.

// Если инпут пустой, в спане должна отображаться строка 'незнакомец'.

const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

nameInput.addEventListener('input', textInput);

// function textInput(event) {
//     console.log(event.currentTarget.value);
//     if(event.currentTarget.value !== '') {
//         nameOutput.textContent = event.currentTarget.value;
//     } else {
//         nameOutput.textContent = 'незнакомец';
//     }
// }

function textInput(event) {
    console.log(event.currentTarget.value);
    if(event.currentTarget.value) {
        nameOutput.textContent = event.currentTarget.value;
    } else {
        nameOutput.textContent = 'незнакомец';
    }
};
