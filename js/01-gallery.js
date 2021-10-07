import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

//Получаем ссылку на нужный элемент
const galleryConteiner = document.querySelector('.gallery');

//запрет действия по умолчанию для ссылки
galleryConteiner.addEventListener('click', (event) => {
	event.preventDefault();
});

//Создание и рендер разметки
// for (const { preview, original, description } of galleryItems) {
// 	galleryConteiner.insertAdjacentHTML(
// 		'beforeend',
// 		`<div class="gallery__item">
//   			<a class="gallery__link" href="${original}">
//     			<img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}" />
//   			</a>
// 		</div>`
// 	);
// }

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
