
var lng     = localStorage.getItem("geo_lng")
var lat     = localStorage.getItem("geo_lat")
var keyword = localStorage.getItem("geo_resto_type")
var map     = null;
var service = null;

get_nearby_places = function( current_position , keyword )
{
	var param = {
		location : current_position,
		rankBy : google.maps.places.RankBy.DISTANCE,
		keyword : keyword
	}
	service = new google.maps.places.PlacesService(map)
	service.nearbySearch( param , get_nearby_places_callback)
}

show_markers_on_map = function( result )
{
	for (var idx = 0 ; idx < result.length; idx++)
	{
		var loc_item = result[idx]
		var marker = new google.maps.Marker({
			position: loc_item.geometry.location, 
			map: map,
			title : loc_item.name,
			customInfo : loc_item
		});
		google.maps.event.addListener(marker, "click" ,
			function()
			{
				var marker_location = this.position
				var location_data    = this.customInfo

				document.querySelector("#icon_id").innerHTML = "<img src='"+location_data.icon+"'>"
				document.querySelector("#title_id").innerHTML = location_data.name;
				document.querySelector("#location_id").innerHTML = location_data.position;
				document.querySelector("#address").innerHTML = location_data.vicinity
				document.querySelector("#rating").innerHTML = location_data.rating

				map.setCenter( marker_location );
			}
		)
	}
}

get_nearby_places_callback = function(result, status)
{
	show_markers_on_map( result );
}


initMap = function()
{
	///// INIT DISPLAY ////
	
	document.querySelector("#keyword_id").innerHTML = keyword; 

        pos = {
		lat: parseFloat(lat), 
		lng: parseFloat(lng)
	};
        map = new google.maps.Map(document.getElementById('map'), {
            center: pos,
            zoom: 15,
	    mapTypeId: 'satellite'
	});	
	var marker = new google.maps.Marker({
		position: pos, 
		map: map,
		icon : "https://developers.google.com/maps/documentation/javascript/examples/full/images/library_maps.png"
	});

	get_nearby_places(
		pos,
		keyword
	)
}
