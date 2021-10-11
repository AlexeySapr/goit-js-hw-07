import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);

//Получаем ссылку на нужный элемент
const galleryConteiner = document.querySelector("ul.gallery");
// console.log(galleryConteiner);

//создание разметки
function createGallery(galleryItems) {
  const markup = galleryItems
    .map(({ preview, original, description }) => {
      return `<a class="gallery__item" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}"/>
    </a>`;
    })
    .join("");

  return markup;
}

//рендер разметки
galleryConteiner.innerHTML = createGallery(galleryItems);

const lightbox = new SimpleLightbox(".gallery a", {
  /* options */
  captionsData: "alt",
  captionDelay: 250,
});
