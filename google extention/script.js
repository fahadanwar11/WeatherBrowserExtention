const apiKey = "238da12af9b741cda85201017241703";


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
        document.getElementById('weatherButton2').style.display = "flex"; 
        document.getElementById('weatherButton2').textContent = "Reload"; 



    } else{
        console.log("error.")
    }
}
