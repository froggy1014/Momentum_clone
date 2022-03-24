// function onGeoOk(position){
//     const lat = position.coords.latitude;
//     const lng = position.coords.longitude;
//     console.log("You live in", lat, lng);
// }
const whticon = document.querySelector(".whticon");
const whttemp = document.querySelector(".whttemp");
const whtlocation = document.querySelector(".whtlocation");

function onGeoError(){
    alert("Can't find you. No weather for you.");
}

 function weathercondition(icon){
    if(icon == "01d" || "01n")
        return iconHtml = `<i class="fa-solid fa-sun"></i>`;
    else if(icon == "02d" || "02n")
        return iconHtml = `<i class="fa-solid fa-cloud-sun"></i>`;
    else if(icon == "03d" || "03n")
        return iconHtml = `<i class="fa-solid fa-cloud"></i>`;
    else if(icon == "04d" || "04n")
        return iconHtml = `<i class="fa-solid fa-clouds"></i>
        `;
    else if(icon == "09d" || "09n")
        return iconHtml = `<i class="fa-solid fa-cloud-drizzle"></i>`
    else if(icon == "10d" || "10n")
        return iconHtml = `<i class="fa-solid fa-cloud-rain"></i>
        `;
    else if(icon == "11d" || "11n")
        return iconHtml = `<i class="fa-solid fa-cloud-bolt"></i>`;
    else if(icon == "13d" || "13n")
        return iconHtml = `<i class="fa-solid fa-snowflake"></i>`;
    else if(icon == "50d" || "50n")
        return iconHtml = `<i class="fa-solid fa-snowflake"></i>`;
 }

function getweather(position)
{
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const apikey = "a8b9872d758402a1ab1378cf6e2d624c"

    fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${apikey}&units=metric&lang=kr`
    )
    .then(function(response){
        return response.json();
      })
        .then(function(json){
        //   console.log(json);
         const icon = json.weather[0].icon
         const temparature = json.main.temp;  
         const place = json.name;  
        //  console.log(icon, temparature, place) 
         weathercondition(icon)
         whticon.innerHTML = iconHtml;
         whttemp.innerText = temparature+" ℃ ";
         whtlocation.innerText = place;
         
         
 });
}




//AIzaSyD1bCMTEwJEgF7OJ1STJEy_rBmokUPcbyQ


navigator.geolocation.getCurrentPosition(getweather, onGeoError);
