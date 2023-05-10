const weatherSettings = {
    async: true,
    crossDomain: true,
    method: 'GET',
    url: 'https://visual-crossing-weather.p.rapidapi.com/history?startDateTime=2019-01-01T00%3A00%3A00' +
    '&aggregateHours=24&location=Washington%2CDC%2CUSA&endDateTime=2019-01-03T00%3A00%3A00&unitGroup' +
    '=us&dayStartTime=8%3A00%3A00&contentType=csv&dayEndTime=17%3A00%3A00&shortColumnNames=0',
    headers: {
        'X-RapidAPI-Key': '4c047b424emsh364eb1816930b1cp154f9ejsna83ae8c7669b',
        'X-RapidAPI-Host': 'visual-crossing-weather.p.rapidapi.com'
    }
};


function getWeather() {
    const city = document.getElementById("city").value;
    const province = document.getElementById("province").value;
    const country = document.getElementById("country").value;
    const date = document.getElementById("date").value;
  
    weatherSettings.url = "https://visual-crossing-weather.p.rapidapi.com/history?startDateTime="+date+"T00%3A00" +
        "%3A00&aggregateHours=24&location="+city+"%2C"+province+"%2C"+country+"&endDateTime=" +
        date+"T00%3A00%3A00&unitGroup" +
        "=us&dayStartTime=8%3A00%3A00&contentType=csv&dayEndTime=17%3A00%3A00&shortColumnNames=0"

    $.ajax(weatherSettings).done(function (response) {
        var weatherList = JSON.stringify(response, null, 5);
        console.log(weatherList);
        document.getElementById("weatherList").innerHTML = "Weather List:\n" + weatherList;
    });
}
