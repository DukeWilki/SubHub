
showPosition = function (position) {

	var lng = position.coords.longitude;
	var lat = position.coords.latitude;

	console.log(lng)
	console.log(lat)

	document.querySelector("#lng_id").innerHTML = lng;
	document.querySelector("#lat_id").innerHTML = lat;

	localStorage.setItem("geo_lng", lng)
	localStorage.setItem("geo_lat", lat)
}
navigator.geolocation.getCurrentPosition(showPosition);

add_search_term = function () {
	var radius_select = document.querySelector("#selectRadius").value;
	localStorage.setItem("geo_radius", radius_select);

	var resto_type = document.querySelector("#selectResto").value;
	localStorage.setItem("geo_resto_type", resto_type);

	window.location = "display_page.html";
}

render_dropdown_resto = function () {

	$.ajax({
		url: 'https://developers.zomato.com/api/v2.1/cuisines?lat=-33.9547434&lon=151.1053804',
		type: 'GET',
		headers: {
			'Accept': 'application/json',
			'user-key': '143816ae91118f8fc4dfd5768132705f'
		},
		success: render_dropdown_resto_callback
	})
}

render_dropdown_resto_callback = function (response) {
	//console.log(response);
	var cuisines = response.cuisines;
	for (var idx = 0; idx < cuisines.length; idx++) {
		var cuisine_item = cuisines[idx];
		var type_of_resto = cuisine_item.cuisine.cuisine_name;


		$('#selectResto').append(
			'<option value="' + type_of_resto + '">' + type_of_resto + '</option>'
		)
	}
	$('#selectResto').selectpicker('refresh');
}

render_dropdown_resto();
