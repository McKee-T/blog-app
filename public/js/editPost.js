document.querySelectorAll('.edit-post-btn').forEach(button => {
    button.addEventListener('click', async event => {
      const postId = event.target.getAttribute('data-id');
      const newTitle = prompt('Enter your new title:');
      const newContent = prompt('Enter your new post content:');
  
      if (newTitle && newContent) {
        const response = await fetch(`/api/posts/${postId}`, {
          method: 'PUT',
          body: JSON.stringify({ title: newTitle, content: newContent }),
          headers: { 'Content-Type': 'application/json' },
        });
  
        if (response.ok) {
          document.location.reload();
        } else {
          alert('Failed to update post.');
        }
      }
    });
  });
  