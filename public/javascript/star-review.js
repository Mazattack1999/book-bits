async function starReview() {
    event.preventDefault();

    const star_rating = document.querySelector('input[name="star_rating"]').value;

    const response = await fetch('/api/review', {
        method: 'POST',
        body: JSON.stringify({
            star_rating
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    console.log(response)

    
}