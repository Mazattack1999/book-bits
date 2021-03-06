// function to create a new book review
async function newReviewFormHandler(event) {
    event.preventDefault();
  
    const book_title = document.querySelector('input[name="review-title"]').value;
    const author = document.querySelector('input[name="author"]').value;
    const star_rating = document.querySelector('input[name="star_rating"]').value;
    const review_text = document.querySelector('textarea[name="review"]').value;

    // fetches review data criteria
    const response = await fetch('/api/reviews', {
      method: 'POST',
      body: JSON.stringify({
        book_title,
        author,
        review_text,
        star_rating
        
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    console.log(response)
    
  // if review response is ok direct page to the dashboard/homepage
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
}
  
  document.querySelector('.new-review-form').addEventListener('submit', newReviewFormHandler);