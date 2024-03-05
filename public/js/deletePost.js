document.querySelectorAll('.delete-post-btn').forEach(button => {
    button.addEventListener('click', async event => {
      const postId = event.target.getAttribute('data-id');
  
      const response = await fetch(`/api/posts/${postId}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.reload(); // Reload the page to reflect the deleted post
      } else {
        alert('Failed to delete post.');
      }
    });
  });
  