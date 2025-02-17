console.log("Script is running...");
const apiUrl = './travel_recommendation_api.json'; // Run a local server
window.onload = function() {
  const apiUrl = './travel_recommendation_api.json'; // Run a local server

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      const allCities = data.countries.flatMap(country => country.cities);
      

      const searchInput = document.getElementById('searchinput');
      const searchButton = document.getElementById('serachButoon');
      const imageContainer = document.getElementById('imageContainer');
      const h1Container = document.getElementById('name');
      const pContainer = document.getElementById('description');

      // Event listener for the search button
      searchButton.addEventListener('click', () => {
        const searchQuery = searchInput.value.toLowerCase();

        // Clear previous results
        imageContainer.innerHTML = '';
        h1Container.innerHTML = '';
        pContainer.innerHTML = '';

        // Filter cities based on the search query
        const filteredCities = allCities.filter(city =>
          city.name.toLowerCase().includes(searchQuery)
        );
        if(filteredCities.length > 0) {
            filteredCities.forEach(city => {
                const nameOftheCity = city.name;
                const nameElement = document.createElement('h1');
                nameElement.innerHTML = nameOftheCity;
                h1Container.appendChild(nameElement);

            });
        }else{
            h1Container.innerHtml ='lipsva ime ';
        }
        if(filteredCities.length > 0) {
            filteredCities.forEach(city => {
                const descriptionOfthecity = city.description;
                const descriptionElement = document.createElement('p');
                descriptionElement.innerHTML = descriptionOfthecity;
                pContainer.appendChild(descriptionElement);

            });
        }else{
            pContainer.innerHtml ='lipsva opisanie ';
        }

        // Display images of the filtered cities
        if (filteredCities.length > 0) {
          filteredCities.forEach(city => {
            const imageUrl = city.imageUrl;

            // Create an img element for each matching city
            const imgElement = document.createElement('img');
            imgElement.src = imageUrl;
            imgElement.alt = city.name;
            imgElement.style.width = '200px'; // Optional: adjust image size
            imgElement.style.margin = '10px'; // Optional: add spacing between images

            // Append the image to the image container
            imageContainer.appendChild(imgElement);
          });
        } else {
          imageContainer.innerHTML = '<p>No cities found matching your search.</p>';
        }
      });
    })
    .catch(error => {
      console.error("Ne stanaha neshtata", error);
    });
};


