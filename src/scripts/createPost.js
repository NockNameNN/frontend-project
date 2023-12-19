import { switchMode } from './switchMode.js';

const form = document.querySelector('.blog__form');

const btn_add = document.querySelector('.blog__btn');
const btn_cancel = document.querySelector('.form__btn--cancel');
const btn_create = document.querySelector('.form__btn--create');

function resetForm() {
  form.classList.add('hidden');
  btn_add.classList.remove('hidden');
  document.querySelector('.form').reset();
}

btn_add.addEventListener('click', () => {
  form.classList.remove('hidden');
  btn_add.classList.add('hidden');
});

btn_cancel.addEventListener('click', () => {
  resetForm();
});

btn_create.addEventListener('click', () => {
  const title = document.querySelector('#title');
  const image = document.querySelector('#image');
  const description = document.querySelector('#description');

  if (title.value.trim() === '' || image.value.trim() === '' || description.value.trim() === '') {
    return;
  }

  const currentDate = new Date();
  const options = { year: 'numeric', month: 'short', day: 'numeric' };
  const formattedDate = currentDate.toLocaleDateString('en-US', options);
  const time = Math.floor(Math.random() * 15) + 1;

  const newPost = document.createElement('article');
  newPost.className = 'post';

  const postImage = document.createElement('img');
  postImage.src = image.value;
  postImage.alt = '';
  postImage.className = 'post__image';
  newPost.appendChild(postImage);

  const postContent = document.createElement('div');
  postContent.className = 'post__content';

  const postTitle = document.createElement('h3');
  postTitle.className = 'post__title';
  postTitle.textContent = title.value;
  postContent.appendChild(postTitle);

  const postDescription = document.createElement('p');
  postDescription.className = 'post__description';
  postDescription.textContent = description.value;
  postContent.appendChild(postDescription);

  const postSupport = document.createElement('p');
  postSupport.className = 'post__support';
  postSupport.textContent = `${formattedDate} · ${time} min read`;
  postContent.appendChild(postSupport);

  newPost.appendChild(postContent);

  const blogWrapper = document.querySelector('.blog__wrapper');
  blogWrapper.appendChild(newPost);

  const savedView = localStorage.getItem('view');
  switchMode(savedView);

  resetForm();
});
