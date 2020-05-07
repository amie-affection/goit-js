// Напиши скрипт, который реагирует на изменение значения
// input#font-size-control (событие input) и изменяет инлайн-стиль
// span#text обновляя свойство font-size.

// В результате при перетаскивании ползунка будет меняться размер текста.

const control = document.querySelector('#font-size-control');
const spanText = document.querySelector('#text');

control.addEventListener('input', controlSize);

function controlSize () {
    spanText.style.fontSize = control.value + ('px');
    console.log(control.value);
};