import { galleryItems } from './gallery-items.js';

console.log(galleryItems);

const galleryConteiner = document.querySelector('.gallery');

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
		.join('');

	return markup;
}

//рендер разметки
galleryConteiner.insertAdjacentHTML('beforeend', createGallery(galleryItems));
