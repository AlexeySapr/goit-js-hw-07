import { galleryItems } from './gallery-items.js';

console.log(galleryItems);

const galleryConteiner = document.querySelector('.gallery');

for (const { preview, original, description } of galleryItems) {
	galleryConteiner.insertAdjacentHTML(
		'beforeend',
		`<div class="gallery__item">
  			<a class="gallery__link" href="${original}">
    			<img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}" />
  			</a>
		</div>`
	);
}
