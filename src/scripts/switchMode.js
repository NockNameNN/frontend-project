document.querySelector('.blog__btn-list').addEventListener('click', () => {
  switchMode('list');
});

document.querySelector('.blog__btn-grid').addEventListener('click', () => {
  switchMode('grid');
});

export function switchMode(view) {
  const svgList = document.querySelector('.blog__svg-list');
  const svgGrid = document.querySelector('.blog__svg-grid');
  const wrap = document.querySelector('.blog__wrapper');
  const posts = document.querySelectorAll('.post');
  localStorage.setItem('view', view);

  if (view == 'list') {
    svgGrid.classList.remove('blog__svg--active');
    svgList.classList.add('blog__svg--active');

    wrap.classList.remove('blog__wrapper--grid');
    wrap.classList.add('blog__wrapper--list');

    posts.forEach((post) => post.classList.add('post--list'));
  } else {
    svgGrid.classList.add('blog__svg--active');
    svgList.classList.remove('blog__svg--active');

    wrap.classList.remove('blog__wrapper--list');
    wrap.classList.add('blog__wrapper--grid');

    posts.forEach((post) => post.classList.remove('post--list'));
  }
}
