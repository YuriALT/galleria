import {
    pictures
} from "./Data/pictures.js";

function searchPicture() {
    const searchField = document.getElementById('search-field');
    const searchTerm = searchField.value.trim();

    // Search by artist and picture name 

    const searchResult = pictures.filter(pic => {
        const comboSearch = pic.aName.toLowerCase() + pic.pName.toLowerCase();
        return comboSearch.includes(searchTerm.toLowerCase());
    });

    displayPictures(searchResult);

}

const searchButton = document.getElementById('search-btn');
searchButton.addEventListener('click', searchPicture);



// Take pictures data and add it into the html of each card
function displayPictures(pictureData) {
    const container = document.getElementById('pictures-container');
    let html = '';

    pictureData.forEach(pic => {
        html +=
            `<div class="card" style="width: 18rem;">
              <img src="${pic.getImage()}"
                  class="card-img-top" alt="...">
              <div class="card-body">
                  <h5 class="card-title">${pic.getPicName()}</h5>
                  <p class="card-text">
                      ${pic. getArtistName()}</p>
                  <p class="card-text">
                      ${pic.getPrice()}</p>
                  <p class="card-text text-danger">
                      ${pic.getStatus()}</p> 
              </div>
          </div>`;
    })

    container.innerHTML = html;

}

displayPictures(pictures);