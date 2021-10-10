import { galleryItems } from "./gallery-items.js";

//Получаем ссылку на нужный элемент
const galleryConteiner = document.querySelector(".gallery");

//Пустой объект, куда будет записываться ссылка на модальное окно
let modal = {};

//Обработчик нажатий на элемент галереи
galleryConteiner.addEventListener("click", onClickGalleryItem);

//при нажатии на элемент в галерее
function onClickGalleryItem(event) {
  event.preventDefault(); //запрет действия по умолчанию для ссылки
  const bigImageUrl = event.target.getAttribute("data-source");

  modal = basicLightbox.create(`<img src="${bigImageUrl}"/>`, {
    closable: true,
    onShow: addEscListener,
    onClose: removeEscListener,
  });

  modal.show();
}

//добавляет слушателя нажатий Esc
function addEscListener() {
  document.addEventListener("keydown", onEscPressed);
}

//удаляет слушателя нажатий Esc
function removeEscListener() {
  document.removeEventListener("keydown", onEscPressed);
}

//при нажатии на Esc
function onEscPressed(event) {
  if (event.code === "Escape") {
    modal.close();
  }
}

//создание разметки
function createGallery(galleryItems) {
  const markup = galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
						<a class="gallery__link" href="${original}">
							<img
							class="gallery__image"
							src="${preview}"
							data-source="${original}"
							alt="${description}"
							/>
						</a>
					</div>`;
    })
    .join("");

  return markup;
}

//рендер разметки
// galleryConteiner.insertAdjacentHTML('beforeend', createGallery(galleryItems));
galleryConteiner.innerHTML = createGallery(galleryItems);
