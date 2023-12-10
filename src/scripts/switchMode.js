const svgList = document.querySelector('.blog__svg-list');
const svgGrid = document.querySelector('.blog__svg-grid');

const pathsList = svgList.querySelectorAll('path');
const pathsGrid = svgGrid.querySelectorAll('path');

const savedView = localStorage.getItem('view');

document.querySelector('.blog__btn-list').addEventListener('click', () => {
  switchMode('#EA1313', 'black', 'list');
});

document.querySelector('.blog__btn-grid').addEventListener('click', () => {
  switchMode('black', '#EA1313', 'grid');
});

function switchMode(colorOne, colorTwo, view) {
  const wrap = document.querySelector('.blog__wrapper');
  const posts = document.querySelectorAll('.post');
  const contents = document.querySelectorAll('.post__content');

  pathsList.forEach((path) => {
    path.setAttribute('stroke', colorOne);
  });
  pathsGrid.forEach((path) => {
    path.setAttribute('stroke', colorTwo);
  });

  localStorage.setItem('view', view);

  if (view == 'list') {
    wrap.classList.remove('blog__wrapper--grid');
    wrap.classList.add('blog__wrapper--list');

    posts.forEach((post) => post.classList.add('post--list'));

    contents.forEach((content) => content.classList.add('post__content--list'));
  } else {
    wrap.classList.remove('blog__wrapper--list');
    wrap.classList.add('blog__wrapper--grid');

    posts.forEach((post) => post.classList.remove('post--list'));

    contents.forEach((content) => content.classList.remove('post__content--list'));
  }
}

savedView == 'list'
  ? document.querySelector('.blog__btn-list').click()
  : document.querySelector('.blog__btn-grid').click();
