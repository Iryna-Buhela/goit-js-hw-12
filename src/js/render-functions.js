import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
});
  
const galleryContainer = document.querySelector('.gallery');
const loader = document.querySelector('.loader');
const loadMoreBtn = document.querySelector('.load-more');

export function createGallery(images) {
    const markup = images
      .map(
        ({
          webformatURL,
          largeImageURL,
          tags,
          likes,
          views,
          comments,
          downloads,
        }) => `
        <li class="gallery-item">
          <a class="gallery-link" href="${largeImageURL}">
            <img class="gallery-image" src="${webformatURL}" alt="${tags}" />
          </a>
          <ul class="image-stats">
            <li><b>Likes:</b> ${likes}</li>
            <li><b>Views:</b> ${views}</li>
            <li><b>Comments:</b> ${comments}</li>
            <li><b>Downloads:</b> ${downloads}</li>
          </ul>
        </li>
      `
      )
      .join('');
  
    galleryContainer.insertAdjacentHTML('beforeend', markup);
    lightbox.refresh();
}
  
export function clearGallery() {
    galleryContainer.innerHTML = '';
}

export function showLoader() {
    loader.classList.remove('is-hidden');
}
  
export function hideLoader() {
    loader.classList.add('is-hidden');
}

export function showLoadMoreButton() {
    loadMoreBtn.classList.remove('is-hidden');
}
  
export function hideLoadMoreButton() {
    loadMoreBtn.classList.add('is-hidden');
}


