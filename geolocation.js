
showPosition = function(position)
{
	var lng = position.coords.longitude
	var lat = position.coords.latitude 

	console.log ( lng ) 
	console.log ( lat ) 

	document.querySelector("#lng_id").innerHTML = lng;
	document.querySelector("#lat_id").innerHTML = lat;

	localStorage.setItem("geo_lng" , lng )
	localStorage.setItem("geo_lat" , lat )
}
navigator.geolocation.getCurrentPosition(showPosition);

add_search_term = function()
{
	var resto_type = document.querySelector("#search_resto_id").value;
	localStorage.setItem("geo_resto_type",resto_type)
	window.location = "display_page.html"
}
