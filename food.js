const apiUrl =
  "https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/textsearch/json?query=";
let cuisine = "";
let suburb = "newtown";
const apiKey = "AIzaSyCP7aE4l93z0xlByZkAJezFyBoLmB_tVSQ";

// https://maps.googleapis.com/maps/api/place/textsearch/json?query=restaurants+in+mascot+nsw&key=AIzaSyAG5X8IQiZ0emZyh6rex3ikgZXNI3KH6Bo
// https://cors-anywhere.herokuapp.com/api.openweathermap.org/data/2.5/forecast?q=mascot+nsw&appid=fd40ccd7b40508e5a2e810c079536a1d

const asianBtn = document.getElementById("asianBtn");
const asianTags = document.getElementById("asianTags");

const southAsianBtn = document.getElementById("southAsianBtn");
const southAsianTags = document.getElementById("southAsianTags");

const europeanBtn = document.getElementById("europeanBtn");
const europeanTags = document.getElementById("europeanTags");

const middleEasternBtn = document.getElementById("middleEasternBtn");
const middleEasternTags = document.getElementById("middleEasternTags");

const americanBtn = document.getElementById("americanBtn");
const americanTags = document.getElementById("americanTags");

const fastFoodBtn = document.getElementById("fastFoodBtn");
const fastFoodTags = document.getElementById("fastFoodTags");

document.querySelectorAll(".topBtn").forEach((item) => {
  item.addEventListener("click", (event) => {
    asianTags.classList.add("hidden");
    southAsianTags.classList.add("hidden");
    europeanTags.classList.add("hidden");
    middleEasternBtn.classList.add("hidden");
    americanTags.classList.add("hidden");
    fastFoodTags.classList.add("hidden");
  });
});

asianBtn.addEventListener("click", showAsianTags);
function showAsianTags() {
  asianTags.classList.remove("hidden");
}
southAsianBtn.addEventListener("click", showSouthAsianTags);
function showSouthAsianTags() {
  southAsianTags.classList.remove("hidden");
}
europeanBtn.addEventListener("click", showeuropeanTags);
function showeuropeanTags() {
  europeanTags.classList.remove("hidden");
}
// middleEasternBtn.addEventListener("click", showmiddleEasternTags);
// function showmiddleEasternTags() {
//   middleEasternTags.classList.remove("hidden");
// }
americanBtn.addEventListener("click", showamericanTags);
function showamericanTags() {
  americanTags.classList.remove("hidden");
}
fastFoodBtn.addEventListener("click", showfastFoodTags);
function showfastFoodTags() {
  fastFoodTags.classList.remove("hidden");
}
function cuisineSearch() {
  let cuisine = console.log("cuisine = " + cuisine);
}
$(document).ready(function () {
  console.log("ready!");
  // runApi()
});

function extractRandomElement(array) {
  const count = array.length; // 5
  const randomNum = Math.floor(Math.random() * count);
  return array.splice(randomNum, 1);
}

// On page load
function runApi() {}
let queryURLFood = apiUrl + "restaurants+in+" + suburb + "+nsw&key=" + apiKey;
console.log(queryURLFood);
$.ajax({
  url: queryURLFood,
  method: "GET",
}).then(function (response) {
  let foodresults = response.results;
  const first = extractRandomElement(foodresults);
  const second = extractRandomElement(foodresults);
  const third = extractRandomElement(foodresults);
  $("#list1").text("test");

  console.log(foodresults);
  console.log(first);
  console.log(second);
  console.log(third);

  let rest1name = first[0].name;
  let rest2name = second[0].name;
  let rest3name = third[0].name;

  $("#name1").text(rest1name);
  $("#name2").text(rest2name);
  $("#name3").text(rest3name);
});

$(document).ready(function () {
  var cuisine = "";
  $(".subBtn").click(function () {
    cuisine = $(this).text().toLowerCase();
    let cuisineFormated = pluser(cuisine);
    console.log(cuisineFormated);
    runCuisineApi(cuisineFormated);

    function runCuisineApi() {}
    let queryURLCuisine =
      apiUrl +
      cuisineFormated +
      "+restaurants+in+" +
      suburb +
      "+nsw&key=" +
      apiKey;
    console.log(queryURLCuisine);
    $.ajax({
      url: queryURLCuisine,
      method: "GET",
    }).then(function (response) {
      let foodresults = response.results;
      const first = extractRandomElement(foodresults);
      const second = extractRandomElement(foodresults);
      const third = extractRandomElement(foodresults);
      $("#list1").text("test");

      console.log(foodresults);
      console.log(first);
      console.log(second);
      console.log(third);

      let rest1name = first[0].name;
      let rest2name = second[0].name;
      let rest3name = third[0].name;

      $("#name1").text(rest1name);
      $("#name2").text(rest2name);
      $("#name3").text(rest3name);
      changeImage(cuisineFormated);

      function changeImage() {
        var image1 = document.getElementById("image1");
        var image2 = document.getElementById("image2");
        var image3 = document.getElementById("image3");
        if (cuisineFormated.match("japanese")) {
          image1.src = "assets/jp.jpg";
          image2.src = "assets/jp.jpg";
          image3.src = "assets/jp.jpg";
        } else if (cuisineFormated.match("chinese")) {
          image1.src = "assets/cn.jpg";
          image2.src = "assets/cn.jpg";
          image3.src = "assets/cn.jpg";
        } else if (cuisineFormated.match("korean")) {
          image1.src = "assets/kr.jpg";
          image2.src = "assets/kr.jpg";
          image3.src = "assets/kr.jpg";
        } else if (cuisineFormated.match("thai")) {
          image1.src = "assets/th.jpg";
          image2.src = "assets/th.jpg";
          image3.src = "assets/th.jpg";
        } else if (cuisineFormated.match("malaysian")) {
          image1.src = "assets/my.jpg";
          image2.src = "assets/my.jpg";
          image3.src = "assets/my.jpg";
        } else if (cuisineFormated.match("veitnamese")) {
          image1.src = "assets/vn.jpg";
          image2.src = "assets/vn.jpg";
          image3.src = "assets/vn.jpg";
        } else if (cuisineFormated.match("southeast")) {
          image1.src = "assets/sea.jpg";
          image2.src = "assets/sea.jpg";
          image3.src = "assets/sea.jpg";
        } else if (cuisineFormated.match("pakistani")) {
          image1.src = "assets/pk.jpg";
          image2.src = "assets/pk.jpg";
          image3.src = "assets/pk.jpg";
        } else if (cuisineFormated.match("indian")) {
          image1.src = "assets/in.jpg";
          image2.src = "assets/in.jpg";
          image3.src = "assets/in.jpg";
        } else if (cuisineFormated.match("nepalese")) {
          image1.src = "assets/np.jpg";
          image2.src = "assets/np.jpg";
          image3.src = "assets/np.jpg";
        } else if (cuisineFormated.match("italian")) {
          image1.src = "assets/it.jpg";
          image2.src = "assets/it.jpg";
          image3.src = "assets/it.jpg";
        } else if (cuisineFormated.match("greek")) {
          image1.src = "assets/gr.jpg";
          image2.src = "assets/gr.jpg";
          image3.src = "assets/gr.jpg";
        } else if (cuisineFormated.match("french")) {
          image1.src = "assets/fr.jpg";
          image2.src = "assets/fr.jpg";
          image3.src = "assets/fr.jpg";
        } else if (cuisineFormated.match("pizza")) {
          image1.src = "assets/pz.jpg";
          image2.src = "assets/pz.jpg";
          image3.src = "assets/pz.jpg";
        } else if (cuisineFormated.match("mexican")) {
          image1.src = "assets/mx.jpg";
          image2.src = "assets/mx.jpg";
          image3.src = "assets/mx.jpg";
        } else if (cuisineFormated.match("brazilian")) {
          image1.src = "assets/br.jpg";
          image2.src = "assets/br.jpg";
          image3.src = "assets/br.jpg";
        } else if (cuisineFormated.match("burgers")) {
          image1.src = "assets/bg.jpg";
          image2.src = "assets/bg.jpg";
          image3.src = "assets/bg.jpg";
        } else if (cuisineFormated.match("african")) {
          image1.src = "assets/afr.jpg";
          image2.src = "assets/afr.jpg";
          image3.src = "assets/afr.jpg";
        } else if (cuisineFormated.match("ice")) {
          image1.src = "assets/ic.jpg";
          image2.src = "assets/ic.jpg";
          image3.src = "assets/ic.jpg";
        } else if (cuisineFormated.match("bakeries")) {
          image1.src = "assets/bk.jpg";
          image2.src = "assets/bk.jpg";
          image3.src = "assets/bk.jpg";
        } else if (cuisineFormated.match("barbeque")) {
          image1.src = "assets/bbq.jpg";
          image2.src = "assets/bbq.jpg";
          image3.src = "assets/bbq.jpg";
        } else if (cuisineFormated.match("kebabs")) {
          image1.src = "assets/keb.jpg";
          image2.src = "assets/keb.jpg";
          image3.src = "assets/keb.jpg";
        } else if (cuisineFormated.match("fish")) {
          image1.src = "assets/fc.jpg";
          image2.src = "assets/fc.jpg";
          image3.src = "assets/fc.jpg";
        } else if (cuisineFormated.match("south")) {
          image1.src = "assets/southasian.jpg";
          image2.src = "assets/southasian.jpg";
          image3.src = "assets/southasian.jpg";
        } else if (cuisineFormated.match("asian")) {
          image1.src = "assets/asian.jpg";
          image2.src = "assets/asian.jpg";
          image3.src = "assets/asian.jpg";
        } else if (cuisineFormated.match("european")) {
          image1.src = "assets/european.jpg";
          image2.src = "assets/european.jpg";
          image3.src = "assets/european.jpg";
        } else if (cuisineFormated.match("american")) {
          image1.src = "assets/american.jpg";
          image2.src = "assets/american.jpg";
          image3.src = "assets/american.jpg";
        } else if (cuisineFormated.match("fast")) {
          image1.src = "assets/fastfood.jpg";
          image2.src = "assets/fastfood.jpg";
          image3.src = "assets/fastfood.jpg";
        // } else if (cuisineFormated.match("middle")) {
        //   image1.src = "assets/me.jpg";
        //   image2.src = "assets/me.jpg";
        //   image3.src = "assets/me.jpg";
        // } else if (cuisineFormated.match("lebanese")) {
        //   image1.src = "assets/lb.jpg";
        //   image2.src = "assets/lb.jpg";
        //   image3.src = "assets/lb.jpg";
        // } else if (cuisineFormated.match("turkish")) {
        //   image1.src = "assets/tk.jpg";
        //   image2.src = "assets/tk.jpg";
        //   image3.src = "assets/tk.jpg";
        } else {
          image1.src = "assets/food.png";
          image2.src = "assets/food.png";
          image3.src = "assets/food.png";
        }
      }
    });
  });
});

function pluser(str) {
  let withplus = str.replace(/ /g, "+");
  return withplus;
}
