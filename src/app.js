function changeCity(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#city-search-input");
  let h1Element = document.querySelector("#city-search-one");
  let h2Element = document.querySelector("#city-searh-two");
  h1Element.innerHTML = searchInput.value;
  h2Element.innerHTML = searchInput.value;
}

let citySearchElement = document.querySelector("#city-search-form");
citySearchElement.addEventListener("submit", changeCity);
