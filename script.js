function savePref(key, value) {
  localStorage.setItem(key, value);
}
function loadPref(key, defaultValue = null) {
  return localStorage.getItem(key) ?? defaultValue;
}


function applyTheme(theme) {
  document.body.classList.toggle('dark', theme === 'dark');
}


const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', () => {
  const current = loadPref('theme', 'light');
  const next = current === 'light' ? 'dark' : 'light';
  applyTheme(next);
  savePref('theme', next);
  
  themeToggle.style.transform = 'scale(1.1)';
  setTimeout(() => themeToggle.style.transform = '', 200);
});


document.addEventListener('DOMContentLoaded', () => {
  applyTheme(loadPref('theme', 'light'));
});


const images = [
  'https://images.pexels.com/photos/256262/pexels-photo-256262.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  'https://images.pexels.com/photos/13895975/pexels-photo-13895975.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
];
let currentImage = 0;
setInterval(() => {
  currentImage = (currentImage + 1) % images.length;
  document.getElementById('slideshowImage').src = images[currentImage];
}, 2000);


document.querySelectorAll('.accordion-header').forEach(header => {
  header.addEventListener('click', () => {
    const content = header.nextElementSibling;
    content.style.display = content.style.display === 'block' ? 'none' : 'block';
  });
});


document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.contact-form');
    const modalOverlay = document.getElementById('success-modal');
    const closeBtn = document.getElementById('modal-close');

    form.addEventListener('submit', function(e) {
      e.preventDefault();

      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }

      modalOverlay.style.display = 'flex';

    
      form.reset();
    });

    closeBtn.addEventListener('click', () => {
      modalOverlay.style.display = 'none';
    });
    modalOverlay.addEventListener('click', e => {
      if (e.target === modalOverlay) {
        modalOverlay.style.display = 'none';
      }
    });
  });