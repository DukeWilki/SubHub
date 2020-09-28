
var lng = localStorage.getItem("geo_lng")
var lat = localStorage.getItem("geo_lat")
var keyword = localStorage.getItem("geo_resto_type")
var radiusSelect = localStorage.getItem("geo_radius")
var map = null;
var bounds = null;
var resto_bounds = null;
var service = null;

show_markers_on_map = function (json_response) {
	var result = json_response.restaurants;
	for (var idx = 0; idx < result.length; idx++) {
		var loc_item = result[idx]
		var lat = loc_item.restaurant.location.latitude;
		var lng = loc_item.restaurant.location.longitude;
		pos = {
			lat: parseFloat(lat),
			lng: parseFloat(lng)
		};
		var marker = new google.maps.Marker({
			position: pos,
			map: map,
			title: loc_item.name,
			customInfo: loc_item,
			website: loc_item.url
		});
		bounds.extend(marker.getPosition())
		resto_bounds.extend(marker.getPosition())
		google.maps.event.addListener(marker, "click",
			function (response) {
				var marker_location = this.position
				var location_data = this.customInfo

				console.log(location_data);

				document.querySelector("#icon_id").innerHTML = "<img width='250px' src='" + location_data.restaurant.featured_image + "'>"
				document.querySelector("#title_id").innerHTML = location_data.restaurant.name;
				document.querySelector("#address").innerHTML = location_data.restaurant.location.address;
				document.querySelector("#cuisines").innerHTML = location_data.restaurant.cuisines;
				document.querySelector("#rating").innerHTML = location_data.restaurant.user_rating.aggregate_rating;

				map.setCenter(marker_location);
			}
		)
	}
	map.fitBounds(bounds);
	setTimeout(
		function () {
			map.fitBounds(resto_bounds);
			/*
			setTimeout(
				function () {
					map.fitBounds(bounds);
				}, 2000
			)
			*/
		}, 2000
	)
}

get_nearby_places = function (current_position, keyword) {
	$.ajax({
		url: 'https://developers.zomato.com/api/v2.1/search?q=chinese&start=0&count=100&lat=-33.9646&lon=151.1010&radius=10000&order=desc',
		type: 'GET',
		headers: {
			'Accept': 'application/json',
			'user-key': '143816ae91118f8fc4dfd5768132705f'
		},
		success: show_markers_on_map
	})
}



initMap = function () {
	///// INIT DISPLAY ////

	document.querySelector("#keyword_id").innerHTML = keyword;

	pos = {
		lat: parseFloat(lat),
		lng: parseFloat(lng)
	};
	bounds = new google.maps.LatLngBounds();
	resto_bounds = new google.maps.LatLngBounds();
	map = new google.maps.Map(document.getElementById('map'), {
		center: pos,
		zoom: 15,
		mapTypeId: 'satellite'
	});
	var marker = new google.maps.Marker({
		position: pos,
		map: map,
		icon: "https://developers.google.com/maps/documentation/javascript/examples/full/images/library_maps.png"
	});
	bounds.extend(marker.getPosition())

	get_nearby_places(
		pos,
		keyword
	)
}
