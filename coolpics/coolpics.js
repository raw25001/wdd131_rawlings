const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
menuBtn.addEventListener("click", () => {
    menu.classList.toggle("hide");
});

const gallery = document.querySelector('.gallery');
const modal = document.querySelector('dialog');
const modalImage = modal.querySelector('img');
const closeButton = modal.querySelector('.close-viewer');

gallery.addEventListener('click', (e) => {
    if (e.target.tagName === 'IMG') {
        const smallSrc = e.target.getAttribute('src');

        const largeSrc = smallSrc.replace('-sm', '-full');
        
        modalImage.setAttribute('src', largeSrc);
        modalImage.setAttribute('alt', e.target.alt);
        modal.showModal();
    }
});

closeButton.addEventListener('click', () => {
    modal.close();
});

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.close();
    }
});
