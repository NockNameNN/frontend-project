const buttons = document.querySelectorAll('.faq__btn');
const descriptions = document.querySelectorAll('.faq__description');
const svgs = document.querySelectorAll('.faq__svg');

buttons.forEach((button, index) => {
  button.addEventListener('click', () => {
    openDescription(index);
  });
});

function openDescription(index) {
  descriptions.forEach((description) => {
    description.classList.add('hidden');
  });

  svgs.forEach((svg) => {
    svg.classList.remove('faq__svg--rotate');
  });

  descriptions[index].classList.remove('hidden');

  svgs[index].classList.add('faq__svg--rotate');
}
