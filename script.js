document.addEventListener('DOMContentLoaded', () => {
  const year = document.getElementById('year');
  if (year) {
    year.textContent = new Date().getFullYear();
  }

  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (event) => {
      const targetId = link.getAttribute('href');
      if (!targetId || targetId === '#') return;
      const target = document.querySelector(targetId);
      if (target) {
        event.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  document.querySelectorAll('.select-product').forEach((button) => {
    button.addEventListener('click', () => {
      const card = button.closest('.product-card');
      const selectedInput = document.getElementById('selected-outfit');
      const productName = card?.dataset.product || 'Custom rental selection';

      document.querySelectorAll('.product-card').forEach((item) => item.classList.remove('selected'));
      card?.classList.add('selected');

      if (selectedInput) {
        selectedInput.value = productName;
      }

      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
});
