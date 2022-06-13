// function to add a comment to a posted review
async function newCommentFormHandler(event) {
    event.preventDefault();

    const urlArray = window.location.toString().split('/');
    const review_id = urlArray[urlArray.length - 1];
  
    const comment_text = document.querySelector('textarea[name="comment-body"]').value;


    const response = await fetch('/api/comments', {
      method: 'POST',
      body: JSON.stringify({
        comment_text,
        review_id,    
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    console.log(response)
    
  // reloads the page to display new comment if response succesfully exicuted 
    if (response.ok) {
        document.location.reload();
    } else {
      alert(response.statusText);
    }
  }
  
  document.querySelector('.comment-form').addEventListener('submit', newCommentFormHandler);