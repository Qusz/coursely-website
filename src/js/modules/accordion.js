export default function() {
  const accordion = document.querySelectorAll('[data-accordion]'),
        header = document.querySelectorAll('[data-accordion-header]'),
        body = document.querySelectorAll('[data-accordion-body]');

  const activeClass = 'accordion--active';

  header.forEach((item, index) => {
    item.addEventListener('click', () => {
      let currentParent = accordion[index];
      let currentBody = body[index];

      currentParent.classList.toggle(activeClass);

      if (currentBody.style.maxHeight) {
        currentBody.style.maxHeight = null;
      } else {
        currentBody.style.maxHeight = currentBody.scrollHeight + 'px';
      }
    });
  });
}