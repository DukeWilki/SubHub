


function displayFoodMessage() {

    var citySearch = $("#").va; length();
    var queryURLOpenWeather = "https://api.openweathermap.org/data/2.5/weather?q=" + citySearch + "&appid=48eb8f7025236f284142f7fe0b9f55b4&units=metric";

    $ajax({
        url: queryURLOpenWeather,
        method: "GET"
    }).then(function (response) {

        var weatherTemp = Math.round(response.main.temp);

        if (weatherTemp <= 0) {
            $()
        }
    })





}