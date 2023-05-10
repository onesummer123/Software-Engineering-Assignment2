const rentalSettings = {
	async: true,
	crossDomain: true,
	url: 'https://hotels4.p.rapidapi.com/locations/search?query=Beijing&locale=en_US',
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '4c047b424emsh364eb1816930b1cp154f9ejsna83ae8c7669b',
		'X-RapidAPI-Host': 'hotels4.p.rapidapi.com'
	}
};

  
function getRental() {
	const cityName = document.getElementById("cityName").value;
	rentalSettings.url = "https://hotels4.p.rapidapi.com/locations/search?query="+cityName+"&locale=en_US"
	$.ajax(rentalSettings).done(function (response) {
		var rentalList = JSON.stringify(response, null, 5);
		console.log(rentalList);
		document.getElementById("rentalList").innerHTML = "Rental List:\n" + rentalList;
	});
}
