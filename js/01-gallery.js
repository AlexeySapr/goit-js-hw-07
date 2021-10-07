import { galleryItems } from './gallery-items.js';

//Получаем ссылку на нужный элемент
const galleryConteiner = document.querySelector('.gallery');

//Пустой объект, куда будет записываться ссылка на модальное окно
let instance = {};

//Обработчик нажатий на элемент галереи
galleryConteiner.addEventListener('click', (event) => {
	event.preventDefault(); //запрет действия по умолчанию для ссылки

	const bigImageUrl = event.target.getAttribute('data-source');

	instance = basicLightbox.create(`<img src="${bigImageUrl}"/>`, { closable: false });

	instance.show();
});

//Обработчик нажания на клавишу Escape
document.addEventListener('keydown', (event) => {
	if (event.code === 'Escape') {
		instance.close();
	}
});

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

/***************** другой вариант создания и рендера разметки *******************/

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
