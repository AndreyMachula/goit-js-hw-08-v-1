// Described in the documentation
import SimpleLightbox from "simplelightbox";

// Additional style imports
import "simplelightbox/dist/simple-lightbox.min.css";

// Import a markup template
import markupTemplate from '../templates/markup-template.hbs';
// Add imports above this line

import { galleryItems } from './gallery-items';
// Change code below this line

const galleryEl = document.querySelector('.gallery');


// Creating and rendering markup based on galleryItems data array
const createGalleryMarkup = galleryItems
  .map(markupTemplate)
  .join("");

galleryEl.insertAdjacentHTML("beforeend", createGalleryMarkup);

// Library initialization after gallery elements are created and added to `div.gallery`.
const lightboxOptions = {
  captions: true,
  captionsData: "alt",
  captionDelay: 250,
};

const lightboxGallery = new SimpleLightbox(".gallery a", lightboxOptions);

console.log(galleryItems);