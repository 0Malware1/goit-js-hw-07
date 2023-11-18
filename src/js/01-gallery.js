import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryContainer = document.querySelector(".gallery"); //zadeklarowanie zmiennej w js dla kontenera
function createGallery() { //tworzenie kontenera na elementy w DOM
    galleryItems.forEach(item => {
        const galleryItem = document.createElement('div'); //dla każdego elementu w obiekcie GalleryItems stworzy się div
        galleryItem.classList.add('gallery__item'); //dodanie klasy dla każdego stworzonego diva

        const image = document.createElement('img'); //tworzenie elementu obrazka (preview)
        image.classList.add('gallery__image'); // dodanie klasy
        image.src = item.preview; //połączenie kluczy z elementem w DOM
        image.alt = item.description;
        image.setAttribute('data-source', item.original); //dodanie atrybutu source i łączenie go z kluczem original
        
        const link = document.createElement('a'); //element link 
        link.classList.add('gallery__link');
        link.href = item.original; //link to source elementu image 

        link.appendChild(image);
        galleryItem.appendChild(link);
        galleryContainer.appendChild(galleryItem); // w galleryContainer jest galleryItem, potem link a potem image

        link.addEventListener('click', function (event) { //event dla kliknięcia w obrazek
            event.preventDefault(); //zapobieganie otworzeniu obrazu w nowym oknie
            const lightbox = basicLightbox.create(`<img src="${item.original}" alt="${item.description}">
            `);
            lightbox.show();
            document.addEventListener('click', CloseModal); // zamknięcie modala poprzez kliknięcie (? nwm czy dobrze ale działa XD)
        })
    })
}
createGallery();
console.log(galleryItems);