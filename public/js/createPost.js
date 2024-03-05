// public/js/createPost.js
document.addEventListener('DOMContentLoaded', function () {
    const createPostButton = document.getElementById('createPostButton');
    const postForm = document.getElementById('postForm');
  
    createPostButton.addEventListener('click', () => {
      // Toggle the display of the post creation form
      postForm.style.display = postForm.style.display === 'none' ? 'block' : 'none';
    });
  });
  