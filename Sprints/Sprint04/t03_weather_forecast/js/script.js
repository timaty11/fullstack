let apiKey = 'df3e58797eabed880e79e37445389f8d';
let city = 'Kharkiv';

let url = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&lang=ru&units=metric&appid=${apiKey}`;

axios.get(url).then((res) => {
  // console.log(res);
  var today = new Date();

  let day = document.querySelectorAll('.day');
  for (let i = 0; i < 7; i++) {
    day[i].querySelector('.tempr').innerHTML = `${Math.round(res.data.list[i].main.temp)}` + `°`;
    day[i].querySelector('.date').innerHTML = `${today.getDate() + i}` + `.` + `${today.getMonth()}`;
    
    if (res.data.list[i].weather.main === "Clouds") {
      day[i].querySelector('.weather_type_img').src = "assets/images/blizzard.jpg";
    } else if (res.data.list[i].weather.main === "Rain") {
      day[i].querySelector('.weather_type_img').src = "assets/images/snow.jpg";
    } else if (res.data.list[i].weather.main === "Clear") {
      day[i].querySelector('.weather_type_img').src = "assets/images/sun.jpg";
    }
  }
});
