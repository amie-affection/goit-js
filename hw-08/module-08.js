import images from "./gallery-items.js";

// console.log(images);

// Создай галерею с возможностью клика по ее элементам и просмотра
// полноразмерного изображения в модальном окне.

// Создание и рендер разметки по массиву данных и предоставленному шаблону.
// Реализация делегирования на галерее ul.js-gallery и получение url
// большого изображения.
// Открытие модального окна по клику на элементе галереи.
// Подмена значения атрибута src элемента img.lightbox__image.
// Закрытие модального окна по клику на кнопку button[data-action="close-modal"].
// Очистка значения атрибута src элемента img.lightbox__image.
// Это необходимо для того, чтобы при следующем открытии модального окна,
// пока грузится изображение, мы не видели предыдущее.
// Закрытие модального окна по клику на div.lightbox__overlay.
// Закрытие модального окна по нажатию клавиши ESC.
// Пролистывание изображений галереи в открытом модальном окне клавишами "влево" и "вправо".

const func = (item) => {
  // console.log(item);
  return `
    <li class="gallery__item">
  <a
    class="gallery__link"
    href="${item.original}"
  >
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="Tulips"
    />
  </a>
</li>
    `;
};

const gallery = document.querySelector(".js-gallery");
const closeModalBtn = document.querySelector(
  'button[data-action="close-lightbox"]'
);
const backdropRef = document.querySelector(".js-lightbox");
const modal = document.querySelector(".js-lightbox");
const img = document.querySelector(".lightbox__image");
const allImages = images.map((item) => func(item)).join("");
let currentTarget;

// console.log(allImages);

gallery.insertAdjacentHTML("beforeend", allImages);

gallery.addEventListener("click", onTagsClick);

function onTagsClick(event) {
  event.preventDefault();

  currentTarget = event.target;

  if (event.target.nodeName !== "IMG") {
    console.log("Click не по картинке");
    return;
  }

  modal.classList.add("is-open");

  // console.log("src", event.target.dataset.source);

  // img.setAttribute("src", event.target.dataset.source);

  img.src = event.target.dataset.source;
  img.alt = event.target.alt;

  console.log(event.target.alt);
  closeModalBtn.addEventListener("click", closeModalWindow);
  backdropRef.addEventListener("click", callback);

  window.addEventListener("keydown", closeModalEscape);
}

function closeModalWindow() {
  modal.classList.remove("is-open");

  img.src = "";
  // console.log(img.src);
  img.alt = "";

  backdropRef.removeEventListener("click", callback);
  closeModalBtn.removeEventListener("click", closeModalWindow);
}

function callback() {
  if (event.target.nodeName !== "IMG") {
    closeModalWindow();
  }
}

function closeModalEscape(event) {
  event.code === "Escape" && closeModalWindow();

  // console.log(currentTarget);
  if (
    event.code === "ArrowRight" &&
    currentTarget.parentNode.parentNode.nextElementSibling
  ) {
    // console.log(currentTarget.parentNode.parentNode.nextElementSibling); // li
    let nextImg =
      currentTarget.parentNode.parentNode.nextElementSibling.firstElementChild
        .firstElementChild;

    //   console.log(
    //     currentTarget.parentNode.parentNode.nextElementSibling.firstElementChild
    //       .firstElementChild
    //   );

    img.setAttribute("src", nextImg.dataset.source);

    currentTarget = nextImg;
  } 

  if (
    event.code === "ArrowLeft" &&
    currentTarget.parentNode.parentNode.previousElementSibling
  ) {
    let nextImg =
      currentTarget.parentNode.parentNode.previousElementSibling
        .firstElementChild.firstElementChild;

    img.setAttribute("src", nextImg.dataset.source);

    currentTarget = nextImg;
  }
  window.removeEventListener("keydown", closeModalEscape);
}
