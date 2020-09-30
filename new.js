
var lng = 0;
var lat = 0;
let coord = "&lon=" + lng + "&lat=" + lat;// newcode
console.log(coord) // newcode
showPosition = function (position) {

	lng = position.coords.longitude;
	lat = position.coords.latitude;

	console.log(lng)
	console.log(lat)

	document.querySelector("#lng_id").innerHTML = lng;
	document.querySelector("#lat_id").innerHTML = lat;

	localStorage.setItem("geo_lng", lng)
	localStorage.setItem("geo_lat", lat)
}
navigator.geolocation.getCurrentPosition(showPosition);


create_user_data = function (lon, lat, cuisine, radius) {

	var userData = {
		lon: lon,
		lat: lat,
		cuisine: cuisine,
		radius: radius
	}
	var saved_locations = localStorage.getItem("saved_locations")
	save_data = [];
	if (saved_locations == null) {
		save_data = [userData]
	}
	else {
		console.log(saved_locations);
		var save_data = JSON.parse(saved_locations);
		save_data.push(userData)
	}
	string_save_data = JSON.stringify(save_data);
	localStorage.setItem("saved_locations", string_save_data);
}

add_search_term = function () {
	var radius_select = document.querySelector("#selectRadius").value;
	localStorage.setItem("geo_radius", radius_select);

	var resto_type = document.querySelector("#selectResto").value;
	localStorage.setItem("geo_resto_type", resto_type);

	create_user_data(lng, lat, resto_type, radius_select)

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

// Random cuisine selector for suggestion  // newcode (till the end)
const cuisineArray = [
  "barbeque restaurant",
  "African restaurant",
  "american restaurant",
  "bakery",
  "Brazilian restaurant",
  "burger restaurant",
  "Chinese restaurant",
  "European restaurant",
  "fast food restaurant",
  "fish and chip shop",
  "French restaurant",
  "Greek restaurant",
  "ice cream restaurant",
  "Indian restaurant",
  "Italian restaurant",
  "kebab restaurant",
  "Korean restaurant",
  "Malaysian restaurant",
  "Mexican restaurant",
  "Nepalese restaurant",
  "Pakistani restaurant",
  "Pizza restaurant",
  "Thai restaurant",
  "Veitnamese restaurant",
  "Japanese restaurant",
];

let cuisine = cuisineArray[Math.floor(Math.random() * cuisineArray.length)];
console.log(cuisine)

let cuisineFormated = pluser(cuisine).toLowerCase();
console.log(cuisineFormated);

function extractRandomElement(array) {
  const count = array.length;
  const randomNum = Math.floor(Math.random() * count);
  return array.splice(randomNum, 1);
}

// Teaser API on page load
const apiGoogle =
  "https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/textsearch/json?query=";
const apiKey = "AIzaSyCP7aE4l93z0xlByZkAJezFyBoLmB_tVSQ";
function runApi() {}
let queryURLFood = apiGoogle + cuisineFormated + coord + "&radius=5&key=" + apiKey;
console.log(queryURLFood);
$.ajax({
  url: queryURLFood,
  method: "GET",
}).then(function (response) {
  let foodresults = response.results;
  const suggestion = extractRandomElement(foodresults);
  $("#list1").text("test");

  console.log(foodresults);
  console.log(suggestion);

  let rest1name = suggestion[0].name;
  $("#name1").text(rest1name);
      let restName = suggestion[0].name;

      $("#name1").text(restName);
      changeImage(cuisineFormated);

      function changeImage() {
        var image1 = document.getElementById("image1");
        if (cuisineFormated.match("japanese")) {
          image1.src = "assets/jp.jpg";
        } else if (cuisineFormated.match("chinese")) {
          image1.src = "assets/cn.jpg";
        } else if (cuisineFormated.match("korean")) {
          image1.src = "assets/kr.jpg";
        } else if (cuisineFormated.match("thai")) {
          image1.src = "assets/th.jpg";
        } else if (cuisineFormated.match("malaysian")) {
          image1.src = "assets/my.jpg";
        } else if (cuisineFormated.match("veitnamese")) {
          image1.src = "assets/vn.jpg";
        } else if (cuisineFormated.match("pakistani")) {
          image1.src = "assets/pk.jpg";
        } else if (cuisineFormated.match("indian")) {
          image1.src = "assets/in.jpg";
        } else if (cuisineFormated.match("nepalese")) {
          image1.src = "assets/np.jpg";
        } else if (cuisineFormated.match("italian")) {
          image1.src = "assets/it.jpg";
        } else if (cuisineFormated.match("greek")) {
          image1.src = "assets/gr.jpg";
        } else if (cuisineFormated.match("french")) {
          image1.src = "assets/fr.jpg";
        } else if (cuisineFormated.match("pizza")) {
          image1.src = "assets/pz.jpg";
        } else if (cuisineFormated.match("mexican")) {
          image1.src = "assets/mx.jpg";
        } else if (cuisineFormated.match("brazilian")) {
          image1.src = "assets/br.jpg";
        } else if (cuisineFormated.match("burgers")) {
          image1.src = "assets/bg.jpg";
        } else if (cuisineFormated.match("african")) {
          image1.src = "assets/afr.jpg";
        } else if (cuisineFormated.match("ice")) {
          image1.src = "assets/ic.jpg";
        } else if (cuisineFormated.match("bakeries")) {
          image1.src = "assets/bk.jpg";
         } else if (cuisineFormated.match("barbeque")) {
          image1.src = "assets/bbq.jpg";
        } else if (cuisineFormated.match("kebabs")) {
          image1.src = "assets/keb.jpg";
        } else if (cuisineFormated.match("fish")) {
          image1.src = "assets/fc.jpg";
        } else if (cuisineFormated.match("asian")) {
          image1.src = "assets/asian.jpg";
        } else if (cuisineFormated.match("european")) {
          image1.src = "assets/european.jpg";
        } else if (cuisineFormated.match("american")) {
          image1.src = "assets/american.jpg";
        } else if (cuisineFormated.match("fast")) {
          image1.src = "assets/fastfood.jpg";
        } else {
          image1.src = "assets/food.png";
        }
      }
    });

function pluser(str) {
  let withplus = str.replace(/ /g, "+");
  return withplus;
}