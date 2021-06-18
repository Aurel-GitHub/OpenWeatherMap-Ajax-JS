let btnCity = document.querySelector("#changer");
let searchBar = document.querySelector('#search-bar');
let searchBtn = document.querySelector('#search-btn');
let inputCity = document.querySelector("#input-city");
inputCity.style.visibility = "hidden";

btnCity.addEventListener("click", () => {
  if (getComputedStyle(inputCity).visibility != "visible")
    inputCity.style.visibility = "visible";
  else {
    inputCity.style.visibility = "hidden";
  }
});

searchBtn.addEventListener('click', () => {
  const url = "https://api.openweathermap.org/data/2.5/weather?q=" + searchBar.value + "&appid=fcb286ef3f27f996695ed8886000ed66&units=metric";
    let request = new XMLHttpRequest();
    request.open('GET', url);
    request.responseType = 'json';
    request.send();

    request.onload = function() {
        if(request.readyState === XMLHttpRequest.DONE) {
            if(request.status === 200) {
                let response = request.response;
                document.querySelector('#ville').textContent = response.name;
                document.querySelector('#temperature_label').textContent = response.main.temp;
            }
        }
    }
})
