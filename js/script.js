const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const lightboxClose = document.getElementById('lightboxClose');

function openLightbox(imgElement) {
  lightboxImg.src = imgElement.src;
  lightboxImg.alt = imgElement.alt;
  lightbox.classList.add('active');
}

function closeLightbox() {
  lightbox.classList.remove('active');
  lightboxImg.src = '';
}

lightboxClose.addEventListener('click', closeLightbox);

// Bahar (dark background) click karne pe bhi band ho jaye
lightbox.addEventListener('click', function (e) {
  if (e.target === lightbox) {
    closeLightbox();
  }
});

// Escape key se bhi band ho jaye
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    closeLightbox();
  }
});