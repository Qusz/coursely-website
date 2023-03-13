export default function () {
  const accordion = document.querySelectorAll('[data-accordion]');
  const header = document.querySelectorAll('[data-accordion-header]');
  const body = document.querySelectorAll('[data-accordion-body]');

  const activeClass = 'accordion--active';

  header.forEach((item, index) => {
    item.addEventListener('click', () => {
      const currentParent = accordion[index];
      const currentBody = body[index];

      currentParent.classList.toggle(activeClass);

      if (currentBody.style.maxHeight) {
        currentBody.style.maxHeight = null;
      } else {
        currentBody.style.maxHeight = `${currentBody.scrollHeight}px`;
      }
    });
  });
}
