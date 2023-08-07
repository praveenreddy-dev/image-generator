function fetchImage() {
    const imageName = document.getElementById('searchImage').value;
    console.log(imageName);
    if (imageName) {
      searchImage(imageName, document.getElementById('display-images'));
    } else {
      alert('Please enter the image name.');
    }
  }

  function searchImage(imageName, displayImage) {
    const API_KEY = 'your access key from unsplash';
    const imageUrl = `https://api.unsplash.com/search/photos?query=${imageName}&client_id=${API_KEY}`;

    fetch(imageUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network request failed');
        }
        return response.json();
      })
      .then(data => {
        displayImage.innerHTML = ''; // Clear previous images
        data.results.forEach(image => {
          const imageUrl = image.urls.regular;
          const imgElement = document.createElement('img');
          imgElement.src = imageUrl;
          imgElement.alt = 'Unsplash Image';
          imgElement.width = 200;
          displayImage.appendChild(imgElement);
        });
      })
      .catch(error => {
        alert('Error fetching images. Please try again later.');
        console.error(error);
      });
  }