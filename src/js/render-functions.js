import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryContainer = document.querySelector('.gallery');
const loader = document.querySelector('.loader');
let lightbox;

export function createGallery(images) {
  const markup = images
    .map(
      image => `
      <li class="gallery-item">
        <a href="${image.largeImageURL}">
          <img 
            src="${image.webformatURL}" 
            alt="${image.tags}" 
            class="gallery-image"
          />
          <div class="image-info">
            <p><b>Likes:</b> ${image.likes}</p>
            <p><b>Views:</b> ${image.views}</p>
            <p><b>Comments:</b> ${image.comments}</p>
            <p><b>Downloads:</b> ${image.downloads}</p>
          </div>
        </a>
      </li>
    `
    )
    .join('');

  galleryContainer.insertAdjacentHTML('beforeend', markup);

  if (!lightbox) {
    lightbox = new SimpleLightbox('.gallery a', {
      captionsData: 'alt',
      captionDelay: 250,
    });
  } else {
    lightbox.refresh();
  }
}

export function clearGallery() {
  galleryContainer.innerHTML = '';
  if (lightbox) {
    lightbox.destroy();
    lightbox = null;
  }
}

export function showLoader() {
  loader.classList.add('visible');
}

export function hideLoader() {
  loader.classList.remove('visible');
}