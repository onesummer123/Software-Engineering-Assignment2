const holidaySettings = {
  "async": true,
  "crossDomain": true,
  "dataType": 'JSON',
  method: 'GET',
  url: 'https://public-holiday.p.rapidapi.com/2019/US',
  headers: {
    'X-RapidAPI-Key': '4c047b424emsh364eb1816930b1cp154f9ejsna83ae8c7669b',
    'X-RapidAPI-Host': 'public-holiday.p.rapidapi.com'
  }
};

function getHolidays() {
  const year = document.getElementById("year").value;
  const countryAbb = document.getElementById("countryAbb").value;

  holidaySettings.url = "https://public-holiday.p.rapidapi.com/"+ year + "/" + countryAbb;
  $.ajax(holidaySettings).done(function (response) {
    var holidayList = JSON.stringify(response,null,4);
      console.log(holidayList);
      document.getElementById("holidayList").innerHTML = "Weather List:\n" + holidayList;
  });
}

    


