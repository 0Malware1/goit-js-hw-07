import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryContainer = document.querySelector('.gallery');
function createGallery(){
    galleryItems.forEach(item => {
        const galleryItem = document.createElement('li');
        galleryItem.classList.add("gallery__item");

        const image = document.createElement('img');
        image.classList.add('gallery__image');
        image.alt - item.description;
        image.src = item.preview;

        const link = document.createElement('a');
        link.classList.add('gallery__link');
        link.href = item.original;

        link.appendChild(image);
        galleryItem.appendChild(link);
        galleryContainer.appendChild(galleryItem);
    });
}
const lightbox = new SimpleLightbox('.gallery a', 
{ captions:true,
captionsDelay: 250,
}); //nie wiem, popsuło się wszystko
createGallery();
console.log(galleryItems);
