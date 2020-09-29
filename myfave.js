

$(document).ready(

    function () {

        show_button_cuisine()
    }
)


show_button_cuisine = function () {

    var getUserData = JSON.parse(localStorage.getItem("saved_locations"));

    for (var i = 0; i < getUserData.length; i++) {

        console.log("getUserData", getUserData[i]);

        var getLonUser = getUserData[i].lon;

        var getLatUser = getUserData[i].lat;

        var getRestoType = getUserData[i].cuisine;

        var getRadiusUser = getUserData[i].radius;

        var cuisineIcon = $('<i class="fas fa-utensils"></i>');
        var cuisineText = $('<p>').text(getRestoType);
        var cuisineButton = $('<button>').attr({ "class": "col-md", "value": i, "onclick": "add_search_term(" + i + ")" });

        cuisineButton.append(cuisineIcon);
        cuisineButton.append(cuisineText);
        $('#cuisine-button').append(cuisineButton)

    }



}

add_search_term = function (i) {

    var getUserData = JSON.parse(localStorage.getItem("saved_locations"));


    var lng = getUserData[i].lon;

    var lat = getUserData[i].lat;

    var radius_select = getUserData[i].radius;

    var resto_type = getUserData[i].cuisine;


    //send_user_data(lng, lat, resto_type, radius_select)

    window.location = "display_page.html";
}