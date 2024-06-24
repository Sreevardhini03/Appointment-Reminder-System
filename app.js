document.getElementById('appointment-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const date = document.getElementById('date').value;
    const location = document.getElementById('age').value;
    const image = document.getElementById('image').files[0];

    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('date', date);
    formData.append('age', location);
    formData.append('image', image);

    console.log('Event Created:', {
        title,
        description,
        date,
        age,
        image
    });

    alert('Event created successfully!');
});