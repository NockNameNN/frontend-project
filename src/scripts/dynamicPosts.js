import { switchMode } from './switchMode.js';

document.addEventListener('DOMContentLoaded', () => {
  fetch('https://techcrunch.com/wp-json/wp/v2/posts?per_page=6')
    .then((response) => response.json())
    .then((posts) => {
      const blogWrapper = document.querySelector('.blog__wrapper');
      posts.forEach((post) => {
        const newPost = createPostElement(post);
        blogWrapper.appendChild(newPost);
      });
      const savedView = localStorage.getItem('view');
      switchMode(savedView);
    })
    .catch((error) => console.error('Ошибка:', error));
});

function createPostElement(post) {
  const newPost = document.createElement('article');
  newPost.classList.add('post');

  const postImage = document.createElement('img');
  postImage.src = post.jetpack_featured_media_url;
  postImage.alt = '';
  postImage.classList.add('post__image');
  newPost.appendChild(postImage);

  const postContent = document.createElement('div');
  postContent.classList.add('post__content');

  const postTitle = document.createElement('h3');
  postTitle.classList.add('post__title');
  postTitle.textContent = post.title.rendered;
  postContent.appendChild(postTitle);

  const postDescription = document.createElement('p');
  postDescription.classList.add('post__description');
  postDescription.textContent = post.excerpt.rendered;
  postContent.appendChild(postDescription);

  const postDate = new Date(post.date);
  const formattedDate = postDate.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  const readingTime = Math.floor(Math.random() * 15) + 1;

  const postSupport = document.createElement('p');
  postSupport.classList.add('post__support');
  postSupport.textContent = `${formattedDate} · ${readingTime} min read`;
  postContent.appendChild(postSupport);

  newPost.appendChild(postContent);
  return newPost;
}
