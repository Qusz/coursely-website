const ELEMENTS = {
  accordion: '[data-accordion]',
  header: '[data-accordion-header]',
  body: '[data-accordion-body]',
};

const activeClass = 'accordion--active';

export default function() {
  const accordions = document.querySelectorAll(ELEMENTS.accordion),
        headers = document.querySelectorAll(ELEMENTS.header),
        bodys = document.querySelectorAll(ELEMENTS.body);

  headers.forEach((item, index) => {
    item.addEventListener('click', () => {
      let currentParent = accordions[index];
      let currentBody = bodys[index];

      currentParent.classList.toggle(activeClass);

      if (currentBody.style.maxHeight) {
        currentBody.style.maxHeight = null;
      } else {
        currentBody.style.maxHeight = currentBody.scrollHeight + 'px';
      }
    });
  });
}