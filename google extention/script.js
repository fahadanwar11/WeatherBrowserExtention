const apiKey = "238da12af9b741cda85201017241703";

document.addEventListener('DOMContentLoaded', function() {
    console.log("event listener is working.")
    const weatherButton2 = document.getElementById('weatherButton2');
    let id = 4534
    if (weatherButton2) {
        weatherButton2.addEventListener('click', getWeather2);            
    }
});

const getWeather2 = async () => {
      const cityName = document.getElementById('fieldText').value;
      const response  = await fetch(`http://api.weatherapi.com/v1/current.json?key=238da12af9b741cda85201017241703&q=${cityName}&aqi=no`)
      if (response.status===200){
          const data = await response.json();
          const country = data.location.country;
          const city =  data.location.name;
          const temperature = data.current.temp_c;
          const icon = data.current.condition.icon;
  
          document.getElementById('city2').textContent = city+',';
          document.getElementById('country2').textContent = country;
          document.getElementById('temperature2').textContent = `Temperature: ${temperature}°C`;
          document.getElementById('weatherIcon2').src = "http:" + icon; 
          document.getElementById('error2').style.display= 'none';

                  // Hide error message and show weather information
        document.getElementById('error2').style.display = 'none';
        document.getElementById('city2').style.display = 'block';
        document.getElementById('country2').style.display = 'block';
        document.getElementById('temperature2').style.display = 'block';
        document.getElementById('weatherIcon2').style.display = 'block';
      }
      else{
        document.getElementById('error2').style.display= 'block'
        document.getElementById( 'error2' ).textContent="City not found! Try again."
        document.getElementById('city2').style.display= 'none'
        document.getElementById('country2').style.display= 'none'
        document.getElementById('temperature2').style.display= 'none'
        document.getElementById('weatherIcon2').style.display= 'none'


      }

}

document.addEventListener('DOMContentLoaded', function() {
    const weatherButton = document.getElementById('weatherButton');
    if (weatherButton) {
        weatherButton.addEventListener('click', getWeather);
    }
});

const getWeather = async () => {
    const response  = await fetch("http://api.weatherapi.com/v1/current.json?key=238da12af9b741cda85201017241703&q=Lahore&aqi=no")
    if (response.status===200){
        const data = await response.json();
        const country = data.location.country;
        const city =  data.location.name;
        const temperature = data.current.temp_c;
        const icon = data.current.condition.icon;

        document.getElementById('city').textContent = city+',';
        document.getElementById('country').textContent = country;
        document.getElementById('temperature').textContent = `Temperature: ${temperature}°C`;
        document.getElementById('weatherIcon').src = "http:" + icon; 
        document.getElementById('weatherButton').innerHTML="";
        document.getElementById('weatherButton').style.display = "none"; 
    } else{
        console.log("error.")
    }
}
