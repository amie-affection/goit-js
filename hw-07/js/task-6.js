// Напиши скрипт, который бы при потере фокуса на инпуте,
// проверял его содержимое на правильное количество символов.

// Сколько символов должно быть в инпуте,
// указывается в его атрибуте data-length.

// Если введено подходящее количество, то border инпута становится зеленым,
// если неправильное - красным.

// Для добавления стилей, используй CSS-классы valid и invalid.

// document.getElementById("validation-input").addEventListener('blur') = function() {
//   console.log(this.value.length);
//   if (this.getAttribute('data-length') > this.value.length) { 
//     this.classList.remove('valid');
//     this.classList.add('invalid');
//   } else {
//     this.classList.remove('invalid');
//     this.classList.add('valid');
//   }
// };

const borderInput = document.querySelector('#validation-input');

borderInput.addEventListener('blur', focusInput);

function focusInput(event) {
  // console.log(event.currentTarget.value.length);
  if(event.currentTarget.value.length === 6) {
    event.currentTarget.classList.add('valid');
    event.currentTarget.classList.remove('invalid')
  } else {
    event.currentTarget.classList.add('invalid');
    event.currentTarget.classList.remove('valid')
  }
};