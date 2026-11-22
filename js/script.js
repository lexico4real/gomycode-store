// FORM & FIELD — small front-end interactions for the coursework demo.
document.addEventListener('DOMContentLoaded', () => {
  // Keep the footer year current without editing the HTML every January.
  const yearElement = document.getElementById('currentYear');
  if (yearElement) yearElement.textContent = new Date().getFullYear();

  // Demo shopping-bag interaction: update the count and show Bootstrap toast feedback.
  let bagItems = 0;
  const bagCount = document.getElementById('bagCount');
  const bagLink = document.querySelector('.bag-link');
  const toastElement = document.getElementById('shopToast');
  const toastMessage = document.getElementById('toastMessage');
  const shopToast = toastElement && window.bootstrap ? new bootstrap.Toast(toastElement) : null;

  document.querySelectorAll('.shop-now').forEach((button) => {
    button.addEventListener('click', () => {
      bagItems += 1;
      const productName = button.dataset.product || 'Your item';
      if (bagCount) bagCount.textContent = bagItems;
      if (bagLink) bagLink.setAttribute('aria-label', `Shopping bag, ${bagItems} ${bagItems === 1 ? 'item' : 'items'}`);
      if (toastMessage) toastMessage.textContent = `${productName} added to your bag. (Demo only)`;
      if (shopToast) shopToast.show();
    });
  });

  // Basic client-side newsletter validation; no email is sent or stored.
  const newsletterForm = document.getElementById('newsletterForm');
  const emailInput = document.getElementById('emailAddress');
  const formMessage = document.getElementById('formMessage');
  if (newsletterForm && emailInput) {
    newsletterForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const valid = emailInput.checkValidity();
      emailInput.classList.toggle('is-invalid', !valid);
      emailInput.setAttribute('aria-invalid', String(!valid));
      newsletterForm.classList.toggle('has-error', !valid);
      if (!valid) {
        emailInput.focus();
        return;
      }
      emailInput.classList.remove('is-invalid');
      emailInput.setAttribute('aria-invalid', 'false');
      newsletterForm.classList.remove('has-error');
      if (formMessage) formMessage.textContent = 'Thanks for your interest! This is a front-end demo, so no subscription was saved.';
      newsletterForm.reset();
    });
    emailInput.addEventListener('input', () => {
      emailInput.classList.remove('is-invalid');
      emailInput.setAttribute('aria-invalid', 'false');
      newsletterForm.classList.remove('has-error');
    });
  }

  // Close the mobile navigation after selecting an in-page destination.
  document.querySelectorAll('#storeNavigation .nav-link').forEach((link) => {
    link.addEventListener('click', () => {
      const nav = document.getElementById('storeNavigation');
      if (nav && nav.classList.contains('show') && window.bootstrap) {
        bootstrap.Collapse.getOrCreateInstance(nav).hide();
      }
    });
  });
});
